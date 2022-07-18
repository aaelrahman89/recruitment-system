<template>
  <div v-if="candidate">
    <HomeSectionTitle :title="'Job Offer'" />

    <div class="container">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center text-capitalize">
   <small>Candidate:</small>  <small class="badge badge-success candidatename-badge">{{candidate.candidate_name}}</small>
  </div>

   <div class="card-body">

     <client-only>
   <ValidationObserver v-slot="{ invalid }">
<form>
       <div class="row p-0 m-0">

         <section class="col-md-12 border rounded p-3 mb-3">
           <div class="row">
<div class="col-md-12">
           <h6><i class="fas fa-briefcase"></i> Job Information</h6>
           <hr />
         </div>

        <div class="col-md-4">
          <div class="form-group">
         <label>Job Title</label>
         <input type="text" class="form-control" placeholder="Job Title" v-model="myObject.job_title" readonly>
       </div>
       </div>

               <div class="col-md-4">
          <div class="form-group">
         <label>Department</label>
         <input type="text" class="form-control" placeholder="Department" v-model="myObject.department" readonly>
       </div>
       </div>

       <div class="col-md-4">
          <div class="form-group">
         <label>Location</label>
         <input type="text" class="form-control" placeholder="Location" v-model="myObject.location" readonly>
       </div>
       </div>

      <div class="col-md-4">
          <div class="form-group">
         <label>City</label>
         <input type="text" class="form-control" placeholder="City" v-model="myObject.city" readonly>
       </div>
       </div>

           </div>
         </section>

         <section class="col-md-12 border rounded p-3 mb-3">
           <div class="row">
<div class="col-md-12">
           <h6><i class="far fa-file-alt"></i> Contract Details</h6>
           <hr />
         </div>

             <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Contract Type <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Contract Type" v-model="myObject.contract_type">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Contract Duration <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Contract Duration" v-model="myObject.contract_duration">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Annual Leaves <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Annual Leaves" v-model="myObject.annual_leaves">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Working Hours <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Working Hours" v-model="myObject.working_hours">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Probation Period <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Probation Period" v-model="myObject.probration_period">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

           </div>
         </section>


     <section class="col-md-12 border rounded p-3 mb-3">
       <div class="row">
 <div class="col-md-12">
           <h6 class="d-flex justify-content-between">
             <span><i class="fas fa-money-bill-wave"></i> Salary Details Per Month [{{candidate.currency}}]</span>
             <small class="badge badge-success badge-sm">Final Salary: {{candidate.final_salary}} {{candidate.currency}}</small>
            </h6>
           <hr />
         </div>

       <template>
          <div class="col-md-3">
          <div class="form-group">
         <input type="text" class="form-control" placeholder="Final Salary" :value="'Final Salary'" readonly>
       </div>
       </div>
       <div class="col-md-3">
          <div class="form-group">
         <input type="text" class="form-control text-right" placeholder="الراتب النهائى" :value="'الراتب النهائى'" readonly>
       </div>
       </div>
       <div class="col-md-3">
          <div class="form-group">
         <input type="number" class="form-control" placeholder="Value" :value="candidate.final_salary" readonly>
       </div>
       </div>
       <div class="col-md-3"></div>
       </template>

             <div class="col-md-12 mb-3">
           <button class="btn text-main p-0" @click.prevent="addNewSalaryDetail"><i class="far fa-plus-square"></i> Add New Salary Detail</button>
       </div>

       <template v-for="(salaryDetail, index) in salary_details_array">
      <div class="col-md-3">
          <div class="form-group">
         <input type="text" class="form-control" placeholder="English Name" v-model="salaryDetail.name">
       </div>
       </div>
       <div class="col-md-3">
          <div class="form-group">
         <input type="text" class="form-control text-right" placeholder="الاسم بالعربى" v-model="salaryDetail.ar_name">
       </div>
       </div>
       <div class="col-md-3">
          <div class="form-group">
         <input type="number" class="form-control" placeholder="Value" v-model="salaryDetail.value">
       </div>
       </div>
       <div class="col-md-3">
         <div class="form-group mt-2">
           <span class="text-danger p-3 cursor-pointer" @click="onDeleteSalaryDetail(index)"><i class="far fa-trash-alt"></i></span>
         </div>
       </div>
       </template>


       </div>
     </section>


       <section class="col-md-12 border rounded p-3 mb-3">
        <div class="row">
