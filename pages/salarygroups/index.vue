<template>
  <div>
    <HomeSectionTitle :title="'Salary Groups'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
         <div class="col-5 mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_salary-groups')"><i class="fas fa-filter"></i> Filter</button>
        </div>
        <div class="col-2 text-center">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
        <div class="col-5 mb-3 text-right">
          <button type="button" class="btn main-btn btn-sm excel-btn mr-2 ml-2" @click="exportSalarygroupsReportExcel" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_reports')"><i class="far fa-file-excel" title="Export Salary Groups Report"></i></button>
         <nuxt-link :to="localePath('/salarygroups/addEdit-salaryGroup')" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('add_salary-groups')"><button type="button" class="btn main-btn btn-sm"><i class="fas fa-plus"></i> Add Salary Group</button></nuxt-link>
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

      <div class="row" v-if="salaryGroups && salaryGroups.data && salaryGroups.data.data && userPermissionsGlobal && userPermissionsGlobal.includes('list_salary-groups')">

         <!-- Table Mode Start -->
          <div class="table-responsive col-md-12" v-if="!showCardsMode && salaryGroups.data.data.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Name</th>
      <th>Manager</th>
      <th class="w-10">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(salarygroup, index) in salaryGroups.data.data" :key="index">
      <td>{{salarygroup.id}}</td>
      <td>{{salarygroup.name}}</td>
      <td>{{salarygroup.manager}}</td>
      <td>
        <nuxt-link :to="localePath(`/salarygroups/${salarygroup.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('show_salary-groups')">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
        <nuxt-link :to="localePath(`/salarygroups/addEdit-salaryGroup/${salarygroup.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('edit_salary-groups')">
          <i class="far fa-edit cursor-pointer ml-1 mr-1" title="Edit Salary Group"></i>
        </nuxt-link>
          <i class="fas fa-ban cursor-pointer ml-1 mr-1 text-danger" title="Deactivate Salary Group" v-if="salarygroup.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_salary-groups')" @click="onChangeActive(salarygroup.id)"></i>
          <i class="far fa-check-circle cursor-pointer ml-1 mr-1 text-success" title="Activate Salary Group" v-if="salarygroup.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_salary-groups')" @click="onChangeActive(salarygroup.id)"></i>
      </td>
    </tr>
  </tbody>
</table>
          </div>
       <!-- Table Mode End -->

      <!-- Card Mode Start -->
          <template v-if="showCardsMode">
          <div class="col-md-3" v-for="(salarygroup, index) in salaryGroups.data.data" :key="index">
         <CardDynamic
         :mainTitle="salarygroup.name"
         :icon="'fas fa-wallet'"
         :editRoute="`/salarygroups/addEdit-salaryGroup/${salarygroup.id}`"
          :viewRoute="`/salarygroups/${salarygroup.id}`"
         >
         <span class="dropdown-item cursor-pointer" v-if="salarygroup.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_salary-groups')" @click="onChangeActive(salarygroup.id)">Deactivate</span>
         <span class="dropdown-item cursor-pointer" v-if="salarygroup.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_salary-groups')" @click="onChangeActive(salarygroup.id)">Activate</span>
         </CardDynamic>
       </div>
          </template>
      <!-- Card Mode End -->

<!-- Pagination -->
<div class="row w-100 m-0 p-0 mt-2">

    <div class="col-md-6 mt-1">
    Showing {{salaryGroups.data.from}} to {{salaryGroups.data.to}} of {{salaryGroups.data.total}} entries
  </div>

<div class="col-md-6 mb-3">
                <b-pagination
                 align="right"
      v-model="currentPage"
      :total-rows="salaryGroups.recordsTotal"
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
    fetchSalaryGroups: 'salarygroups/fetchSalaryGroups',
    changeActive: 'salarygroups/changeActive',
    exportSalarygroupsReportExcel: 'salarygroups/exportSalarygroupsReportExcel'
  }),
  onPageChange(e){
    this.myObject.page = e;
    this.fetchSalaryGroups(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
    this.fetchSalaryGroups(this.myObject);
  },
  onChangeActive(id){
      this.changeActive(id).then(res => this.fetchSalaryGroups(this.myObject));
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          active: 1,
          text_search: null
       };
    this.fetchSalaryGroups(this.myObject);
  }
  },
  created(){
    this.fetchSalaryGroups(this.myObject);

  },
    computed: {
    ...mapGetters({
      salaryGroups: 'salarygroups/salaryGroups'
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
