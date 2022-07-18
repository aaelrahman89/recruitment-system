<template>
  <div>
    <HomeSectionTitle :title="'Candidate'" />
    <div class="container">
      <client-only>
        <ValidationObserver v-slot="{ invalid }">
           <form enctype="multipart/form-data">
      <div class="row" v-if="myRequest">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     Candidate
  </div>

   <div class="card-body">
     <div class="row">

       <div class="col-md-12">
         <h5>Candidate Informations</h5>
         <hr />
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Candidate Name</label>
         <input type="text" class="form-control" placeholder="Candidate Name" v-model="myObject.candidate_name">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

        <div class="col-md-4">
       <div class="form-group">
         <label>Job Title</label>
         <input type="text" class="form-control" placeholder="Job Title" :value="myRequest.job_title" readonly>
       </div>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Interview Date</label>
         <input type="text" class="form-control" placeholder="Date" ref="dateInput" @focus="$refs.dateInput.setAttribute('type', 'date')" v-model="myObject.interview_date">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

       <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Expected Salary [{{myRequest.currency}}]</label>
         <input type="number" class="form-control" placeholder="Salary" v-model="myObject.expected_salary">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

       <div class="col-md-4">
       <div class="form-group">
         <label>Job Recruitment Request no.</label>
         <input type="text" class="form-control" placeholder="Request no." v-model="myObject.job_request_id" readonly>
       </div>
       </div>

      <div class="col-md-4">
       <div class="form-group">
         <label>Position Applied to</label>
         <input type="text" class="form-control" placeholder="Position Applied to" :value="myRequest.position_name" readonly>
       </div>
       </div>

         <div class="col-md-4">
           <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Date of Birth</label>
         <input type="text" class="form-control" placeholder="Date of Birth" ref="dateOfBirthInput" @focus="$refs.dateOfBirthInput.setAttribute('type', 'date')" v-model="myObject.dob">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
           </ValidationProvider>
       </div>

       <!-- <div class="col-md-4">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Age</label>
         <input type="number" class="form-control" placeholder="Age" v-model="myObject.age">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div> -->

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
         <label>Nationality</label>
         <input type="text" class="form-control" placeholder="Nationality" v-model="myObject.nationality">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required|email">
       <div class="form-group">
         <label>Email</label>
         <input type="text" class="form-control" placeholder="Email" v-model="myObject.email">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Phone</label>
         <input type="number" class="form-control" placeholder="Phone" v-model="myObject.phone">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
       <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Attach CV  <span v-b-popover.hover.top="'pdf,doc,docx'" title="Available Extensions">
         <i class="fas fa-info-circle"></i>
       </span></label>
         <input class="form-control" type="file" accept=".pdf,.doc,.docx" @change="onFileSelected">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

       <div class="col-md-4"></div>

       <div class="col-md-12 text-center mt-3">
         <button type="button" class="btn main-btn" @click="onSubmit" :disabled="invalid">SUBMIT</button>
       </div>

   </div>
   </div>

</div>
<!-- card end -->



      </div>


    </div>
      </form>
        </ValidationObserver>
      </client-only>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue'
import { mapGetters, mapActions } from "vuex"
export default {
  data(){
    return {
      myObject: {
        job_request_id: Number(this.$route.params.requestId),
        candidate_name: null,
        interview_date: null,
        email: null,
        phone: null,
        experience_years: null,
        nationality: null,
        dob: null,
        expected_salary: null
      },
      factorArray: [],
      factors: [
        {id: 1, title: 'Education', name: 'Education'},
        {id: 2, title: 'Experience', name: 'Experience'}
      ],
       requestObject: {
           education: null,
           experience: null
       }
    }
  },
  components: {
    HomeSectionTitle
  },
  methods: {
      ...mapActions({
    fetchMyRequest: 'recruitmentRequests/fetchMyRequest',
    addEditCandidate: 'candidates/addEditCandidate'
  }),
 onFileSelected(event){
    this.selectedFile = event.target.files[0];
  },
    onSubmit(){
    const fd = new FormData();
    fd.append('job_request_id', Number(this.$route.params.requestId));
    fd.append('candidate_name', this.myObject.candidate_name);
    fd.append('interview_date', this.myObject.interview_date);
    fd.append('email', this.myObject.email);
    fd.append('phone', this.myObject.phone);
    fd.append('experience_years', this.myObject.experience_years);
    fd.append('nationality', this.myObject.nationality);
    fd.append('dob', this.myObject.dob);
    fd.append('expected_salary', this.myObject.expected_salary);
    fd.append('cv_file', this.selectedFile?this.selectedFile:'');

    this.addEditCandidate({id: 0, data: fd});
    }
  },
   computed: {
    ...mapGetters({
      myRequest: 'recruitmentRequests/myRequest'
    })
  },
  created(){

   // fetch request on page load
   this.fetchMyRequest(this.$route.params.requestId)

     // permissions start
     if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('add_candidates')){
          this.$router.push('/')
        }
    // permissions end
  }
}
</script>

<style lang="scss" scoped>
</style>
