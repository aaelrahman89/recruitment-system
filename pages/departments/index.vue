<template>
  <div>
    <HomeSectionTitle :title="'Departments'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
         <div class="col-5 mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_departments')"><i class="fas fa-filter"></i> Filter</button>
        </div>
        <div class="col-2 text-center">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
        <div class="col-5 mb-3 text-right">
          <button type="button" class="btn main-btn btn-sm excel-btn mr-2 ml-2" @click="exportDepartmentsReportExcel" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_reports')"><i class="far fa-file-excel" title="Export Departments Report"></i></button>
         <nuxt-link :to="localePath('/departments/addEdit-department')" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('add_departments')"><button class="btn main-btn btn-sm"><i class="fas fa-plus"></i> Add Department</button></nuxt-link>
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

      <div class="row" v-if="allDepartments && allDepartments.data && allDepartments.data.data && userPermissionsGlobal && userPermissionsGlobal.includes('list_departments')">

     <!-- Table Mode Start -->
          <div class="table-responsive col-md-12" v-if="!showCardsMode && allDepartments.data.data.length > 0">
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
    <tr v-for="(department, index) in allDepartments.data.data" :key="index">
      <td>{{department.id}}</td>
      <td>{{department.en_name}}</td>
      <td>{{department.manager}}</td>
      <td>
        <nuxt-link :to="localePath(`/departments/${department.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('show_departments')">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
        <nuxt-link :to="localePath(`/departments/addEdit-department/${department.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('edit_departments')">
          <i class="far fa-edit cursor-pointer ml-1 mr-1" title="Edit Department"></i>
        </nuxt-link>
          <i class="fas fa-ban cursor-pointer ml-1 mr-1 text-danger" title="Deactivate Department" v-if="department.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_departments')" @click="onChangeActive(department.id)"></i>
          <i class="far fa-check-circle cursor-pointer ml-1 mr-1 text-success" title="Activate Department" v-if="department.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_departments')" @click="onChangeActive(department.id)"></i>
      </td>
    </tr>
  </tbody>
</table>
          </div>
       <!-- Table Mode End -->

      <!-- Card Mode Start -->
      <template v-if="showCardsMode">
       <div class="col-md-3" v-for="(department, index) in allDepartments.data.data" :key="index">
         <CardDynamic
         :mainTitle="department.en_name"
         :icon="'fab fa-buffer'"
         :editRoute="`/departments/addEdit-department/${department.id}`"
         :viewRoute="`/departments/${department.id}`"
         >
         <span class="dropdown-item cursor-pointer" v-if="department.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_departments')" @click="onChangeActive(department.id)">Deactivate</span>
         <span class="dropdown-item cursor-pointer" v-if="department.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_departments')" @click="onChangeActive(department.id)">Activate</span>
         </CardDynamic>
       </div>
         </template>
      <!-- Card Mode End -->

<!-- Pagination -->
<div class="row w-100 m-0 p-0 mt-2">

  <div class="col-md-6 mt-1">
    Showing {{allDepartments.data.from}} to {{allDepartments.data.to}} of {{allDepartments.data.total}} entries
  </div>

<div class="col-md-6 mb-3">
                <b-pagination
                 align="right"
      v-model="currentPage"
      :total-rows="allDepartments.recordsTotal"
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
    fetchDepartments: 'departments/fetchDepartments',
    changeActive: 'departments/changeActive',
    exportDepartmentsReportExcel: 'departments/exportDepartmentsReportExcel'
  }),
  onPageChange(e){
    this.myObject.page = e;
    this.fetchDepartments(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
    this.fetchDepartments(this.myObject);
  },
  onChangeActive(id){
      this.changeActive(id).then(res => this.fetchDepartments(this.myObject));
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          active: 1,
          text_search: null
       };
    this.fetchDepartments(this.myObject);
  }
  },
  created(){
    this.fetchDepartments(this.myObject);

  },
    computed: {
    ...mapGetters({
      allDepartments: 'departments/allDepartments'
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
