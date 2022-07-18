<template>
  <div>
    <HomeSectionTitle :title="'Roles'" />
    <div class="container">

      <!-- Filter -->

     <div class="row mb-3">
       <div class="col-4" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_roles')">
          <select class="form-control" v-model="roleFormControl" @change="onChangeRole">
            <option :value="0" selected disabled>Select Role</option>
           <option :value="role" v-for="role in rolesLookup" :key="role.id">{{role.name}}</option>
         </select>
       </div>
        <div class="col-8 text-right mb-3">
         <button class="btn main-btn btn-sm" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('add_roles')" v-b-modal.modal-1><i class="fas fa-plus"></i> Add Role</button>
        </div>
     </div>

        <div class="row mb-3" v-if="showSavePermissionsBox">
       <div class="col-md-12">
         <div class="bg-white border rounded p-3">
           <div class="row">
               <div class="col-md-4">
               <label>Role Name</label>
               <input type="text" class="form-control" v-model="roleTextFormControl" @input="roleNamePermissionsObject.name = roleTextFormControl">
             </div>

             <div class="col-md-3 mt-2">
               <label class="col-12"></label>
               <button class="btn main-btn mt-1" @click="savePermissions">SAVE PERMISSIONS</button>
               </div>

           </div>
         </div>
       </div>
     </div>

     <div class="row" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_roles')">

       <div class="col-md-3 mb-4" v-for="(permission, index) in permissions" :key="index">
         <ul class="list-group">
           <li class="list-group-item list-group-item-action list-group-item-success" aria-current="true">{{permission.name}}</li>
           <li class="list-group-item" v-for="(permissionItem, index) in permission.permissions" :key="index">
             <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" :id="`check${index}`" @change="onChangeRoleCheckBox(permissionItem, $event)" :disabled="checkBoxDisabled" :checked="setValue(permission.permissions, permissionItem.id)">
  <label class="form-check-label" :for="`check${index}`">
  {{permissionItem.name}}
  </label>
</div>

             </li>
         </ul>
       </div>

     </div>

    </div>


  <!-- Add Role Modal -->
    <b-modal id="modal-1" title="Add Role" :hide-footer="true">
    <div class="row">
        <div class="col-md-12">
               <div class="col-md-12">
               <label>Role Name</label>
               <input type="text" class="form-control" v-model="name">
             </div>

             <div class="col-md-2">
               <label class="col-12"></label>
               <button class="btn main-btn" @click="onAddRole">ADD</button>
               </div>
       </div>
    </div>
  </b-modal>

  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import CardDynamic from '@/components/shared/CardDynamic.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      name: null,
      showSavePermissionsBox: false,
      showAddRole: false,
      currentPage: 1,
      roleFormControl: 0,
      roleTextFormControl: null,
      checkBoxDisabled: true,
      checkBoxChecked: false,
      roleNamePermissionsObject: {
        name: null,
        permissions: []
      },
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
    fetchPermissions: 'roles/fetchPermissions',
    fetchPermissionsByRoleId: 'roles/fetchPermissionsByRoleId',
    editRoleNamePermissions: 'roles/editRoleNamePermissions',
    addRole: 'roles/addRole',
    fetchRolesLookup: 'lookups/fetchRolesLookup'
  }),
  // onAddRole
  onAddRole(){
   this.addRole({name: this.name}).then(res => {
     this.$bvModal.hide('modal-1');
     this.fetchRolesLookup();
    });
  },
  // checked chekbox when change dropdown
   setValue(myPermissions,  id) {
      return this.permissionsByRoleId.find((role) => role.permission_id == id);
    },
  // onChangeRole
  onChangeRole(){
    this.roleTextFormControl = this.roleFormControl.name;
    this.fetchPermissionsByRoleId(this.roleFormControl.id).then(res => {
      this.showSavePermissionsBox = true;
      this.checkBoxDisabled = false;

    this.permissionsByRoleId.forEach(permissionRole => {
      this.roleNamePermissionsObject.permissions.push(permissionRole.permission_id)
    })
    });
  },
  // onChangeRoleCheckBox
  onChangeRoleCheckBox(permissionItem, e){
    this.roleNamePermissionsObject.name = this.roleTextFormControl;
    if(this.roleNamePermissionsObject.permissions.includes(Number(permissionItem.id)) || e.target.checked == false){
      console.log('id exists');
      const permissionItemIndex = this.roleNamePermissionsObject.permissions.indexOf(Number(permissionItem.id));
      if (permissionItemIndex > -1) {
          this.roleNamePermissionsObject.permissions.splice(permissionItemIndex, 1);
      }
    }else{
      this.roleNamePermissionsObject.permissions.push(Number(permissionItem.id));
      // checkBoxChecked
    }

  },
  // savePermissions
  savePermissions(){
    this.editRoleNamePermissions({id: this.roleFormControl.id, data: this.roleNamePermissionsObject}).then(res => {
      this.fetchRolesLookup();
      vm.$forceUpdate();
    });
  }
  },
  created(){
    // fetch permissions
    this.fetchPermissions();

    // get roles lookup
    this.fetchRolesLookup();

    // permissions start
     if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('list_roles')){
          this.$router.push('/');
        }
    // permissions end

  },
    computed: {
    ...mapGetters({
      permissions: 'roles/permissions',
      permissionsByRoleId: 'roles/permissionsByRoleId',
      rolesLookup: 'lookups/rolesLookup'
    })
  },
  mounted(){
    console.log('permissions', this.permissions);
  }
}
</script>

<style lang="scss" scoped>
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
