<template>
  <div>
    <HomeSectionTitle :title="'Candidates'" />
    <div class="container">
      <div class="row" v-if="candidate && myRequest">
      <div class="col-md-12">

     <!-- Candidate Preview -->
     <CandidatePreview :candidate="candidate" :myRequest="myRequest" />

    <!-- DirectManagerEvaluationPreview -->
    <DirectManagerEvaluationPreview :candidate="candidate" v-if="DirectManagerEvaluatePreviewPermissions" />

    <!-- HrEvaluationPreview -->
    <HrEvaluationPreview :candidate="candidate" v-if="HrEvaluatePreviewPermissions" />

    <!-- FinalApproveEvaluationPreview -->
    <FinalApproveEvaluationPreview :candidate="candidate" v-if="FinalApprovalPreviewPermissions" />

     <!-- if Direct Manager (Direct Manager Evaluation) -->
     <DirectManagerEvaluate :jobRequestId="candidate && candidate.job_request_id?candidate.job_request_id:null" :candidateId="candidate?candidate.id:null" :questionsList="questionsList?questionsList:null" :answersList="answersList?answersList:null" v-if="DirectManagerEvaluatePermissions" />

     <!-- if HR department (HR department Evaluation) -->
     <HrEvaluate :jobRequestId="candidate && candidate.job_request_id?candidate.job_request_id:null" :candidateId="candidate?candidate.id:null" :questionsList="questionsList?questionsList:null" :answersList="answersList?answersList:null" v-if="HrEvaluatePermissions" />

     <!-- Final Approve (Final Approve Evaluation) --->
     <FinalApproval :jobRequestId="candidate && candidate.job_request_id?candidate.job_request_id:null" :candidateId="candidate?candidate.id:null" v-if="FinalApprovalPermissions" />

      </div>


    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import DirectManagerEvaluate from '@/components/evaluation/DirectManagerEvaluate.vue';
import HrEvaluate from '@/components/evaluation/HrEvaluate.vue';
import FinalApproval from '@/components/evaluation/FinalApproval.vue';
import DirectManagerEvaluationPreview from '@/components/evaluation/DirectManagerEvaluationPreview.vue';
import HrEvaluationPreview from '@/components/evaluation/HrEvaluationPreview.vue';
import FinalApproveEvaluationPreview from '@/components/evaluation/FinalApproveEvaluationPreview.vue';
import CandidatePreview from '@/components/candidates/CandidatePreview.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {

    }
  },
  components: {
    HomeSectionTitle,
    CandidatePreview,
    DirectManagerEvaluate,
    HrEvaluate,
    FinalApproval,
    DirectManagerEvaluationPreview,
    HrEvaluationPreview,
    FinalApproveEvaluationPreview
  },
     methods: {
  ...mapActions({
    fetchCandidate: 'candidates/fetchCandidate',
    fetchMyRequest: 'recruitmentRequests/fetchMyRequest',
    fetchQuestionsList: 'evaluation/fetchQuestionsList',
    fetchAnswersList: 'evaluation/fetchAnswersList'
  }),
  },
  created(){
    this.fetchCandidate(this.$route.params.id).then(res => this.fetchMyRequest(this.candidate.job_request_id));

    // permissions start
    if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('show_candidates')){
         this.$router.push('/');
        }
    // permissions end

    // fetchQuestionsList
    this.fetchQuestionsList();

    // fetchAnswersList
    this.fetchAnswersList();

  },
    computed: {
    ...mapGetters({
      candidate: 'candidates/candidate',
      myRequest: 'recruitmentRequests/myRequest',
      questionsList: 'evaluation/questionsList',
      answersList: 'evaluation/answersList'
    }),
    DirectManagerEvaluatePermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('manager_evaluate_candidates') && this.userDetailsGlobal && this.userDetailsGlobal.manager_of_salary_groups.includes(this.myRequest.salary_group_id) && this.candidate.status == "Pending Evaluation" && this.candidate.candidate_manager_evaluation == null;
    },
    HrEvaluatePermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') && this.candidate.status == "Pending Evaluation" && this.candidate.candidate_hr_evaluation == null;
    },
    FinalApprovalPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates') && this.candidate.status == "Pending Final Evaluation" && this.candidate.candidate_final_evaluation == null;
    },
    DirectManagerEvaluatePreviewPermissions(){
      return (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('manager_evaluate_candidates') && this.candidate.status != "Pending Evaluation" && this.candidate.candidate_manager_evaluation != null) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') && this.candidate.status != 0 && this.candidate.candidate_manager_evaluation != null) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates') && this.candidate.status != 0 && this.candidate.candidate_manager_evaluation != null);
    },
    HrEvaluatePreviewPermissions(){
       return (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') && this.candidate.status != "Pending Evaluation" && this.candidate.candidate_hr_evaluation != null) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('manager_evaluate_candidates') && this.candidate.status != 0 && this.candidate.candidate_hr_evaluation != null) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates') && this.candidate.status != 0 && this.candidate.candidate_hr_evaluation != null);
    },
    FinalApprovalPreviewPermissions(){
       return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates') && this.candidate.status != 0 && this.candidate.candidate_final_evaluation != null;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
