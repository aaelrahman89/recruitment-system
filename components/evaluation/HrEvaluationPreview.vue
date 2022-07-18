<template>
   <div class="card mb-4" v-if="candidate && candidate.candidate_hr_evaluation && candidate.candidate_hr_evaluation.candidates_evaluation_details">
     <div class="p-3 border-bottom d-flex justify-content-between cursor-pointer" @click="showHrEvaluationSection = !showHrEvaluationSection">
     <h5><i class="fas fa-star"></i> Hr Evaluation</h5>
     <span><i class="fas" :class="showHrEvaluationSection?'fa-chevron-up':'fa-chevron-down'"></i></span>
     </div>

    <div class="card-body" v-if="showHrEvaluationSection">
      <div class="row">

      <div class="col-md-4" v-for="question in candidate.candidate_hr_evaluation.candidates_evaluation_details" :key="question.id">
         <div class="form-group">
           <label class="large-label">{{question.evaluation_question_text}}</label>
           <p><span class="badge badge-success large-badge">{{question.evaluation_question_answer}}</span></p>
         </div>
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label"><i class="fas fa-star"></i> Total Evaluation <i class="fas fa-star"></i></label>
           <p><span class="badge badge-success large-badge">{{candidate.candidate_hr_evaluation.total_score}}</span></p>
         </div>
       </div>

      <hr class="w-100" />

       <div class="col-md-12">
         <h6> Interview Results</h6>
         <hr />
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Valid Iqama 3 Months</label>
           <p>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.iqama == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.iqama == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Possibility To Transfer Services</label>
           <p>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.transfer_services == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.transfer_services == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Certificates " Experience - Academic "</label>
           <p>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.certifcates == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.certifcates == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Hadaf Support</label>
           <p>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.hadaf_support == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.hadaf_support == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Tawten Support</label>
           <p>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.tawten_support == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.tawten_support == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Not Registered With Social Insurance</label>
           <p>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.no_social_insurance == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="candidate.candidate_hr_evaluation.no_social_insurance == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Hiring Decision</label>
           <p>
             <span class="badge badge-danger large-badge" v-if="candidate.candidate_hr_evaluation.hire == 0">Disregard</span>
             <span class="badge badge-success large-badge" v-if="candidate.candidate_hr_evaluation.hire == 1">Hired</span>
             <span class="badge badge-success large-badge" v-if="candidate.candidate_hr_evaluation.hire == 2">Hired with development</span>
           </p>
         </div>
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label">Notes</label>
           <p><span class="badge badge-success large-badge">{{candidate.candidate_hr_evaluation.notes}}</span></p>
         </div>
       </div>

      </div>
    </div>

   </div>
</template>

<script>
export default {
    name: 'HrEvaluationPreview',
    props: ['candidate'],
    data(){
      return {
        showHrEvaluationSection: false
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
