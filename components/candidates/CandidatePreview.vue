<template>
  <div class="card mb-4">
  <div class="card-header d-flex justify-content-between">
    <span><i class="far fa-user"></i> {{candidate.candidate_name}}</span>
    <span>
      <nuxt-link :to="localePath(`/job-offer/edit-jobOffer/${candidate.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('create_job_offers') && candidate.status == 'Approved'">
         <i class="far fa-file-alt ml-1 mr-1 text-white" title="Job Offer"></i>
        </nuxt-link>
    </span>
  </div>

   <div class="card-body">
     <div class="row">

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job Title</label>
           <p><span class="badge badge-success large-badge">{{myRequest.job_title}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Interview Date</label>
           <p><span class="badge badge-success large-badge">{{candidate.interview_date}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job Request Salary Range</label>
           <p><span class="badge badge-success large-badge">{{myRequest.salary_range}} {{candidate.currency}}</span></p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Candidate Expected Salary</label>
           <p><span class="badge badge-success large-badge">{{candidate.expected_salary}} {{candidate.currency}}</span></p>
         </div>
       </div>

             <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Position Applied To</label>
           <p><span class="badge badge-success large-badge">{{myRequest.position_name}}</span></p>
         </div>
       </div>

             <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job Recruitment Request No.</label>
           <p><span class="badge badge-success large-badge">{{candidate.job_request_id}}</span></p>
         </div>
       </div>

             <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Date Of Birth</label>
           <p><span class="badge badge-success large-badge">{{candidate.dob}}</span></p>
         </div>
       </div>

             <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Age</label>
           <p><span class="badge badge-success large-badge">{{candidate.age}}</span></p>
         </div>
       </div>

             <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Years Of Experience</label>
           <p><span class="badge badge-success large-badge">{{candidate.experience_years}}</span></p>
         </div>
       </div>

                    <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Nationality</label>
           <p><span class="badge badge-success large-badge">{{candidate.nationality}}</span></p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Email</label>
           <p><span class="badge badge-success large-badge">{{candidate.email}}</span></p>
         </div>
       </div>

             <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Phone</label>
           <p><span class="badge badge-success large-badge">{{candidate.phone}}</span></p>
         </div>
       </div>

        <div class="col-md-4" v-if="previewFilePermissions">
         <div class="form-group">
           <label class="large-label">CV</label>
           <p class="cursor-pointer"><a :href="candidate.cv_file" target="_blank"><span class="badge badge-success large-badge"><i class="far fa-file-alt"></i> Preview</span></a></p>
         </div>
       </div>

     </div>
   </div>

</div>
</template>

<script>
export default {
  name: 'CandidatePreview',
  props: ['candidate', 'myRequest'],
  computed: {
     previewFilePermissions(){
      return (this.candidate && this.candidate.cv_file && this.candidate.cv_file.includes('.pdf')) || (this.candidate && this.candidate.cv_file && this.candidate.cv_file.includes('.doc')) || (this.candidate && this.candidate.cv_file && this.candidate.cv_file.includes('.docx'))
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
