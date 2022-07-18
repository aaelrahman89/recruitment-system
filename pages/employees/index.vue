<template>
  <div>
    <HomeSectionTitle :title="'Employees'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
         <div class="col-6 mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_employees')"><i class="fas fa-filter"></i> Filter</button>
        </div>
        <div class="col-5 text-right"> <button type="button" class="btn main-btn btn-sm excel-btn mr-2 ml-2" @click="exportEmployeesReportExcel" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_reports')"><i class="far fa-file-excel" title="Export Departments Report"></i></button></div>
        <div class="col-1 text-right">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
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
                 <option :value="2">Inactive</option>
               </select>
             </div>

               <div class="col-md-4">
               <label>Search</label>
               <input type="text" class="form-control" v-model="myObject.text_search">
             </div>

          <div class="col-md-4">
             <div class="form-group">
               <label>Salary Group</label>
                <select class="form-control" v-model="myObject.salary_group">
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

      <div class="row" v-if="allEmployees && allEmployees.data && allEmployees.data.data && userPermissionsGlobal && userPermissionsGlobal.includes('list_employees')">

     <!-- Table Mode Start -->
          <div class="table-responsive col-md-12" v-if="!showCardsMode && allEmployees.data.data.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Name</th>
      <th>الاسم</th>
      <th>Personal Number</th>
      <th>Salary Group</th>
      <th>National Id</th>
      <th class="w-10">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(employee, index) in allEmployees.data.data" :key="index">
      <td>{{employee.id}}</td>
      <td>{{employee.employee_name}}</td>
      <td>{{employee.employee_ar_name}}</td>
      <td>{{employee.personal_number}}</td>
      <td>{{employee.salary_group_name}}</td>
      <td>{{employee.national_id}}</td>
      <td>
        <nuxt-link :to="localePath(`/employees/${employee.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('show_employees')">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
      </td>
    </tr>
  </tbody>
</table>
          </div>
       <!-- Table Mode End -->

      <!-- Card Mode Start -->
      <template v-if="showCardsMode">
       <div class="col-md-3" v-for="(employee, index) in allEmployees.data.data" :key="index">
         <CardDynamic
         :mainTitle="employee.employee_name"
         :secondTitle="employee.salary_group_name"
         :label="employee.personal_number"
         :icon="'fab fa-buffer'"
         :viewRoute="`/employees/${employee.id}`"
         :showDropDown="false"
         >
         </CardDynamic>
       </div>
         </template>
      <!-- Card Mode End -->


<!-- Pagination -->
<div class="row w-100 m-0 p-0 mt-2">

  <div class="col-md-6 mt-1">
    Showing {{allEmployees.data.from}} to {{allEmployees.data.to}} of {{allEmployees.data.total}} entries
  </div>

  <div class="col-md-6 mb-3">
                <b-pagination
                 align="right"
      v-model="currentPage"
      :total-rows="allEmployees.recordsTotal"
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
          active: 1,
          text_search: null,
          salary_group: null
       }
    }
  },
  components: {
    HomeSectionTitle,
    CardDynamic
  },
     methods: {
  ...mapActions({
    fetchEmployees: 'employees/fetchEmployees',
    fetchSalaryGroupsLookup: 'lookups/fetchSalaryGroupsLookup',
    exportEmployeesReportExcel: 'employees/exportEmployeesReportExcel'
  }),
  onPageChange(e){
    this.myObject.page = e;
    this.fetchEmployees(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
    this.fetchEmployees(this.myObject);
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          active: 1,
          text_search: null
       };
    this.fetchEmployees(this.myObject);
  }
  },
  created(){
    this.fetchEmployees(this.myObject);

     // get salary groups lookup
    this.fetchSalaryGroupsLookup();

  },
    computed: {
    ...mapGetters({
      allEmployees: 'employees/allEmployees',
      salaryGroupsLookup: 'lookups/salaryGroupsLookup'
    })
  }
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
