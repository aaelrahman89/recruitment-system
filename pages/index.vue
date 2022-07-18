<template>
  <div>
    <client-only>
      <HomeSectionTitle :title="'Job Recruitment Requests'" />
    <div class="container">

     <!-- <div class="row mb-3" v-if="showFilter">
       <div class="col-md-12">
         <div class="bg-white border rounded p-3">
           <form @submit.prevent="onFilter">
           <div class="row">

             <div class="col-md-4">
               <label>Status</label>
               <select class="form-control" v-model="myObject.active">
                 <option :value="null">All</option>
                 <option :value="1">Active</option>
                 <option :value="2">Blocked</option>
               </select>
             </div>

               <div class="col-md-4">
               <label>Search</label>
               <input type="text" class="form-control" v-model="myObject.text_search">
             </div>

             <div class="col-md-12 text-center mt-3"><button class="btn main-btn">SEARCH</button></div>

           </div>
           </form>
         </div>
       </div>
     </div> -->

      <div class="row" v-if="myRequests">

        <div class="col-md-5 mb-3">
          <!-- <button class="btn btn-default border btn-sm" @click="onClickAllRequests" :class="btnValue == 1?'btn-info':null" v-if="listRequestsPermission">All Requests</button> -->
          <button class="btn btn-default border btn-sm" @click="onClickMyRequests" :class="btnValue == 2?'btn-info':null" title="The Requests That I Created">My Requests</button>
          <button class="btn btn-default border btn-sm" @click="onClickPendingRequests" :class="btnValue == 3?'btn-info':null" title="The Requests That needs Action from me">Pending Requests</button>
          <button class="btn btn-default border btn-sm" @click="onClickApprovedRequests" :class="btnValue == 4?'btn-info':null" title="The Approved Requests From Top Management so Recruiter Can Add Candidates" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('add_candidates')">Approved Requests</button> <!-- v-if="candidatesPermissions" -->
          <!-- Revise -->
          <!-- <button class="btn btn-default border btn-sm" @click="onClickAllReviseRequests" :class="btnValue == 4?'btn-info':null" v-if="reviseRequestsPermissions">All Revise Requests</button> -->
          <!-- <button class="btn btn-default border btn-sm" @click="onClickPendingReviseRequests" :class="btnValue == 5?'btn-info':null" v-if="reviseRequestsPermissions">Pending Revise Requests</button> -->
         <!-- <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_requests')"><i class="fas fa-filter"></i> Filter</button> -->
        </div>
        <div class="col-md-2 text-center">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
        <div class="col-md-5 mb-3 text-right">
         <nuxt-link :to="localePath('/recruitment-requests/addEdit-request')" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('add_requests')"><button class="btn main-btn btn-sm"><i class="fas fa-plus"></i> Add Recruitment Request</button></nuxt-link>
        </div>



          <!-- Table Mode Start -->
          <template v-if="!showCardsMode">
