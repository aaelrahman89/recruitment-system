<template>
  <div>
    <HomeSectionTitle :title="'Users'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
         <div class="col-5 mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_users')"><i class="fas fa-filter"></i> Filter</button>
        </div>
        <div class="col-2 text-center">
          <div class="rounded p-1">
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
        <div class="col-5 mb-3 text-right">
          <button type="button" class="btn main-btn btn-sm excel-btn mr-2 ml-2" @click="exportUsersReportExcel" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_reports')"><i class="far fa-file-excel" title="Export Users Report"></i></button>
         <nuxt-link :to="localePath('/users/addEdit-user')" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('add_users')"><button class="btn main-btn btn-sm"><i class="fas fa-plus"></i> Add User</button></nuxt-link>
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
               <label>Department</label>
               <select class="form-control" v-model="myObject.department">
           <option :value="department.id" v-for="department in departmentsLookup" :key="department.id">{{department.name}}</option>
         </select>
             </div>

            <div class="col-md-4">
             <div class="form-group">
               <label>Salary Group</label>
                <select class="form-control" v-model="myObject.salary_group">
           <option :value="salaryGroup.id" v-for="salaryGroup in salaryGroupsLookup" :key="salaryGroup.id">{{salaryGroup.name}}</option>
         </select>
             </div>
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

      <div class="row" v-if="allUsers && allUsers.data && allUsers.data.data && userPermissionsGlobal && userPermissionsGlobal.includes('list_users')">

      <!-- Table Mode Start -->
          <div class="table-responsive col-md-12" v-if="!showCardsMode && allUsers.data.data.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Department</th>
      <th>Role</th>
      <th class="w-10">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in allUsers.data.data" :key="index">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.department}}</td>
      <td>{{user.role_name}}</td>
      <td>
        <nuxt-link :to="localePath(`/users/${user.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('show_users')">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
        <nuxt-link :to="localePath(`/users/addEdit-user/${user.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('edit_users')">
          <i class="far fa-edit cursor-pointer ml-1 mr-1" title="Edit User"></i>
        </nuxt-link>
          <i class="fas fa-ban cursor-pointer ml-1 mr-1 text-danger" title="Deactivate User" v-if="user.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_users') && userDetailsGlobal && userDetailsGlobal.id != user.id" @click="onChangeActive(user.id)"></i>
          <i class="far fa-check-circle cursor-pointer ml-1 mr-1 text-success" title="Activate User" v-if="user.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_users') && userDetailsGlobal && userDetailsGlobal.id != user.id" @click="onChangeActive(user.id)"></i>
      </td>
    </tr>
  </tbody>
</table>
          </div>
       <!-- Table Mode End -->


      <!-- Card Mode Start -->
       <template v-if="showCardsMode">
         <div class="col-md-3" v-for="(user, index) in allUsers.data.data" :key="index">
         <CardDynamic
         :mainTitle="user.name"
         :secondTitle="user.email"
         :label="user.department"
         :icon="'far fa-user'"
         :editRoute="`/users/addEdit-user/${user.id}`"
         :viewRoute="`/users/${user.id}`"
         >
         <span class="dropdown-item cursor-pointer" v-if="user.active == 1 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_users') && userDetailsGlobal && userDetailsGlobal.id != user.id" @click="onChangeActive(user.id)">Deactivate</span>
         <span class="dropdown-item cursor-pointer" v-if="user.active == 2 && userPermissionsGlobal && userPermissionsGlobal.includes('delete_users') && userDetailsGlobal && userDetailsGlobal.id != user.id" @click="onChangeActive(user.id)">Activate</span>
         </CardDynamic>
       </div>
       </template>
      <!-- Card Mode End -->

<!-- Pagination -->
<div class="row w-100 m-0 p-0 mt-2">

  <div class="col-md-6 mt-1">
    Showing {{allUsers.data.from}} to {{allUsers.data.to}} of {{allUsers.data.total}} entries
  </div>

<div class="col-md-6 mb-3">
                <b-pagination
                 align="right"
      v-model="currentPage"
      :total-rows="allUsers.recordsTotal"
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
          department: null,
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
    fetchUsers: 'users/fetchUsers',
    fetchDepartmentsLookup: 'lookups/fetchDepartmentsLookup',
    changeActive: 'users/changeActive',
    fetchSalaryGroupsLookup: 'lookups/fetchSalaryGroupsLookup',
    exportUsersReportExcel: 'users/exportUsersReportExcel'
  }),
  onPageChange(e){
    this.myObject.page = e;
    this.fetchUsers(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
    this.fetchUsers(this.myObject);
  },
  onChangeActive(id){
      this.changeActive(id).then(res => this.fetchUsers(this.myObject));
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          active: 1,
          department: null,
          text_search: null,
          salary_group: null
       };
       this.fetchUsers(this.myObject);
  }
  },
  created(){
    this.fetchUsers(this.myObject);

     // get departments lookup
    this.fetchDepartmentsLookup();

    // get salary groups lookup
    this.fetchSalaryGroupsLookup();

  },
    computed: {
    ...mapGetters({
      allUsers: 'users/allUsers',
      departmentsLookup: 'lookups/departmentsLookup',
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
