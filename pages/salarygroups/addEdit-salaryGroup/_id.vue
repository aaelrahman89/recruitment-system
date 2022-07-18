<template>
  <div>
    <HomeSectionTitle :title="'Salary Groups'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     <span v-if="!$route.params.id">Add</span> <span v-if="$route.params.id > 0">Edit</span> Salary Group
  </div>

   <div class="card-body">

     <client-only>
   <ValidationObserver v-slot="{ invalid }">
<form>
       <div class="row">

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" :rules="{ required: 'required', min: 3 }" :custom-messages="{ min: 'Must be at least 3 characters' }">
          <div class="form-group">
         <label>Name  <span class="text-danger">*</span></label>
         <input type="text" class="form-control" placeholder="English Name" v-model="myObject.en_name">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
          </ValidationProvider>
       </div>

       <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
         <div class="form-group">
         <label>Manager  <span class="text-danger">*</span></label>
         <select class="form-control" v-model="myObject.manager_id">
           <option :value="manager.id" v-for="manager in managersLookup" :key="manager.id">{{manager.name}}</option>
         </select>
         <div class="text-danger error-msg">{{ errors[0] }}</div>
        </div>
        </ValidationProvider>
       </div>


       <div class="col-md-12 text-center mt-3">
         <button type="button" class="btn main-btn" @click="onAddEdit" :disabled="invalid">SUBMIT</button>
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
         en_name: null,
         manager_id: null
       }
    }
  },
  components: {
    HomeSectionTitle
  },
   methods: {
  ...mapActions({
    addEditSalaryGroup: 'salarygroups/addEditSalaryGroup',
    fetchSalaryGroup: 'salarygroups/fetchSalaryGroup',
    fetchManagersLookup: 'lookups/fetchManagersLookup'
  }),
  onAddEdit(){
    if(this.$route.params.id){
        this.addEditSalaryGroup({id: this.$route.params.id, data: this.myObject});
    }else{
        this.addEditSalaryGroup({id: 0, data: this.myObject});
    }
  }
  },
  created(){
    // get managers lookup
    this.fetchManagersLookup();

      // fetchUser #editMode
    if(this.$route.params.id != 0){

      // fetchSalaryGroup
      this.fetchSalaryGroup(this.$route.params.id).then(res => this.myObject = Object.assign({}, this.salaryGroup.salay_group_details));
    }

        // permissions start
    if(this.$route.params.id > 0){
       // edit
        if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('edit_salary-groups')){
          this.$router.push('/');
        }
    }else{
      // add
      if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('add_salary-groups')){
         this.$router.push('/');
        }
    }
    // permissions end

  },
    computed: {
    ...mapGetters({
      managersLookup: 'lookups/managersLookup',
      salaryGroup: 'salarygroups/salaryGroup'
    })
  },
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
