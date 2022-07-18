<template>
  <div>
    <HomeSectionTitle :title="'Salary Groups'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header d-flex justify-content-between"  v-if="salaryGroup && salaryGroup.salay_group_details">
    <span><i class="fas fa-wallet"></i> {{salaryGroup.salay_group_details.en_name}}</span>
    <span><nuxt-link :to="localePath(`/salarygroups/addEdit-salaryGroup/${salaryGroup.salay_group_details.id}`)" class="text-white"><i class="far fa-edit"></i></nuxt-link></span>
  </div>

   <div class="card-body">
     <div class="row" v-if="salaryGroup && salaryGroup.salay_group_details">

       <div class="col-md-3">
         <div class="form-group">
           <label class="large-label">Name</label>
           <p><span class="badge badge-success large-badge">{{salaryGroup.salay_group_details.en_name}}</span></p>
         </div>
       </div>

      <div class="col-md-3">
         <div class="form-group">
           <label class="large-label">Manager</label>
           <p v-if="salaryGroup.salay_group_details.manager && salaryGroup.salay_group_details.manager.name"><span class="badge badge-success large-badge">{{salaryGroup.salay_group_details.manager.name}}</span></p>
         </div>
       </div>


      <div class="col-md-3">
         <div class="form-group">
           <label class="large-label">Manager Email</label>
           <p v-if="salaryGroup.salay_group_details.manager && salaryGroup.salay_group_details.manager.email"><span class="badge badge-success large-badge">{{salaryGroup.salay_group_details.manager.email}}</span></p>
         </div>
       </div>

        <div class="col-md-3">
         <div class="form-group">
           <label class="large-label">Employees Count</label>
           <p><span class="badge badge-success large-badge">{{salaryGroup.salay_group_employees_count}}</span></p>
         </div>
       </div>

     </div>
   </div>

</div>
<!-- card end -->

 <!-- salary group employees start -->
        <div class="card mb-4">

   <div class="card-body">

     <div class="row">

       <div class="col-md-12">
         <h6>Salary Group Employees</h6>
         <hr />
       </div>

       <div class="col-md-12">
          <div class="table-responsive col-md-12">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Name</th>
      <th>Personal Number</th>
      <th>National Id</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody v-if="salaryGroup.salay_group_employees && salaryGroup.salay_group_employees[0] && salaryGroup.salay_group_employees[0].employees">
    <tr v-for="(salaryGroupEmployee, index) in salaryGroup.salay_group_employees[0].employees" :key="index">
      <td>{{salaryGroupEmployee.id}}</td>
      <td>{{salaryGroupEmployee.en_name}}</td>
      <td>{{salaryGroupEmployee.personal_number}}</td>
      <td>{{salaryGroupEmployee.national_id}}</td>
      <td>
       <nuxt-link :to="localePath(`/employees/${salaryGroupEmployee.id}`)" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('show_employees')">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
      </td>
    </tr>
  </tbody>
</table>
          </div>
       </div>



     </div>


   </div>

</div>
<!-- salary group employees end -->


 <!-- assign positions to salary group card start -->
        <div class="card mb-4">

   <div class="card-body">

     <div class="row">

       <div class="col-md-12">
         <h6>Assign Jobs to Salary Group</h6>
         <hr />
       </div>

       <div class="col-md-12 mb-3" v-if="salaryGroup.salay_group_details && salaryGroup.salay_group_details.manager != null">
           <button class="btn text-main p-0" @click="addNewPosition"><i class="far fa-plus-square"></i> Add New Job</button>
       </div>

       <div class="col-md-12 mb-3" v-if="salaryGroup.salay_group_details && salaryGroup.salay_group_details.manager == null">
           <div class="alert alert-info text-center">Salary group must have a manager to can assign jobs</div>
       </div>

         <div class="col-md-6" v-for="(jobItem, index) in jobsIds" :key="index">
         <div class="form-group">
           <label>Job</label>
           <div class="d-flex">
            <select class="form-control" v-model="jobsIds[index]" :disabled="isJobDisabled">
           <option :value="job.id" v-for="job in jobsLookup" :key="job.id" :selected="jobItem == job.id">{{job.name}}</option>
         </select>
         <span class="text-danger p-3 cursor-pointer" @click="onDeleteJob(jobItem, index, jobsIds)"><i class="far fa-trash-alt"></i></span>
           </div>

         </div>
         </div>

         <div class="col-md-12" v-if="showSaveJobsBtn">
            <button class="btn main-btn btn-sm" @click="saveJobs" :disabled="jobsIds.includes(null)">Save Jobs</button>
         </div>

     </div>


   </div>