<div class="table-responsive col-md-12" v-if="myRequests.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Job Title</th>
      <th>Job</th>
      <th>Requested At</th>
      <th>Requested By</th>
      <th>Experience</th>
      <th>Status</th>
      <th class="w-10">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(myRequest, index) in myRequests" :key="index">
      <td>{{myRequest.id}}</td>
      <td>{{myRequest.job_title}}</td>
      <td>{{myRequest.job_name}}</td>
      <td v-if="myRequest.created_at">{{myRequest.created_at.substring(0,10)}}</td>
      <td class="text-capitalize">{{myRequest.requested_user}}</td>
      <td>{{myRequest.experience_years}} Years</td>
      <td><span class="job-type full-type" :class="[myRequest.status.message && myRequest.status.message == 'Approved' ? 'full-type' : null, myRequest.status.message && myRequest.status.message == 'Rejected' ? 'internship-type' : null, myRequest.status.message && myRequest.status.message.includes('Pending') ? 'part-type' : null]">{{myRequest.status && myRequest.status.message && myRequest.status.message.includes('Pending')?'Pending':myRequest.status.message}}</span></td>
      <td>
        <nuxt-link :to="localePath(`/recruitment-requests/${myRequest.id}`)" v-if="showPermissions">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
       <nuxt-link :to="localePath(`/candidates/addEdit-candidate/${myRequest.id}`)" v-if="myRequest && myRequest.status && myRequest.status.message && myRequest.status.message == 'Approved' && userPermissionsGlobal && userPermissionsGlobal.includes('add_candidates')">
         <i class="fas fa-user-plus cursor-pointer ml-1 mr-1 text-main" title="Add Candidate"></i>
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
       <div class="col-md-3" v-for="(myRequest, index) in myRequests" :key="index">
         <CardDynamic
         :mainTitle="myRequest.job_title"
         :secondTitle="myRequest.job_name"
         :label="myRequest.status && myRequest.status.message && myRequest.status.message.includes('Pending')?'Pending':myRequest.status.message"
         :labelClass="[myRequest.status.message && myRequest.status.message == 'Approved' ? 'full-type' : null, myRequest.status.message && myRequest.status.message == 'Rejected' ? 'internship-type' : null, myRequest.status.message && myRequest.status.message.includes('Pending') ? 'part-type' : null]"
         :icon="'fab fa-buffer'"
         :editRoute="`/recruitment-requests/addEdit-request/${myRequest.id}`"
         :viewRoute="`/recruitment-requests/${myRequest.id}`"
         :showDropDown="false"
         :showAddCandidate="myRequest && myRequest.status && myRequest.status.message && myRequest.status.message == 'Approved' && userPermissionsGlobal && userPermissionsGlobal.includes('add_candidates')"
         :addCandidateRoute="`/candidates/addEdit-candidate/${myRequest.id}`"
         >
         </CardDynamic>
       </div>
      </template>
       <!-- Card Mode End -->


       <div class="col-md-12" v-if="myRequests.length == 0">
         <div class="alert alert-default shadow-sm text-center alert-style"> <i class="far fa-file"></i> There are no requests now</div>
       </div>

    </div>
    </div>
    </client-only>
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
      btnValue: 1,
      showFilter: false,
      currentPage: 1,
       myObject: {
          page: 1,
          length: 12,
          active: 1,
          text_search: null
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
    fetchMyRequests: 'recruitmentRequests/fetchMyRequests',
    fetchPendingRequests: 'recruitmentRequests/fetchPendingRequests',
    changeActive: 'recruitmentRequests/changeActive',
    fetchApprovedRequests: 'recruitmentRequests/fetchApprovedRequests'
  }),
      onClickAllRequests(){
    this.btnValue = 1;
    this.fetchAllRequests();
  },
    onClickMyRequests(){
    this.btnValue = 2;
    this.fetchMyRequests();
  },
  onClickPendingRequests(){
    this.btnValue = 3;

   // get pending requests for each permission
   if (this.recruitmentManagerRequestsPermissions) {
    this.fetchPendingRequests('recruitment');
    } else if (this.salaryGroupManagerPermissions) {
    this.fetchPendingRequests('salaryGroupManager');
   } else if (this.reviseRequestsPermissions) {
    this.fetchPendingRequests('revise');
   } else if (this.hrOperatingMangerRequestsPermissions) {
    this.fetchPendingRequests('hr');
    } else if (this.financialManagerRequestsPermissions) {
    this.fetchPendingRequests('finance');
    } else if (this.adminManagerRequestsPermissions) {
    this.fetchPendingRequests('admin');
   } else {
    this.fetchPendingRequests('pending');
   }


  },
  onClickApprovedRequests(){
     this.btnValue = 4;
     this.fetchApprovedRequests();
  }
  // onClickAllReviseRequests(){
  //   this.btnValue = 4;
  //  this.fetchPendingRecruitmentManagerRequests();
  // },
  //   onClickPendingReviseRequests(){
  //   this.btnValue = 5;
  //   this.fetchPendingRequests('revise');
  // },
  },
  created(){
    // get my requests
      this.btnValue = 2;
      this.fetchMyRequests();
  },
    computed: {
    ...mapGetters({
      myRequests: 'recruitmentRequests/myRequests'
    }),
    showPermissions(){
      return (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_requests') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('salary_group_manager_approval_requests') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('revise_requests')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_recruitment_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_hr_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_finance_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_admin_manager'))) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates')))
    },
    listRequestsPermission(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('list_requests');
    },
    reviseRequestsPermissions(){
        return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('revise_requests');
    },
    salaryGroupManagerPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('salary_group_manager_approval_requests');
    },
     recruitmentManagerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_recruitment_manager');
    },
     hrOperatingMangerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_hr_manager');
    },
    financialManagerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_finance_manager');
    },
    adminManagerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_admin_manager');
    },
    candidatesPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('list_candidates');
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
