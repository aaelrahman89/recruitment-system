<template>
  <div>
    <HomeSectionTitle :title="'Job Recruitment Requests'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">

  <client-only>
   <ValidationObserver v-slot="{ invalid }">
<form @submit.prevent="onAddEdit" enctype="multipart/form-data">
 <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     <span v-if="!$route.params.id">Add</span> <span v-if="$route.params.id > 0">Edit</span> Job Recruitment Request
  </div>

   <div class="card-body">
     <div class="row">

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
          <div class="form-group">
         <label>Job Title <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Job Title" v-model="myObject.job_title">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
         </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
       <div class="form-group">
         <label>Department</label>
         <select class="form-control" v-model="myObject.department_id">
           <option :value="department.id" v-for="department in departmentsLookup" :key="department.id">{{department.name}}</option>
         </select>
       </div>
       </div>

      <div class="col-md-4">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Salary Group <span class="text-danger">*</span></label>
          <select class="form-control" v-model="myObject.salary_group_id" @change="onChangeSalaryGroup($event.target.value)">
           <option :value="mySalaryGroup.id" v-for="mySalaryGroup in mySalaryGroups" :key="mySalaryGroup.id">{{mySalaryGroup.en_name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Job <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.job_id" @change="onChangeJob($event.target.value)">
           <option :value="job.id" v-for="job in jobs" :key="job.id">{{job.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

     <div class="col-md-4">
       <div class="form-group">
         <label>Position</label>
         <select class="form-control" v-model="myObject.position_id">
           <option :value="position.id" v-for="position in positions" :key="position.id">{{position.en_name}}</option>
         </select>
       </div>
       </div>

       <div class="col-md-4">
         <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
       <div class="form-group">
         <label>Salary Range <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.salary_range">
           <option :value="'1000 to 5000'">1000 to 5000</option>
           <option :value="'5000 to 10000'">5000 to 10000</option>
           <option :value="'10000 to 15000'">10000 to 15000</option>
           <option :value="'15000 to 20000'">15000 to 20000</option>
           <option :value="'20000 to 25000'">20000 to 25000</option>
           <option :value="'25000+'">25000+</option>
         </select>
           <!-- <input type="text" class="form-control mr-1 ml-1" placeholder="from 0 to 00" v-model="myObject.salary_range"> -->
           <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

        <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Location <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.location_id">
           <option :value="1">Egypt</option>
           <option :value="2">Saudi Arabia</option>
         </select>
           <!-- <input type="text" class="form-control mr-1 ml-1" placeholder="from 0 to 00" v-model="myObject.age_range"> -->
           <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" :rules="{ min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
       <div class="form-group">
         <label>City <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="City" v-model="myObject.city">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

       <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Job Type <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.job_type">
           <option :value="1">Full Time</option>
           <option :value="2">Part Time</option>
           <option :value="3">Per Project</option>
         </select>
           <!-- <input type="text" class="form-control mr-1 ml-1" placeholder="from 0 to 00" v-model="myObject.age_range"> -->
           <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

     <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Job Work Place <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.job_workplace">
           <option :value="1">In Office</option>
           <option :value="2">Remotely</option>
           <option :value="3">Work from Home</option>
         </select>
           <!-- <input type="text" class="form-control mr-1 ml-1" placeholder="from 0 to 00" v-model="myObject.age_range"> -->
           <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
       <div class="form-group">
         <label>Age Range <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.age_range">
           <option :value="'20 to 25'">20 to 25</option>
           <option :value="'25 to 30'">25 to 30</option>
           <option :value="'30 to 35'">30 to 35</option>
           <option :value="'35 to 40'">35 to 40</option>
           <option :value="'40+'">40+</option>
         </select>
           <!-- <input type="text" class="form-control mr-1 ml-1" placeholder="from 0 to 00" v-model="myObject.age_range"> -->
           <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Years of Experience <span class="text-danger">*</span></label>
         <input type="number" class="form-control" placeholder="Years of Experience" v-model="myObject.experience_years" onkeydown="return event.keyCode !== 69 && event.keyCode !== 189">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>
           Required by Date <span class="text-danger">*</span>
 <span v-b-popover.hover.top="'Not less than one month from the date of approval of the request'" title="Required by Date">
    <i class="fas fa-info-circle"></i>
  </span>
         </label>
         <!-- <input type="text" class="form-control" placeholder="Required by Date" ref="requiredDateInput" @focus="$refs.requiredDateInput.setAttribute('type', 'date')" v-model="myObject.required_by_date"> -->
         <b-form-datepicker v-model="myObject.required_by_date" :min="currentDay" locale="en"></b-form-datepicker>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

        <!-- <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>No. of workers in the department</label>
         <input type="number" class="form-control" placeholder="No. of workers in the department" v-model="myObject.department_workers_number">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>No. of workers in the same Job</label>
         <input type="number" class="form-control" placeholder="No. of workers in the same Position" v-model="myObject.position_workers_number">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div> -->

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Qty. Required No <span class="text-danger">*</span></label>
         <input type="number" class="form-control mr-1 ml-1" placeholder="Qty. Required No" v-model="myObject.number_required">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

             <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Employment Type <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.employment_type">
             <option :value="1">New</option>
             <option :value="2">Replacement</option>
             <option :value="3">Job vacancy</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

      <div class="col-md-12">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Job Description <span class="text-danger">*</span></label>
         <textarea class="form-control text-area" placeholder="Job Description" rows="7" v-model="myObject.job_description"></textarea>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

       <div class="col-md-12">
         <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
       <div class="form-group">
         <label>Responsibilities <span class="text-danger">*</span></label>
         <textarea class="form-control text-area" placeholder="Responsibilities" rows="7" v-model="myObject.responsibilities"></textarea>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

       <div class="col-md-12">
       <div class="form-group">
         <label>You can attach file  <span v-b-popover.hover.top="'pdf,doc,docx'" title="Available Extensions">
    <i class="fas fa-info-circle"></i>
  </span></label>
         <input class="form-control" type="file" accept=".pdf,.doc,.docx" @change="onFileSelected">
       </div>
       </div>


       <div class="col-md-12">
         <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
       <div class="form-group">
         <label>Requirements <span class="text-danger">*</span></label>
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
           <ValidationProvider v-slot="{ errors }" :rules="{ min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
       <div class="form-group">
         <label>Other Notes</label>
         <textarea class="form-control text-area" placeholder="Other Notes" rows="7" v-model="myObject.notes"></textarea>
          <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

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

      </div>


    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AddEditRequest',
  data(){
    return {
      selectedFile: null,
       myObject: {
         id: this.$route.params.id,
         job_title: null,
         job_id: null,
         position_id: null,
         salary_range: null,
         salary_group_id: null,
         department_id: null,
         location_id: null,
         city: null,
         job_type: 1,
         job_workplace: 1,
         age_range: null,
         experience_years: null,
         required_by_date: null,
         number_required: null,
         employment_type: 1,
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
    addEditRequest: 'recruitmentRequests/addEditRequest',
    fetchMyRequest: 'recruitmentRequests/fetchMyRequest',
    fetchDepartmentsLookup: 'lookups/fetchDepartmentsLookup',
    fetchPositionsLookup: 'lookups/fetchPositionsLookup',
    fetchSalaryGroupsLookup: 'lookups/fetchSalaryGroupsLookup',
    fetchJobsBySalaryGroup: 'salarygroups/fetchJobsBySalaryGroup',
    fetchPositionsByJob: 'salarygroups/fetchPositionsByJob',
    fetchMySalaryGroups: 'salarygroups/fetchMySalaryGroups'
  }),
    onFileSelected(event){
    this.selectedFile = event.target.files[0];
  },
  onAddEdit(){
    const fd = new FormData();
    fd.append('id', this.$route.params.id);
    fd.append('job_title', this.myObject.job_title);
    fd.append('job_id', this.myObject.job_id);
    fd.append('position_id', this.myObject.position_id);
    fd.append('salary_range', this.myObject.salary_range);
    fd.append('salary_group_id', this.myObject.salary_group_id);
    fd.append('department_id', this.myObject.department_id);
    fd.append('location_id', this.myObject.location_id);
    fd.append('city', this.myObject.city);
    fd.append('age_range', this.myObject.age_range);
    fd.append('experience_years', this.myObject.experience_years);
    fd.append('required_by_date', this.myObject.required_by_date);
    fd.append('number_required', this.myObject.number_required);
    fd.append('employment_type', this.myObject.employment_type);
    fd.append('job_type', this.myObject.job_type);
    fd.append('job_workplace', this.myObject.job_workplace);
    fd.append('job_description', this.myObject.job_description);
    fd.append('responsibilities', this.myObject.responsibilities);
    fd.append('requirements', this.myObject.requirements);
    fd.append('notes', this.myObject.notes);
    fd.append('attach', this.selectedFile?this.selectedFile:'');
    if(this.$route.params.id){
       this.addEditRequest({id: this.$route.params.id, data: fd});
    }else{
      this.addEditRequest({id: 0, data: fd});
    }

  },
  onChangeSalaryGroup(salaryGroupId){
    this.fetchJobsBySalaryGroup({salary_group_id: Number(salaryGroupId)})
  },
  onChangeJob(jobId){
      this.fetchPositionsByJob({job_id: Number(jobId)})
  },
  },
  created(){

   // get departments lookup
    this.fetchDepartmentsLookup();

    // get positions lookup
    this.fetchPositionsLookup();

     // get salary groups lookup
    this.fetchSalaryGroupsLookup();

    // get my salary groups lookup
    this.fetchMySalaryGroups();

   // fetchMyRequest #editMode
    if(this.$route.params.id){
        this.fetchMyRequest(this.$route.params.id).then(res => this.myObject = Object.assign({}, this.myRequest));
    };

    // permissions start
    if(this.$route.params.id){
       // edit
        if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('edit_requests')){
          this.$router.push('/');
        }
    }else{
      // add
      if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('add_requests')){
         this.$router.push('/');
        }
    }
    // permissions end

  },
    computed: {
    ...mapGetters({
      myRequest: 'recruitmentRequests/myRequest',
      departmentsLookup: 'lookups/departmentsLookup',
      positionsLookup: 'lookups/positionsLookup',
      salaryGroupsLookup: 'lookups/salaryGroupsLookup',
      jobs: 'salarygroups/jobs',
      positions: 'salarygroups/positions',
      mySalaryGroups: 'salarygroups/mySalaryGroups'
    }),
    currentDay(){
      return new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
