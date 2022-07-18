<template>
  <div class="card mb-4">
            <div class="card-header d-flex justify-content-between">
    <span><i class="fab fa-buffer"></i> Final Approval</span>
  </div>

 <div class="card-body">
   <div class="row">

             <div class="col-md-4">
         <div class="form-group">
           <label>Final Salary</label>
           <input type="number" class="form-control" v-model="finalApprovalObject.final_salary">
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label>Priority</label>
           <input type="number" class="form-control" v-model="finalApprovalObject.priority">
         </div>
       </div>

                <div class="col-md-12">
       <div class="form-group">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="finalApprovalRadio" :value="0" v-model="finalApprovalObject.hire">
          <label class="form-check-label" >Disregard</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="finalApprovalRadio" :value="1" v-model="finalApprovalObject.hire">
          <label class="form-check-label">Hire</label>
        </div>

       <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="finalApprovalRadio" :value="2" v-model="finalApprovalObject.hire">
          <label class="form-check-label">Hire with development</label>
        </div>

       </div>

       </div>

       <div class="col-md-8"></div>

       <div class="col-md-12">
         <div class="form-group">
           <textarea class="form-control text-area" placeholder="Major reasons for hiring with development or disregard ..." rows="5" v-model="finalApprovalObject.notes"></textarea>
         </div>
       </div>




       <div class="col-md-12 text-center mt-4 mb-4">
         <button type="button" class="btn main-btn" @click="onSubmitFinalApproveCandidate" :disabled="btnDisabledValidation">SUBMIT</button>
       </div>

   </div>
 </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'FinalApproval',
  props: ['jobRequestId', 'candidateId'],
  data(){
    return {
       finalApprovalObject: {
         job_request_id: null,
         hire: null,
         notes: null,
         final_salary: null,
         priority: null
       }
    }
  },
  computed: {
     candidateIdComputed(){
       return this.candidateId;
     },
     btnDisabledValidation(){
        return this.finalApprovalObject.hire == null || this.finalApprovalObject.notes == null || this.finalApprovalObject.final_salary == null || this.finalApprovalObject.priority == null
     }
  },
  methods: {
   ...mapActions({
    finalEvaluateCandidate: 'evaluation/finalEvaluateCandidate'
  }),
   onSubmitFinalApproveCandidate(){
     this.finalApprovalObject.job_request_id = Number(this.jobRequestId);
     this.finalEvaluateCandidate({id: this.candidateId, data: this.finalApprovalObject});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
