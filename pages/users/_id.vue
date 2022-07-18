<template>
  <div>
    <HomeSectionTitle :title="'Users'" />
    <div class="container">
      <div class="row">

      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header d-flex justify-content-between">
    <span><i class="fab fa-buffer"></i> {{user.name}}</span>
    <span>
      <nuxt-link :to="localePath(`/users/permissions/${user.id}`)" class="text-white" v-if="userPermissions"><button class="btn btn-default btn-sm text-white border"><i class="fas fa-dice-five" title="User Permissions"></i> Permissions</button></nuxt-link>
      <nuxt-link :to="localePath(`/users/addEdit-user/${user.id}`)" class="text-white" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('edit_users')"><button class="btn btn-default btn-sm text-white border"><i class="far fa-edit" title="Edit User"></i></button></nuxt-link>
    </span>
  </div>

   <div class="card-body">
     <div class="row" v-if="user">

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Name</label>
           <p><span class="badge badge-success large-badge">{{user.name}}</span></p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Email</label>
           <p><span class="badge badge-success large-badge">{{user.email}}</span></p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Phone</label>
           <p><span class="badge badge-success large-badge">{{user.phone}}</span></p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Department</label>
           <p><span class="badge badge-success large-badge">{{user.department_name}}</span></p>
         </div>
       </div>

               <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Salary Group</label>
           <p><span class="badge badge-success large-badge">{{user.salary_group_name}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Role</label>
           <p><span class="badge badge-success large-badge">{{user.role_name}}</span></p>
         </div>
       </div>

               <!-- <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job</label>
           <p><span class="badge badge-success large-badge">{{user.job_name}}</span></p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Position</label>
           <p><span class="badge badge-success large-badge">{{user.position_name}}</span></p>
         </div>
       </div> -->

     </div>
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
  components: {
    HomeSectionTitle
  },
     methods: {
  ...mapActions({
    fetchUser: 'users/fetchUser'
  })
  },
  created(){
    this.fetchUser(this.$route.params.id);

// permissions start
    if((this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('show_users')) && (this.userDetailsGlobal && this.userDetailsGlobal.id != this.$route.params.id) ){
         this.$router.push('/');
        }
    // permissions end

  },
    computed: {
    ...mapGetters({
      user: 'users/user',
    }),
    userPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('edit_roles') && this.userPermissionsGlobal.includes('add_roles')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