</div>
<!-- assign positions to salary group card end -->


 <!-- assign users to salary group card start -->
        <div class="card mb-4">

   <div class="card-body">

     <div class="row">

       <div class="col-md-12">
         <h6>Assign Users to Salary Group</h6>
         <hr />
       </div>

       <div class="col-md-12 mb-3" v-if="salaryGroup.salay_group_details && salaryGroup.salay_group_details.manager != null">
           <button class="btn text-main p-0" @click="addNewUser"><i class="far fa-plus-square"></i> Add New User</button>
       </div>

        <div class="col-md-12 mb-3" v-if="salaryGroup.salay_group_details && salaryGroup.salay_group_details.manager == null">
           <div class="alert alert-info text-center">Salary group must have a manager to can assign users</div>
       </div>

         <div class="col-md-6" v-for="(userIdItem, index) in usersIds" :key="index">
         <div class="form-group">
           <label>User</label>
           <div class="d-flex">
          <select class="form-control" v-model="usersIds[index]" :disabled="isUserDisabled">
           <option :value="user.id" v-for="user in usersLookup" :key="user.id" :selected="userIdItem == user.id">{{user.name}}</option>
         </select>
             <span class="text-danger p-3 cursor-pointer" @click="onDeleteUser(userIdItem, index, usersIds)"><i class="far fa-trash-alt"></i></span>
           </div>
         <!-- <select class="form-control" v-model="usersIds[index]">
           <option :value="user.id" v-for="user in usersLookup" :key="user.id" :selected="userIdItem == user.id">{{user.name}}</option>
         </select> -->

         </div>
         </div>

         <div class="col-md-12" v-if="showSaveUsersBtn">
            <button class="btn main-btn btn-sm" @click="saveUsersToSalaryGroup" :disabled="usersIds.includes(null)">Save Users</button>
         </div>

     </div>


   </div>

</div>
<!-- assign users to salary group card end -->



 <!-- salary group requests start -->
        <div class="card mb-4">

   <div class="card-body">

     <div class="row">

       <div class="col-md-12">
         <h6>Salary Group Requests</h6>
         <hr />
       </div>

       <div class="col-md-12" v-if="myRequests.length > 0">
          <div class="table-responsive col-md-12">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Job Title</th>
      <th>Job</th>
      <th>Requested By</th>
      <th>Requested At</th>
      <th>Experience</th>
      <th>Status</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(myRequest, index) in myRequests" :key="index">
      <td>{{myRequest.id}}</td>
      <td>{{myRequest.job_title}}</td>
      <td>{{myRequest.job_name}}</td>
      <td>{{myRequest.requested_user}}</td>
      <td v-if="myRequest.created_at">{{myRequest.created_at.substring(0,10)}}</td>
      <td>{{myRequest.experience_years}} Years</td>
      <td><span class="job-type full-type" :class="[myRequest.status.message && myRequest.status.message == 'Approved' ? 'full-type' : null, myRequest.status.message && myRequest.status.message == 'Rejected' ? 'internship-type' : null, myRequest.status.message && myRequest.status.message.includes('Pending') ? 'part-type' : null]">{{myRequest.status && myRequest.status.message && myRequest.status.message.includes('Pending')?'Pending':myRequest.status.message}}</span></td>
      <td>
        <nuxt-link :to="localePath(`/recruitment-requests/${myRequest.id}`)">
          <i class="far fa-eye cursor-pointer ml-1 mr-1" title="View Details"></i>
        </nuxt-link>
      </td>
    </tr>
  </tbody>
</table>
          </div>
       </div>

              <div class="col-md-12" v-if="myRequests.length == 0">
         <div class="alert alert-default shadow-sm text-center alert-style"> <i class="far fa-file"></i> There are no requests in this salary group</div>
       </div>

     </div>


   </div>

