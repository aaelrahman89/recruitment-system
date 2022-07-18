<template>
  <div>
    <HomeSectionTitle :title="'Employees'" />
    <div class="container" v-if="employee">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header d-flex justify-content-between">
    <span><i class="fab fa-black-tie"></i> {{employee.employee_name}}</span>
  </div>

   <div class="card-body">
     <div class="row">

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Personal Number</label>
           <p><span class="badge badge-success large-badge">{{employee.personal_number}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Salary Group</label>
           <p><span class="badge badge-success large-badge">{{employee.salary_group_name}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">National Id</label>
           <p><span class="badge badge-success large-badge">{{employee.national_id}}</span></p>
         </div>
       </div>

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
    fetchEmployee: 'employees/fetchEmployee'
  })
  },
  created(){
    this.fetchEmployee(this.$route.params.id);

    // permissions start
    if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('show_employees')){
         this.$router.push('/');
        }
    // permissions end

  },
    computed: {
    ...mapGetters({
      employee: 'employees/employee',
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
