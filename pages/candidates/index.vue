<template>
  <div>
    <HomeSectionTitle :title="'Candidates'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
       <div class="col-md-8">
          <button class="btn btn-default border btn-sm" @click="onClickPendingCandidates" :class="btnValue == 1?'btn-info':null" title="Candidates that needs evaluation from recruiter & direct manager" v-if="userPermissionsGlobal && !userPermissionsGlobal.includes('final_evaluation_candidates')">Pending Evaluation Candidates</button>
          <button class="btn btn-default border btn-sm" @click="onClickPendingFinalApprovalCandidates" :class="btnValue == 2?'btn-info':null" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('final_evaluation_candidates')" title="Candidates that needs last evaluation from admin manager">Pending Final Approval Candidates</button>
          <button class="btn btn-default border btn-sm" @click="onClickHiredCandidates" :class="btnValue == 3?'btn-info':null" v-if="(userPermissionsGlobal && userPermissionsGlobal.includes('create_job_offers')) || (userPermissionsGlobal && userPermissionsGlobal.includes('final_evaluation_candidates'))" title="Approved candidates that recruiter can generate job offer">Approved Candidates</button>
       </div>
        <div class="col-md-2 text-right">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
         <div class="col-md-2 text-right mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="candidatesPermissions"><i class="fas fa-filter"></i> Filter</button>
        </div>
     </div>

     <div class="row mb-3" v-if="showFilter">
       <div class="col-md-12">
         <div class="bg-white border rounded p-3">
           <form>
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

             <div class="col-md-12 text-center mt-3">
               <button type="button" class="btn btn-light border" @click="onReset">RESET</button>
               <button type="button" class="btn main-btn" @click="onFilter">SEARCH</button>
             </div>

           </div>
           </form>
         </div>
       </div>
     </div>

      <div class="row" v-if="candidatesPermissions">

             <!-- Table Mode Start -->
          <div class="table-responsive col-md-12" v-if="!showCardsMode && candidates.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Name</th>
      <th>Job Title</th>
      <th>Job Request Number</th>
      <th>Experience</th>
      <th>Expected Salary</th>
      <th>Priority</th>
      <th class="w-10">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(candidate, index) in candidates" :key="index">
      <td>{{candidate.id}}</td>
      <td>{{candidate.name}}</td>
      <td>{{candidate.job_title}}</td>
      <td>{{candidate.job_request_id}}</td>
      <td>{{candidate.experience_years}} Years</td>
      <td>{{candidate.expected_salary}} {{candidate.currency}}</td>
      <td><small class="badge badge-success">{{candidate.priority}}</small></td>
      <td>
        <nuxt-link :to="localePath(`/candidates/${candidate.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('show_candidates')">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
         <nuxt-link :to="localePath(`/job-offer/edit-jobOffer/${candidate.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('create_job_offers') && candidate.status == 'Approved'">
         <i class="far fa-file-alt ml-1 mr-1" title="Job Offer"></i>
        </nuxt-link>
      </td>
    </tr>
  </tbody>
</table>
          </div>
       <!-- Table Mode End -->

        <!-- Card Mode Start -->
          <template v-if="showCardsMode">
       <div class="col-md-3" v-for="(candidate, index) in candidates" :key="index">
         <CardDynamic
         :mainTitle="candidate.name"
         :secondTitle="candidate.job_title"
         :label="candidate.status"
         :icon="'fas fa-user'"
         :editRoute="`/candidates/addEdit-candidate/${candidate.id}`"
         :viewRoute="`/candidates/${candidate.id}`"
         :showDropDown="false"
         :showJobOffer="userPermissionsGlobal && userPermissionsGlobal.includes('create_job_offers')"
         :jobOfferRoute="`/job-offer/edit-jobOffer/${candidate.id}`"
         >
         <!-- <span class="dropdown-item cursor-pointer" v-if="candidate.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_candidates')" @click="onChangeActive(candidate.id)">Deactivate</span>
         <span class="dropdown-item cursor-pointer" v-if="candidate.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_candidates')" @click="onChangeActive(candidate.id)">Activate</span> -->
         </CardDynamic>
       </div>
          </template>
        <!-- Card Mode End -->

<!-- <div class="col-md-12 mt-3 mb-3">
                <b-pagination
                 align="center"
      v-model="currentPage"
      :total-rows="candidates.recordsTotal"
      :per-page="12"
      first-number
      last-number
      @change="onPageChange"
    ></b-pagination>
          </div> -->

          <div class="col-md-12" v-if="candidates && candidates.length == 0">
         <div class="alert alert-default shadow-sm text-center alert-style"> <i class="fas fa-user"></i> There are no candidates now</div>
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
      btnValue: 1,
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
    fetchCandidates: 'candidates/fetchCandidates',
    fetchPendingCandidates: 'candidates/fetchPendingCandidates',
    fetchPendingFinalApprovalCandidates: 'candidates/fetchPendingFinalApprovalCandidates',
    fetchApprovedCandidates: 'candidates/fetchApprovedCandidates',
    changeActive: 'candidates/changeActive'
  }),
  onClickPendingCandidates(){
    this.btnValue = 1;
    this.fetchPendingCandidates();
  },
  onClickPendingFinalApprovalCandidates(){
    this.btnValue = 2;
    this.fetchPendingFinalApprovalCandidates();
  },
  onClickHiredCandidates(){
    this.btnValue = 3;
    this.fetchApprovedCandidates();
  },
  onPageChange(e){
    this.myObject.page = e;
   this.fetchPendingCandidates(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
   this.fetchPendingCandidates(this.myObject);
  },
  onChangeActive(id){
      this.changeActive(id).then(res =>this.fetchPendingCandidates(this.myObject));
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          active: 1,
          text_search: null
       };
       this.fetchPendingCandidates(this.myObject);
  }
  },
  created(){

   this.fetchPendingCandidates();

   if(this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates')){
    this.btnValue = 2;
    this.fetchPendingFinalApprovalCandidates();
   }else{
      this.btnValue = 1;
      this.fetchPendingCandidates();
   }

    // permissions start
      // if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('list_candidates')){
      //     this.$router.push('/');
      // }
    // permissions end


  },
    computed: {
    ...mapGetters({
      candidates: 'candidates/candidates'
    }),
    candidatesPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('list_candidates') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('manager_evaluate_candidates') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates')
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
.fa-file-excel{
  font-size: 17px;
}
.excel-btn{
    padding: 5px !important;
    line-height: 0 !important;
}
</style>
