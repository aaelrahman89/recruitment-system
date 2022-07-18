<template>
  <div>
    <HomeSectionTitle :title="'All Candidates'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
         <div class="col-6 mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_candidates')"><i class="fas fa-filter"></i> Filter</button>
        </div>
        <div class="col-5 text-right">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
        <div class="col-1 text-right"><button type="button" class="btn main-btn btn-sm excel-btn mr-2 ml-2" @click="exportCandidatesReportExcel" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_reports')"><i class="far fa-file-excel" title="Export Candidates Report"></i></button></div>
     </div>

     <div class="row mb-3" v-if="showFilter">
       <div class="col-md-12">
         <div class="bg-white border rounded p-3">
           <form>
           <div class="row">

             <div class="col-md-4">
               <label>Status</label>
               <select class="form-control" v-model="myObject.status">
                 <option :value="candidateStatus.id" v-for="candidateStatus in candidateStatusList" :key="candidateStatus.id">{{candidateStatus.status}}</option>
               </select>
             </div>

               <div class="col-md-4">
               <label>Search</label>
               <input type="text" class="form-control" v-model="myObject.text_search">
             </div>

                        <div class="col-md-4">
             <div class="form-group">
               <label>Salary Group</label>
                <select class="form-control" v-model="myObject.salary_group_id">
           <option :value="salaryGroup.id" v-for="salaryGroup in salaryGroupsLookup" :key="salaryGroup.id">{{salaryGroup.name}}</option>
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

      <div class="row" v-if="candidates && candidates.data && candidates.data.data && userPermissionsGlobal && userPermissionsGlobal.includes('list_candidates')">

     <!-- Table Mode Start -->
          <div class="table-responsive col-md-12" v-if="!showCardsMode && candidates.data.data.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Name</th>
      <th>Job Title</th>
      <th>Job Request Number</th>
      <th>Experience</th>
      <th>Expected Salary</th>
      <th>Status</th>
      <!-- <th class="w-10">Details</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="(candidate, index) in candidates.data.data" :key="index">
      <td>{{candidate.id}}</td>
      <td>{{candidate.name}}</td>
      <td>{{candidate.job_title}}</td>
      <td>{{candidate.job_request_id}}</td>
      <td>{{candidate.experience_years}} Years</td>
      <td>{{candidate.expected_salary}} {{candidate.currency}}</td>
       <td v-if="candidate.status"><span class="job-type full-type" :class="[candidate.status == 'Approved' ? 'full-type' : null, candidate.status == 'Rejected' ? 'internship-type' : null, candidate.status.includes('Pending') ? 'part-type' : null]">{{candidate.status.includes('Pending')?candidate.status:candidate.status}}</span></td>
      <!-- <td>
        <nuxt-link :to="localePath(`/candidates/${candidate.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('show_candidates')">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
      </td> -->
    </tr>
  </tbody>
</table>
          </div>
       <!-- Table Mode End -->

        <!-- Card Mode Start -->
          <template v-if="showCardsMode">
       <div class="col-md-3" v-for="(candidate, index) in candidates.data.data" :key="index">
         <CardDynamic
         :mainTitle="candidate.name"
         :secondTitle="candidate.job_title"
         :label="candidate.status"
         :labelClass="[candidate.status == 'Approved' ? 'full-type' : null, candidate.status == 'Rejected' ? 'internship-type' : null, candidate.status.includes('Pending') ? 'part-type' : null]"
         :icon="'fas fa-user'"
         :editRoute="`/candidates/addEdit-candidate/${candidate.id}`"
         :viewRoute="`/candidates/${candidate.id}`"
         :showDropDown="false"
         >
         <!-- <span class="dropdown-item cursor-pointer" v-if="candidate.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_candidates')" @click="onChangeActive(candidate.id)">Deactivate</span>
         <span class="dropdown-item cursor-pointer" v-if="candidate.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_candidates')" @click="onChangeActive(candidate.id)">Activate</span> -->
         </CardDynamic>
       </div>
          </template>
        <!-- Card Mode End -->


<!-- Pagination -->
<div class="row w-100 m-0 p-0 mt-2">

  <div class="col-md-6 mt-1">
    Showing {{candidates.data.from}} to {{candidates.data.to}} of {{candidates.data.total}} entries
  </div>

<div class="col-md-6 mb-3">
                <b-pagination
                 align="right"
      v-model="currentPage"
      :total-rows="candidates.recordsTotal"
      :per-page="12"
      first-number
      last-number
      @change="onPageChange"
    ></b-pagination>
          </div>


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
          status: null,
          text_search: null,
          salary_group_id: null
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
    exportCandidatesReportExcel: 'candidates/exportCandidatesReportExcel',
    fetchCandidateStatusList: 'candidates/fetchCandidateStatusList',
    fetchSalaryGroupsLookup: 'lookups/fetchSalaryGroupsLookup'
  }),
  onPageChange(e){
    this.myObject.page = e;
    this.fetchCandidates(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
    this.fetchCandidates(this.myObject);
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          active: 1,
          text_search: null
       };
    this.fetchCandidates(this.myObject);
  }
  },
  created(){
    this.fetchCandidates(this.myObject);

    // get candidateStatusList
    this.fetchCandidateStatusList();

     // get salary groups lookup
    this.fetchSalaryGroupsLookup();

  },
    computed: {
    ...mapGetters({
      candidates: 'candidates/candidates',
      candidateStatusList: 'candidates/candidateStatusList',
      salaryGroupsLookup: 'lookups/salaryGroupsLookup'
    })
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
