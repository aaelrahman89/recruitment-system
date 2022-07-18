<template>
  <div>
    <HomeSectionTitle :title="'Users'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     <span v-if="!$route.params.id">Add</span> <span v-if="$route.params.id > 0">Edit</span> User
  </div>

   <div class="card-body">

     <client-only>
   <ValidationObserver v-slot="{ invalid }">
<form>
       <div class="row">
         <div class="col-md-12">
           <h6>User Informations</h6>
           <hr />
         </div>
        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
          <div class="form-group">
         <label>Name  <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Name" v-model="myObject.name">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required|email">
         <div class="form-group">
         <label>Email  <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Email" v-model="myObject.email">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
        <div class="form-group">
         <label>Phone  <span class="text-danger">*</span></label>
         <input type="number" class="form-control" placeholder="Phone" v-model="myObject.phone">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
         <div class="form-group">
         <label>Department  <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.department_id">
           <option :value="department.id" v-for="department in departmentsLookup" :key="department.id">{{department.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
        </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4" v-if="!$route.params.id">
        <ValidationProvider v-slot="{ errors }" rules="required">
         <div class="form-group">
         <label>Role  <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.role">
           <option :value="role.name" v-for="role in rolesLookup" :key="role.id">{{role.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
      </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
         <div class="form-group">
         <label>Salary Group  <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.salary_group_id">
           <option :value="salaryGroup.id" v-for="salaryGroup in salaryGroupsLookup" :key="salaryGroup.id">{{salaryGroup.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
        </div>
        </ValidationProvider>
       </div>
<!--
      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
         <div class="form-group">
         <label>Job  <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.job_id">
           <option :value="job.id" v-for="job in jobsLookup" :key="job.id">{{job.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
        </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
         <div class="form-group">
         <label>Position  <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.position_id">
           <option :value="position.id" v-for="position in positionsLookup" :key="position.id">{{position.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
        </div>
        </ValidationProvider>
       </div> -->

        <div class="col-md-12">
           <h6>Password</h6>
           <hr />
         </div>

          <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" :rules="!$route.params.id?'required':null">
        <div class="form-group">
         <label>Password  <span class="text-danger" v-if="!$route.params.id">*</span></label>
         <input type="password" class="form-control" name="password" placeholder="Password" v-model="myObject.password" vid="password">
         <div class="text-danger error-msg" v-if="!$route.params.id">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>


       <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" :rules="!$route.params.id?'required':null">
        <div class="form-group">
         <label>Confirm Password  <span class="text-danger" v-if="!$route.params.id">*</span></label>
         <input type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation" v-model="myObject.password_confirmation" data-vv-as="password" ref="confirmInput">
         <div class="text-danger error-msg" v-if="!$route.params.id">{{ errors[0] }}</div>
         <div class="text-danger error-msg" v-if="myObject.password != myObject.password_confirmation && myObject.password_confirmation.length > 0">Password does not match</div>
       </div>
        </ValidationProvider>
       </div>


    <!-- <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
        <div class="form-group">
         <label>Password  <span class="text-danger">*</span></label>
         <input type="text" class="form-control" name="password" placeholder="Password" v-model="myObject.password" vid="password">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
         <div class="text-danger error-msg" v-if="errors.has('password')">{{ errors.first('password') }}</div>
       </div>
        </ValidationProvider>
       </div>


       <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required|confirmed:password">
        <div class="form-group">
         <label>Confirm Password  <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="Confirm Password" name="password_confirmation" v-model="myObject.password_confirmation" data-vv-as="password">>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
         <div class="text-danger error-msg" v-if="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</div>
       </div>
        </ValidationProvider>
       </div> -->



       <div class="col-md-12 text-center mt-3">
         <button type="button" class="btn main-btn" @click="onAddEdit" :disabled="invalid || myObject.password != myObject.password_confirmation">SUBMIT</button>
       </div>

   </div>
     </form>
   </ValidationObserver>
     </client-only>


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
  data(){
    return {
       myObject: {
         id: this.$route.params.id,
         name: null,
         email: null,
         phone: null,
         department_id: null,
         role: null,
         salary_group_id: null,
         password: '',
         password_confirmation: ''
       }
    }
  },
  components: {
    HomeSectionTitle
  },
   methods: {
  ...mapActions({
    addEditUser: 'users/addEditUser',
    fetchUser: 'users/fetchUser',
    fetchDepartmentsLookup: 'lookups/fetchDepartmentsLookup',
    fetchRolesLookup: 'lookups/fetchRolesLookup',
    fetchPositionsLookup: 'lookups/fetchPositionsLookup',
    fetchSalaryGroupsLookup: 'lookups/fetchSalaryGroupsLookup',
    fetchJobsLookup: 'lookups/fetchJobsLookup'
  }),
  onAddEdit(){
    if(this.$route.params.id){
       this.addEditUser({id: this.$route.params.id, data: this.myObject});
    }else{
      this.addEditUser({id: 0, data: this.myObject}).then(res => console.log(res)).catch(err => {
        if(err.response.status == 400){
          this.$swal('Error!', 'Email or Mobile number already be taken', 'error');
        }
      });
    }

  }
  },
  created(){
    // get departments lookup
    this.fetchDepartmentsLookup();

    // get roles lookup
    this.fetchRolesLookup();

    // get positions lookup
    this.fetchPositionsLookup();

     // get salary groups lookup
    this.fetchSalaryGroupsLookup();

    // get jobs lookup
    this.fetchJobsLookup();

   // fetchUser #editMode
    if(this.$route.params.id != 0){
        this.fetchUser(this.$route.params.id).then(res => this.myObject = Object.assign({}, this.user));
    };

    // permissions start
    if(this.$route.params.id > 0){
       // edit
        if( (this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('edit_users')) && (this.userDetailsGlobal && this.userDetailsGlobal.id != this.$route.params.id) ){
          this.$router.push('/');
        }
    }else{
      // add
      if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('add_users')){
         this.$router.push('/');
        }
    }
    // permissions end

  },
    computed: {
    ...mapGetters({
      departmentsLookup: 'lookups/departmentsLookup',
      rolesLookup: 'lookups/rolesLookup',
      positionsLookup: 'lookups/positionsLookup',
      salaryGroupsLookup: 'lookups/salaryGroupsLookup',
      jobsLookup: 'lookups/jobsLookup',
      user: 'users/user'
    })
  },
  beforeCreate(){

  }
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
