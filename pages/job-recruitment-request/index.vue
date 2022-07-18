<template>
  <div>
    <HomeSectionTitle :title="'Job Recruitment Request'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">


<client-only>
   <ValidationObserver v-slot="{ invalid }">
<form @submit.prevent="onSubmitRecruitmentRequest">
 <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     Job Recruitment Request
  </div>

   <div class="card-body">
     <div class="row">

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Job Title</label>
         <input type="text" class="form-control" placeholder="Job Title" v-model="myObject.job_title">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
         </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Department</label>
         <select class="form-control" v-model="myObject.department_id">
           <option :value="department.id" v-for="department in departmentsLookup" :key="department.id">{{department.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Position</label>
         <select class="form-control" v-model="myObject.position_id">
           <option :value="position.id" v-for="position in positionsLookup" :key="position.id">{{position.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

       <div class="col-md-4">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Salary Group Type</label>
          <select class="form-control" v-model="myObject.salary_group_id">
           <option :value="salaryGroup.id" v-for="salaryGroup in salaryGroupsLookup" :key="salaryGroup.id">{{salaryGroup.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>


       <div class="col-md-4">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Salary Range</label>
           <input type="text" class="form-control mr-1 ml-1" placeholder="Salary Range" v-model="myObject.salary_range">
           <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Location</label>
         <input type="text" class="form-control" placeholder="Location" v-model="myObject.location">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Age Range</label>
           <input type="text" class="form-control mr-1 ml-1" placeholder="Age Range" v-model="myObject.age_range">
           <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Years of Experience</label>
         <input type="text" class="form-control" placeholder="Years of Experience" v-model="myObject.experience_years">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>
           Required by Date
 <span v-b-popover.hover.top="'Not less than one month from the date of approval of the request'" title="Required by Date">
    <i class="fas fa-info-circle"></i>
  </span>
         </label>
         <input type="text" class="form-control" placeholder="Required by Date" ref="requiredDateInput" @focus="$refs.requiredDateInput.setAttribute('type', 'date')" v-model="myObject.required_by_date">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>No. of workers in the department</label>
         <input type="text" class="form-control" placeholder="No. of workers in the department" v-model="myObject.department_workers_number">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>No. of workers in the same Position</label>
         <input type="text" class="form-control" placeholder="No. of workers in the same Position" v-model="myObject.position_workers_number">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Qty. Required No</label>
         <div class="d-flex">
           <input type="text" class="form-control mr-1 ml-1" placeholder="Qty. Required No" v-model="myObject.number_required">
         <select class="form-control" v-model="myObject.job_type">
             <option :value="'New'">New</option>
             <option :value="'Replacement'">Replacement</option>
             <option :value="'Job vacancy'">Job vacancy</option>
         </select>
         </div>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

      <div class="col-md-12">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Job Description</label>
         <textarea class="form-control text-area" placeholder="Job Description" rows="7" v-model="myObject.job_description"></textarea>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

       <div class="col-md-12">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Responsibilities</label>
         <textarea class="form-control text-area" placeholder="Responsibilities" rows="7" v-model="myObject.responsibilities"></textarea>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>


       <div class="col-md-12">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Requirements</label>
         <textarea class="form-control text-area" placeholder="Requirements" rows="7" v-model="myObject.requirements"></textarea>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>


       <!-- responsibilities (old) -->
          <!-- <div class="col-md-12">
       <div class="form-group">
         <label>Responsibility</label>
         <div class="d-flex">
           <input type="text" maxlength="128" class="form-control mr-1" placeholder="Add Responsibility" v-model="responsibilityFormControl" @keyup.enter="requestObject.responsibilities.push(responsibilityFormControl)">
           <button class="btn" @click="requestObject.responsibilities.push(responsibilityFormControl)" :disabled="responsibilityFormControl.length == 0?true:false"><i class="fas fa-plus-circle fa-2x"></i></button>
         </div>

<ul class="list-group mt-2">
  <li class="list-group-item active" aria-current="true">Responsibilities</li>
  <li class="list-group-item" v-for="(responsibilityText, index) in requestObject.responsibilities" :key="index">
    <div class="d-flex justify-content-between">
      {{index+1}}- {{responsibilityText}}
      <i class="far fa-trash-alt text-danger cursor-pointer" @click="requestObject.responsibilities.splice(index,1)"></i>
    </div>
  </li>
</ul>

       </div>
       </div> -->


       <!-- requirements (old) -->
          <!-- <div class="col-md-12">
       <div class="form-group">
         <label>Requirements</label>
         <div class="d-flex">
           <input type="text" maxlength="128" class="form-control mr-1" placeholder="Add Requirement" v-model="requirementFormControl" @keyup.enter="requestObject.requirements.push(requirementFormControl)">
           <button class="btn" @click="requestObject.requirements.push(requirementFormControl)" :disabled="requirementFormControl.length == 0?true:false"><i class="fas fa-plus-circle fa-2x"></i></button>
         </div>

<ul class="list-group mt-2">
  <li class="list-group-item active" aria-current="true">Requirements</li>
  <li class="list-group-item" v-for="(requirementText, index) in requestObject.requirements" :key="index">
    <div class="d-flex justify-content-between">
      {{index+1}}- {{requirementText}}
      <i class="far fa-trash-alt text-danger cursor-pointer" @click="requestObject.requirements.splice(index,1)"></i>
    </div>
  </li>
</ul>

       </div>
       </div> -->

         <div class="col-md-12">
           <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Other Notes</label>
         <textarea class="form-control text-area" placeholder="Other Notes" rows="7" v-model="myObject.notes"></textarea>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
           </ValidationProvider>
       </div>

        <!-- <div class="col-md-4">
       <div class="form-group">
         <label>Submited by</label>
         <input type="text" class="form-control" placeholder="Submited by">
       </div>
       </div>

       <div class="col-md-4">
       <div class="form-group">
         <label>Direct Manager</label>
         <input type="text" class="form-control" placeholder="Direct Manager">
       </div>
       </div>

      <div class="col-md-4">
       <div class="form-group">
         <label>Department Manager</label>
         <input type="text" class="form-control" placeholder="Department Manager">
       </div>
       </div> -->

       <div class="col-md-12 text-center mt-3">
         <button type="submit" class="btn main-btn" :disabled="invalid">SUBMIT</button>
       </div>

   </div>
   </div>

</div>
<!-- card end -->

</form>
   </ValidationObserver>
</client-only>

     <!-- if HR user start -->
           <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     Special For HR department
  </div>

   <div class="card-body">

     <div class="row">

         <div class="col-md-12">
       <div class="form-group">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Within Manpower Plan">
          <label class="form-check-label" for="inlineCheckbox1">Within Manpower Plan</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Within Budget">
          <label class="form-check-label" for="inlineCheckbox2">Within Budget</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Out Of Manpower Plan">
          <label class="form-check-label" for="inlineCheckbox3">Out Of Manpower Plan</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Out Of Budget">
          <label class="form-check-label" for="inlineCheckbox4">Out Of Budget</label>
        </div>

       </div>

       </div>

            <div class="col-md-12">
       <div class="form-group">
         <label>We need additional approval for the following reasons</label>
         <textarea class="form-control text-area" placeholder="We need additional approval for the following reasons" rows="7"></textarea>
       </div>
     </div>

      <div class="col-md-12">
       <div class="form-group">
         <label>The request rejected for the following reasons</label>
         <textarea class="form-control text-area" placeholder="We need additional approval for the following reasons" rows="7"></textarea>
       </div>
     </div>

       <div class="col-md-12">
       <div class="form-group">
         <label>Other Notes</label>
         <textarea class="form-control text-area" placeholder="Other Notes" rows="7"></textarea>
       </div>
       </div>

        <div class="col-md-12 text-center mt-3">
         <button type="button" class="btn main-btn">SUBMIT</button>
       </div>

     </div>

   </div>

</div>
<!-- card end -->
     <!-- if HR user end -->


      </div>


    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      responsibilityFormControl: '',
      requirementFormControl: '',
       myObject: {
         job_title: null,
         position_id: null,
         salary_range: null,
         salary_group_id: null,
         department_id: null,
         location: null,
         age_range: null,
         experience_years: null,
         required_by_date: null,
         department_workers_number: null,
         position_workers_number: null,
         number_required: null,
         job_type: 'New',
         job_description: null,
         responsibilities: null,
         requirements: null,
         notes: null
       }
    }
  },
  components: {
    HomeSectionTitle
  },
  methods: {
      ...mapActions({
    fetchDepartmentsLookup: 'lookups/fetchDepartmentsLookup',
    fetchPositionsLookup: 'lookups/fetchPositionsLookup',
    fetchSalaryGroupsLookup: 'lookups/fetchSalaryGroupsLookup'
  }),
    onSubmitRecruitmentRequest(){
      console.log(this.myObject)
    }
  },
      computed: {
    ...mapGetters({
      departmentsLookup: 'lookups/departmentsLookup',
      positionsLookup: 'lookups/positionsLookup',
      salaryGroupsLookup: 'lookups/salaryGroupsLookup'
    })
  },
  created(){
    // get departments lookup
    this.fetchDepartmentsLookup();

    // get positions lookup
    this.fetchPositionsLookup();

     // get salary groups lookup
    this.fetchSalaryGroupsLookup();
  }
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