<div class="col-md-12">
           <h6><i class="fab fa-buromobelexperte"></i> Benefits</h6>
           <hr />
         </div>

         <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Medical Insurance <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Medical Insurance" v-model="myObject.medical_insurance">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

               <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Airlines Tickets & Class <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Airlines Tickets & Class" v-model="myObject.airline_tickets_class">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

               <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="form-group">
         <label>Bonus Incentives <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Bonus Incentives" v-model="myObject.bonus_incentives">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

       <div class="col-md-12">
          <div class="form-group">
         <label>Other Benefits</label>
         <input type="text" class="form-control" placeholder="Other Benefits" v-model="myObject.other_benefits">
       </div>
       </div>
        </div>
       </section>

       <div class="col-md-12 text-center mt-3">
         <button type="button" class="btn main-btn" @click="onSubmit" :disabled="invalid"><i class="far fa-file-pdf"></i> Preview Job Offer</button>
         <button type="button" class="btn btn-default border rounded" v-b-modal.modal-1 v-if="jobOffer && jobOffer != null || showSendEmailBtn"><i class="far fa-envelope"></i> Send Email</button>
       </div>

      <!-- Send Job Offer Email to Candidate modal -->
       <b-modal id="modal-1" :title="`Send Job Offer To (${candidate.candidate_name})`" hide-footer>

      <client-only>
   <ValidationObserver v-slot="{ invalid }">
       <form enctype="multipart/form-data">
           <div class="form-group">
            <label>To</label>
            <input type="text" class="form-control" :value="candidate.email" readonly />
          </div>
          <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
          <div class="form-group">
            <label>Subject</label>
            <input type="text" class="form-control" v-model="sendJobofferByMailObject.mail_subject" />
            <div class="text-danger error-msg">{{ errors[0] }}</div>
          </div>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
          <div class="form-group">
            <label>Body</label>
            <textarea class="form-control text-area" rows="4" v-model="sendJobofferByMailObject.mail_body"></textarea>
            <div class="text-danger error-msg">{{ errors[0] }}</div>
          </div>
          </ValidationProvider>
          <div class="form-group">
            <label>Attach CV</label>
            <input type="file" class="form-control" accept=".pdf,.doc,.docx" @change="onChangeFile">
          </div>
          <div class="form-group">
            <button type="button" class="btn main-btn btn-sm" @click="sendMail" :disabled="invalid || selectedMailFile == null">SEND</button>
          </div>
       </form>
   </ValidationObserver>
</client-only>

       </b-modal>

   </div>
     </form>
   </ValidationObserver>
     </client-only>


   </div>

</div>
<!-- card end -->

      </div>


    </div>

    </div>

    <!-- Job Offer Html start -->
           <div class="container">
      <client-only>
         <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        :filename="`Job Offer - ${candidate.candidate_name} (${myObject.job_title})`"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a3"
        pdf-orientation="portrait"
        pdf-content-width="100%"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
            <!-- PDF Content Here -->
            <JobOffer
              :currentDate="new Date().toDateString()"
              :candidateName="candidate.candidate_name"
              :jobTitle="myObject.job_title"
              :department="myObject.department"
              :city="myObject.city"
              :location="myObject.location"
              :contractType="myObject.contract_type"
              :contractDuration="myObject.contract_duration"
              :annualLeaves="myObject.annual_leaves"
              :workingHours="myObject.working_hours"
              :probationPeriod="myObject.probration_period"
              :finalSalary="candidate.final_salary"
              :currency="candidate.currency"
              :medicalInsurance="myObject.medical_insurance"
              :airlinesTickets="myObject.airline_tickets_class"
              :bonusIncentives="myObject.bonus_incentives"
              :otherBenefits="myObject.other_benefits"
              :salary_details_array="salary_details_array"
               />
        </section>
    </vue-html2pdf>