</div>
<!-- salary group requests end -->

      </div>


    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return{
      isJobDisabled: true,
      isUserDisabled: true,
      showSaveJobsBtn: false,
      showSaveUsersBtn: false,
      assignJobsToSalaryGroupObject: {
         salary_group_id: 7,
         positions: []
       },
       jobsIds: [],
       usersIds: [],
       removeJobObject: {
         salary_group_id: null,
         job_id: null
       },
      removeUserObject: {
         salary_group_id: null,
         user_id: null
       }
    }
  },
  components: {
    HomeSectionTitle
  },
     methods: {
  ...mapActions({
    fetchSalaryGroup: 'salarygroups/fetchSalaryGroup',
    fetchPositionsLookup: 'lookups/fetchPositionsLookup',
    assignJobsToSalaryGroup: 'salarygroups/assignJobsToSalaryGroup',
    assignUsersToSalaryGroup: 'salarygroups/assignUsersToSalaryGroup',
    fetchUsersLookup: 'lookups/fetchUsersLookup',
    fetchJobsLookup: 'lookups/fetchJobsLookup',
    removeJobFromSalarygroup: 'salarygroups/removeJobFromSalarygroup',
    removeUserFromSalarygroup: 'salarygroups/removeUserFromSalarygroup',
    fetchRequestsBySalaryGroup: 'recruitmentRequests/fetchRequestsBySalaryGroup'
  }),
    addNewPosition(){
    this.isJobDisabled = false;
    this.showSaveJobsBtn = true;
    this.jobsIds.push(null);
  },
    addNewUser(){
    this.isUserDisabled = false;
    this.showSaveUsersBtn = true;
    this.usersIds.push(null);
  },
  saveJobs(){
     this.assignJobsToSalaryGroup({salaryGroupId: this.$route.params.id, data: {jobs: this.jobsIds}});
  },
    saveUsersToSalaryGroup(){
     this.assignUsersToSalaryGroup({salaryGroupId: this.$route.params.id, data: {users: this.usersIds}});
  },
  // DeletePosition
  onDeleteJob(positionId, index, jobsIds){
  this.$swal({ title: "Are you sure?", icon: "warning", showDenyButton: true, allowOutsideClick: false })
   .then((result) => {
    if (result.isConfirmed) {
     this.removeJobObject.salary_group_id = this.$route.params.id;
     this.removeJobObject.job_id = positionId;
     this.removeJobFromSalarygroup(this.removeJobObject).then(res => {
     // remove from ui
    jobsIds.splice(index,1);
    // success after item deleted
    this.$swal('Good job!', 'Job has been deleted', 'success');
     })
  }
  });
  },
  onDeleteUser(userIdItem, index, usersIds){
      this.$swal({ title: "Are you sure?", icon: "warning", showDenyButton: true, allowOutsideClick: false })
   .then((result) => {
    if (result.isConfirmed) {
     this.removeUserObject.salary_group_id = this.$route.params.id;
     this.removeUserObject.user_id = userIdItem;
     this.removeUserFromSalarygroup(this.removeUserObject).then(res => {
     // remove from ui
    usersIds.splice(index,1);
    // success after item deleted
    this.$swal('Good job!', 'User has been deleted', 'success');
     })
  }
  });
  }
  },
  created(){
    this.fetchSalaryGroup(this.$route.params.id).then(res => {
      this.jobsIds.push(...this.salaryGroup.salay_group_details.salary_group_job_list);
      this.usersIds.push(...this.salaryGroup.salay_group_details.salary_group_user_list);
    });

    // get positions lookup
    this.fetchPositionsLookup();

     // get users lookup
    this.fetchUsersLookup();

     // get jobs lookup
    this.fetchJobsLookup();

    // get requests by salary group
    this.fetchRequestsBySalaryGroup(this.$route.params.id);


  },
    computed: {
    ...mapGetters({
      salaryGroup: 'salarygroups/salaryGroup',
      positionsLookup: 'lookups/positionsLookup',
      usersLookup: 'lookups/usersLookup',
      jobsLookup: 'lookups/jobsLookup',
      myRequests: 'recruitmentRequests/myRequests'
    }),
    showPermissions(){
      return (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_requests') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('salary_group_manager_approval_requests') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('revise_requests')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_recruitment_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_hr_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_finance_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_admin_manager'))) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates')))
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/card';
</style>
