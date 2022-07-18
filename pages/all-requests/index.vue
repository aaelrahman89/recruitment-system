<template>
  <div>
    <HomeSectionTitle :title="'All Requests'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
         <div class="col-6 mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_requests')"><i class="fas fa-filter"></i> Filter</button>
        </div>
        <div class="col-5 text-right">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
         <div class="col-1 text-right"><button type="button" class="btn main-btn btn-sm excel-btn mr-2 ml-2" @click="exportRequestsReportExcel" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_reports')"><i class="far fa-file-excel" title="Export Requests Report"></i></button></div>
     </div>

     <div class="row mb-3" v-if="showFilter">
       <div class="col-md-12">
         <div class="bg-white border rounded p-3">
           <form>
           <div class="row">

               <div class="col-md-4">
               <div class="form-group">
                 <label>Search</label>
               <input type="text" class="form-control" v-model="myObject.text_search">
               </div>
             </div>

           <div class="col-md-4">
             <div class="form-group">
               <label>Salary Group</label>
                <select class="form-control" v-model="myObject.sg_id">
           <option :value="salaryGroup.id" v-for="salaryGroup in salaryGroupsLookup" :key="salaryGroup.id">{{salaryGroup.name}}</option>
         </select>
             </div>
             </div>

             <div class="col-md-4">
               <div class="form-group">
            <label>Job</label>
               <select class="form-control" v-model="myObject.job_id">
           <option :value="job.id" v-for="job in jobsLookup" :key="job.id">{{job.name}}</option>
         </select>
               </div>
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
               <div class="form-group">
            <label>Job Type</label>
                <select class="form-control" v-model="myObject.job_type">
           <option :value="1">Full Time</option>
           <option :value="2">Part Time</option>
           <option :value="3">Per Project</option>
         </select>
               </div>
             </div>

              <div class="col-md-4">
               <div class="form-group">
            <label>Job Work Place</label>
               <select class="form-control" v-model="myObject.job_workplace">
           <option :value="1">In Office</option>
           <option :value="2">Remotely</option>
           <option :value="3">Work from Home</option>
         </select>
               </div>
             </div>

              <div class="col-md-4">
               <div class="form-group">
            <label>Employment Type</label>
               <select class="form-control" v-model="myObject.employment_type">
             <option :value="1">New</option>
             <option :value="2">Replacement</option>
             <option :value="3">Job vacancy</option>
         </select>
               </div>
             </div>

             <div class="col-md-4">
               <div class="form-group">
               <label>From</label>
               <input type="text" class="form-control" ref="fromDateInput" @focus="$refs.fromDateInput.setAttribute('type', 'date')" v-model="myObject.from_date">
             </div>
             </div>

                <div class="col-md-4">
                   <div class="form-group">
               <label>To</label>
               <input type="text" class="form-control" ref="toDateInput" @focus="$refs.toDateInput.setAttribute('type', 'date')" v-model="myObject.to_date">
             </div>
                </div>

              <div class="col-md-4">
                 <div class="form-group">
               <label>Location</label>
               <select class="form-control" v-model="myObject.location_id">
              <option :value="1">Egypt</option>
              <option :value="2">Saudi Arabia</option>
         </select>
                 </div>
             </div>

             <div class="col-md-12 text-center mt-3">
               <button type="button" class="btn btn-light border" @click="onReset">RESET</button>
               <button type="button" class="btn main-btn" @click="onFilter">SEARCH</button>
             </div>

           </div>
           </form>
         </div>
       </div>
     </div>

      <div class="row" v-if="allRequests && allRequests.data && userPermissionsGlobal && userPermissionsGlobal.includes('list_requests')">

  <!-- Table Mode Start -->
  <template v-if="!showCardsMode">
 <div class="table-responsive col-md-12" v-if="allRequests.data.data.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Job Title</th>
      <th>Job</th>
      <th>Requested At</th>
      <th>Experience</th>
      <th>Status</th>
      <th class="w-10">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(myRequest, index) in allRequests.data.data" :key="index">
      <td>{{myRequest.id}}</td>
      <td>{{myRequest.job_title}}</td>
      <td>{{myRequest.job_name}}</td>
      <td v-if="myRequest.created_at">{{myRequest.created_at.substring(0,10)}}</td>
      <td>{{myRequest.experience_years}} Years</td>
      <td><span class="job-type full-type" :class="[myRequest.status.message && myRequest.status.message == 'Approved' ? 'full-type' : null, myRequest.status.message && myRequest.status.message == 'Rejected' ? 'internship-type' : null, myRequest.status.message && myRequest.status.message.includes('Pending') ? 'part-type' : null]">{{myRequest.status && myRequest.status.message && myRequest.status.message.includes('Pending')?'Pending':myRequest.status.message}}</span></td>
      <td>
        <nuxt-link :to="localePath(`/recruitment-requests/${myRequest.id}`)" v-if="showPermissions">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
      </td>
    </tr>
  </tbody>
