<template>
  <div class="card mb-4">
            <div class="card-header d-flex justify-content-between">
    <span><i class="fab fa-buffer"></i> Hr Department</span>
  </div>

 <div class="card-body">
   <div class="row">

       <div class="col-md-12" v-if="questionsList && questionsList.hr_question_list">
         <!-- Evaluation Factors -->
 <div class="card mb-4">

   <div class="card-body">

     <div class="row">
        <div class="col-md-12">
         <h6>Evaluation Factors</h6>
         <hr />
       </div>

       <!-- Questions with answers -->
       <div :class="question.type == 'text'?'col-md-12':'col-md-2'" v-for="(question, questionIndex) in questionsList.hr_question_list" :key="questionIndex">
       <div class="form-group">
         <!-- Question -->
         <label>{{question.en_name}}</label>

       <!-- Answers -->
       <div class="form-check" :class="question.type == 'text'?'p-0':''" v-for="(answer, answerIndex) in answersList" :key="answer.id">
          <div v-if="question.type == 'choice'">
            <input class="form-check-input" type="radio" :name="`${question.en_name}${question.id}`" :value="answer.en_name" @change="onChangeCheckbox(question, answer, $event)">
            <label class="form-check-label">{{answer.en_name}}</label>
          </div>
          <div v-if="question.type == 'text' && answerIndex == 0">
            <textarea class="form-control text-area" rows="6" @change="onChangeTextarea(question, $event)"></textarea>
          </div>
       </div>

       </div>
       </div>

     </div>

   </div>
 </div>
       </div>


<div class="col-md-12">
<!--  Special For HR department - Interview Results -->
 <div class="card mb-4">

   <div class="card-body">

     <div class="row">

       <div class="col-md-12">
         <h6>Interview Results</h6>
         <hr />
       </div>


 <div class="col-md-12">
       <div class="form-group">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="evaluationObject.iqama">
          <label class="form-check-label" > Valid Iqama 3 months </label>
        </div>

                <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="evaluationObject.transfer_services">
          <label class="form-check-label" > Possibility to transfer services </label>
        </div>

                <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="evaluationObject.certifcates">
          <label class="form-check-label" > Certificates " Experience - Academic " </label>
        </div>

        <br />

                <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="evaluationObject.hadaf_support">
          <label class="form-check-label" > Hadaf support </label>
        </div>

                <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="evaluationObject.tawten_support">
          <label class="form-check-label" >  Tawten support </label>
        </div>

                <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="evaluationObject.no_social_insurance">
          <label class="form-check-label" > Not registered with social insurance </label>
        </div>

       </div>

       </div>


                <div class="col-md-12">
       <div class="form-group">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="directManagerRecommendationsRadio" :value="0" v-model="evaluationObject.hire">
          <label class="form-check-label" >Disregard</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="directManagerRecommendationsRadio" :value="1" v-model="evaluationObject.hire">
          <label class="form-check-label">Hire</label>
        </div>

       <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="directManagerRecommendationsRadio" :value="2" v-model="evaluationObject.hire">
          <label class="form-check-label">Hire with development</label>
        </div>

       </div>

       </div>

       <div class="col-md-12">
         <div class="form-group">
           <textarea class="form-control text-area" placeholder="Major reasons for hiring with development or disregard ..." rows="5" v-model="evaluationObject.notes"></textarea>
         </div>
       </div>

     </div>


   </div>

</div>

</div>

       <div class="col-md-12 text-center mt-4 mb-4">
         <button type="button" class="btn main-btn" @click="onSubmitEvaluateCandidate" :disabled="btnDisabledValidation">SUBMIT</button>
       </div>

   </div>
 </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'HrEvaluate',
  props: ['jobRequestId', 'candidateId', 'questionsList', 'answersList'],
  data(){
    return {
       evaluationObject: {
         evaluator_type: 'hr',
         job_request_id: null,
         evaluations: [],
         hire: null,
         notes: null,
         iqama: false,
         hadaf_support: false,
         transfer_services: false,
         tawten_support: false,
         certifcates: false,
         no_social_insurance: false
       }
    }
  },
  computed: {
     candidateIdComputed(){
       return this.candidateId;
     },
     btnDisabledValidation(){
       if(this.questionsList && this.questionsList.hr_question_list){
          return this.questionsList.hr_question_list.length != this.evaluationObject.evaluations.length && this.evaluationObject.hire == null
       }
     }
  },
  methods: {
   ...mapActions({
    evaluateCandidate: 'evaluation/evaluateCandidate'
  }),
   onChangeCheckbox(question, answer, event){
    console.log(answer);
    if(event.target.checked){
      let myQuestionObject = { question_id: question.id, answer_id: answer.id, question_answer: answer.en_name };
      const found = this.evaluationObject.evaluations.some(el => el.question_id === question.id);
      if(!found){
        this.evaluationObject.evaluations.push(myQuestionObject);
      }
    }
  },
  onChangeTextarea(question, event){
    let myQuestionObject = { question_id: question.id, answer_id: 0, question_answer: event.target.value };
    const found = this.evaluationObject.evaluations.some(el => el.question_id === question.id);
      if(!found){
       this.evaluationObject.evaluations.push(myQuestionObject);
      }
  },
   onSubmitEvaluateCandidate(){
     this.evaluationObject.job_request_id = Number(this.jobRequestId);
     console.log('evaluationObject', this.evaluationObject);
     this.evaluateCandidate({id: this.candidateId, data: this.evaluationObject});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
