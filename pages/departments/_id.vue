<template>
  <div>
    <HomeSectionTitle :title="'Departments'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header d-flex justify-content-between">
    <span v-if="department.en_name"><i class="fab fa-buffer"></i> {{department.en_name}}</span>
    <span v-if="department.id"><nuxt-link :to="localePath(`/departments/addEdit-department/${department.id}`)" class="text-white"><i class="far fa-edit"></i></nuxt-link></span>
  </div>

   <div class="card-body">
     <div class="row" v-if="department">

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">English Name</label>
           <p v-if="department.en_name"><span class="badge badge-success large-badge">{{department.en_name}}</span></p>
         </div>
       </div>

              <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Arabic Name</label>
           <p v-if="department.ar_name"><span class="badge badge-success large-badge">{{department.ar_name}}</span></p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Manager</label>
           <p v-if="department.manager && department.manager.name"><span class="badge badge-success large-badge">{{department.manager.name}}</span></p>
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
    fetchDepartment: 'departments/fetchDepartment'
  })
  },
  created(){
    this.fetchDepartment(this.$route.params.id);

    // permissions start
    if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('show_departments')){
         this.$router.push('/');
        }
    // permissions end

  },
    computed: {
    ...mapGetters({
      department: 'departments/department',
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
