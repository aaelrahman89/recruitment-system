<template>
  <div>
    <HomeSectionTitle :title="'Job Offer'" />
    <div class="container" v-if="candidate">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header d-flex justify-content-between">
    <span><i class="fab fa-black-tie"></i> {{candidate.candidate_name}}</span>
    <span>
      <i class="far fa-edit cursor-pointer mr-1 ml-1 border-right pr-2" title="Edit Job Offer"></i>
      <i class="far fa-file-word cursor-pointer mr-1 ml-1 border-right pr-2" title="Preview Job Offer"></i>
      <i class="far fa-envelope cursor-pointer ml-1 mr-1" title="Send Job Offer To Email"></i>
    </span>
  </div>

   <div class="card-body">
     <div class="row">

       <div class="col-md-12">
         <h6><i class="fas fa-briefcase"></i> Job Information</h6>
         <hr />
        </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job Title</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

         <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Classification</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

         <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Department</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

         <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">City</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

         <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Location</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-12">
         <h6><i class="far fa-file-alt"></i> Contract Details</h6>
         <hr />
        </div>

         <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Contract Type</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Contract Duration</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Annual Leaves</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Working Hours</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Probation Period</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-12">
         <h6><i class="fas fa-money-bill-wave"></i> Salary Details Per Month</h6>
         <hr />
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Basic Salary</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Housing Allowance</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Transportation Allowance</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Mobile Allowance</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Gross Salary</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">GOSI Deduction</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Net Salary</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

       <div class="col-md-12">
         <h6><i class="fab fa-buromobelexperte"></i> Benefits</h6>
         <hr />
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Medical Insurance</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Airlines Tickets & Class</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Bonus Incentives</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Other Benefits</label>
           <p><span class="badge badge-success large-badge">lorem</span></p>
         </div>
       </div>

     </div>
   </div>

</div>
<!-- card end -->

      </div>


    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    HomeSectionTitle
  },
     methods: {
  ...mapActions({
    fetchCandidate: 'candidates/fetchCandidate',
  })
  },
  created(){
    this.fetchCandidate(this.$route.params.id);

    // permissions start
    // if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('show_employees')){
    //      this.$router.push('/');
    //     }
    // permissions end

  },
    computed: {
    ...mapGetters({
      candidate: 'candidates/candidate',
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