</client-only>
    </div>
    <!-- Job Offer Html end -->

  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import { mapGetters, mapActions } from "vuex";
import JobOffer from '@/components/job-offer/JobOffer.vue';
export default {
  data(){
    return {
      showSendEmailBtn: false,
      salary_details_array: [],
      selectedMailFile: null,
       myObject: {
         job_offer_id: null,
         candidate_id: Number(this.$route.params.candidateId),
         candidate_name: null,
         job_title: null,
         department: null,
         city: null,
         location: null,
         contract_type: 'Limited',
         contract_duration: 'Yearley',
         annual_leaves: 'As per labor law',
         working_hours: '8 Hours a day / 6 Days a week',
         probration_period: '3 Months - Expandable',
         medical_insurance: 'As per labor law',
         airline_tickets_class: "As per Company Policy",
         bonus_incentives: "As per Company Policy",
         other_benefits: null,
         salary_details: []
       },
       sendJobofferByMailObject: {
         candidate_id: null,
         mail_subject: null,
         mail_body: null,
         file: null
       }
    }
  },
  components: {
    HomeSectionTitle,
    JobOffer
  },
   methods: {
  ...mapActions({
    fetchCandidate: 'candidates/fetchCandidate',
    getJobOffer: 'candidates/getJobOffer',
    exportJobOffer: 'candidates/exportJobOffer',
    sendJobofferByMail: 'candidates/sendJobofferByMail'
  }),
  addNewSalaryDetail(){
     this.salary_details_array.push({name: null, value: null})
  },
  onDeleteSalaryDetail(index){
     this.salary_details_array.splice(index, 1);
  },
  onSubmit(){
    this.myObject.salary_details = this.salary_details_array;
    this.myObject.candidate_name = this.candidate.candidate_name;
    this.exportJobOffer(this.myObject).then(res => {
      // export job offer pdf when response success
      this.$refs.html2Pdf.generatePdf();
      this.showSendEmailBtn = true;
    });
  },
  onChangeFile(e){
    this.selectedMailFile = e.target.files[0]
  },
  sendMail(){
    const fd = new FormData();
    fd.append('candidate_id', this.candidate.id);
    fd.append('mail_subject', this.sendJobofferByMailObject.mail_subject);
    fd.append('mail_body', this.sendJobofferByMailObject.mail_body);
    fd.append('file', this.selectedMailFile);
    this.sendJobofferByMail(fd);
    this.$bvModal.hide('modal-1');
  }
  },
  created(){

   //fetchCandidate
    if(this.$route.params.candidateId){
        this.fetchCandidate(this.$route.params.candidateId).then(res => {
          // fill form (fill candidate details)
          this.myObject.job_title = this.candidate.job_title;
          this.myObject.department = this.candidate.department_name;
          this.myObject.city = this.candidate.city;
          this.myObject.location = this.candidate.location;
        })
    };

    // get job offer
    this.getJobOffer({candidate_id: this.$route.params.candidateId}).then(res => {
      // fill job offer data if exists
      if(this.jobOffer){
        this.myObject = Object.assign({}, this.jobOffer);
        this.myObject.job_offer_id = this.jobOffer.id;
        this.salary_details_array = JSON.parse(this.jobOffer.salary_details);
      }
    });

  },
    computed: {
    ...mapGetters({
      candidate: 'candidates/candidate',
      jobOffer: 'candidates/jobOffer'
    })
  },
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
.candidatename-badge{
  font-size: 14px;
}
</style>
