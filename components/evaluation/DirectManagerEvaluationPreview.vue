<template>
   <div class="card mb-4" v-if="candidate && candidate.candidate_manager_evaluation && candidate.candidate_manager_evaluation.candidates_evaluation_details">

     <div class="p-3 border-bottom d-flex justify-content-between cursor-pointer" @click="showDirectManagerSection = !showDirectManagerSection">
     <h5><i class="fas fa-star"></i> Direct Manager Evaluation</h5>
     <span><i class="fas" :class="showDirectManagerSection?'fa-chevron-up':'fa-chevron-down'"></i></span>
     </div>

    <div class="card-body" v-if="showDirectManagerSection">
      <div class="row">

      <div class="col-md-4" v-for="question in candidate.candidate_manager_evaluation.candidates_evaluation_details" :key="question.id">
         <div class="form-group">
           <label class="large-label">{{question.evaluation_question_text}}</label>
           <p><span class="badge badge-success large-badge">{{question.evaluation_question_answer}}</span></p>
         </div>
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label"><i class="fas fa-star"></i> Total Evaluation <i class="fas fa-star"></i></label>
           <p><span class="badge badge-success large-badge">{{candidate.candidate_manager_evaluation.total_score}}</span></p>
         </div>
       </div>

       <hr class="w-100" />

       <div class="col-md-12">
         <h6> Direct manager Recommendations</h6>
         <hr />
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Hiring Decision</label>
           <p>
             <span class="badge badge-danger large-badge" v-if="candidate.candidate_manager_evaluation.hire == 0">Disregard</span>
             <span class="badge badge-success large-badge" v-if="candidate.candidate_manager_evaluation.hire == 1">Hired</span>
             <span class="badge badge-success large-badge" v-if="candidate.candidate_manager_evaluation.hire == 2">Hired with development</span>
           </p>
         </div>
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label">Notes</label>
           <p><span class="badge badge-success large-badge">{{candidate.candidate_manager_evaluation.notes}}</span></p>
         </div>
       </div>

      </div>
    </div>


   </div>
</template>

<script>
export default {
    name: 'DirectManagerEvaluationPreview',
    props: ['candidate'],
    data(){
      return {
        showDirectManagerSection: false
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