</table>
          </div>
  </template>
       <!-- Table Mode End -->

      <!-- Card Mode Start -->
      <template v-if="showCardsMode">
       <div class="col-md-3" v-for="(myRequest, index) in allRequests.data.data" :key="index">
         <CardDynamic
         :mainTitle="myRequest.job_title"
         :secondTitle="myRequest.job_name"
         :label="myRequest.status && myRequest.status.message && myRequest.status.message.includes('Pending')?'Pending':myRequest.status.message"
         :labelClass="[myRequest.status.message && myRequest.status.message == 'Approved' ? 'full-type' : null, myRequest.status.message && myRequest.status.message == 'Rejected' ? 'internship-type' : null, myRequest.status.message && myRequest.status.message.includes('Pending') ? 'part-type' : null]"
         :icon="'fab fa-buffer'"
         :viewRoute="`/recruitment-requests/${myRequest.id}`"
         :showDropDown="false"
         >
         </CardDynamic>
       </div>
      </template>
       <!-- Card Mode End -->


<!-- Pagination -->
<div class="row w-100 m-0 p-0 mt-2" v-if="allRequests.data.data.length > 0">

<div class="col-md-6 mt-1">
    Showing {{allRequests.data.from}} to {{allRequests.data.to}} of {{allRequests.data.total}} entries
  </div>

<div class="col-md-6 mb-3">
                <b-pagination
                 align="right"
      v-model="currentPage"
      :total-rows="allRequests.recordsTotal"
      :per-page="12"
      first-number
      last-number
      @change="onPageChange"
    ></b-pagination>
          </div>

</div>



             <div class="col-md-12" v-if="allRequests.data.length == 0">
         <div class="alert alert-default shadow-sm text-center alert-style"> <i class="far fa-file"></i> There are no requests</div>
       </div>

    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import CardDynamic from '@/components/shared/CardDynamic.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      showCardsMode: false,
      showFilter: false,
      currentPage: 1,
       myObject: {
          page: 1,
          length: 12,
          text_search: null,
          sg_id: null,
          department_id: null,
          job_id: null,
          job_workplace: null,
          employment_type: null,
          job_id: null,
          from_date: null,
          to_date: null,
          location_id: null
       }
    }
  },
  components: {
    HomeSectionTitle,
    CardDynamic
  },
     methods: {
  ...mapActions({
    fetchAllRequests: 'recruitmentRequests/fetchAllRequests',
    fetchSalaryGroupsLookup: 'lookups/fetchSalaryGroupsLookup',
    fetchJobsLookup: 'lookups/fetchJobsLookup',
    fetchDepartmentsLookup: 'lookups/fetchDepartmentsLookup',
    exportRequestsReportExcel: 'recruitmentRequests/exportRequestsReportExcel'
  }),
  onPageChange(e){
    this.myObject.page = e;
    this.fetchAllRequests(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
    this.fetchAllRequests(this.myObject);
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          text_search: null,
          sg_id: null,
          job_id: null,
          from_date: null,
          to_date: null,
          location_id: null
       };
    this.fetchAllRequests(this.myObject);
  }
  },
  created(){

    // get salary groups lookup
    this.fetchSalaryGroupsLookup();

    // get jobs lookup
    this.fetchJobsLookup();

    // get departments lookup
    this.fetchDepartmentsLookup();

    this.fetchAllRequests(this.myObject);
  },
    computed: {
    ...mapGetters({
      allRequests: 'recruitmentRequests/allRequests',
      salaryGroupsLookup: 'lookups/salaryGroupsLookup',
      jobsLookup: 'lookups/jobsLookup',
      departmentsLookup: 'lookups/departmentsLookup'
    }),
    showPermissions(){
      return (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_requests') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('salary_group_manager_approval_requests') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('revise_requests')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_recruitment_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_hr_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_finance_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_admin_manager'))) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates')))
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/card';
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
