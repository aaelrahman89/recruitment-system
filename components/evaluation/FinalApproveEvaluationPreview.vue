<template>
   <div class="card mb-4" v-if="candidate && candidate.candidate_final_evaluation">

        <div class="p-3 border-bottom d-flex justify-content-between cursor-pointer" @click="showFinalApproveEvaluationSection = !showFinalApproveEvaluationSection">
     <h5><i class="fas fa-star"></i> Final Approve Evaluation</h5>
     <span><i class="fas" :class="showFinalApproveEvaluationSection?'fa-chevron-up':'fa-chevron-down'"></i></span>
     </div>

    <div class="card-body" v-if="showFinalApproveEvaluationSection">
      <div class="row">

         <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Final Salary</label>
           <p><span class="badge badge-success large-badge">{{candidate.final_salary}} {{candidate.currency}}</span></p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Priority</label>
           <p><span class="badge badge-success large-badge">{{candidate.priority}}</span></p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Hiring Decision</label>
           <p>
             <span class="badge badge-danger large-badge" v-if="candidate.candidate_final_evaluation.hire == 0">Disregard</span>
             <span class="badge badge-success large-badge" v-if="candidate.candidate_final_evaluation.hire == 1">Hired</span>
             <span class="badge badge-success large-badge" v-if="candidate.candidate_final_evaluation.hire == 2">Hired with development</span>
           </p>
         </div>
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label">Notes</label>
           <p><span class="badge badge-success large-badge">{{candidate.candidate_final_evaluation.notes}}</span></p>
         </div>
       </div>

      </div>
    </div>

   </div>
</template>

<script>
export default {
    name: 'FinalApproveEvaluationPreview',
    props: ['candidate'],
    data(){
      return {
        showFinalApproveEvaluationSection: false
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
