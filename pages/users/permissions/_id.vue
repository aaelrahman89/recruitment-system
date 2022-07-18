<template>
  <div>
    <HomeSectionTitle v-if="user && user.name" :title="`${user.name} | Roles & Permissions`" />
    <div class="container">

      <!-- Filter -->

     <div class="row mb-3">

       <div class="col-md-9" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_roles')">
        <multiselect v-model="userRolesandPermissionsObject.roles_ids" placeholder="Select Role" label="name" track-by="id" :options="rolesLookup" :multiple="true" :taggable="true"></multiselect>
       </div>

      <!-- default multi select -->
       <!-- <div class="col-4" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_roles')">
          <select class="form-control text-area" v-model="userRolesandPermissionsObject.roles_ids" multiple>
            <option :value="0" selected disabled>Select Role</option>
           <option :value="role.id" v-for="role in rolesLookup" :key="role.id">{{role.name}}</option>
         </select>
       </div> -->

       <div class="col-md-3"><button class="btn main-btn btn-block" @click="saveUserRolesPermissions">SAVE PERMISSIONS</button></div>
     </div>

     <div class="row" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_roles')">

       <div class="col-md-3 mb-4" v-for="(permission, index) in permissions" :key="index">
         <ul class="list-group">
           <li class="list-group-item list-group-item-action list-group-item-success" aria-current="true">{{permission.name}}</li>
           <li class="list-group-item" v-for="(permissionItem, index) in permission.permissions" :key="index">
             <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" :id="`check${index}`" @change="onChangeRoleCheckBox(permissionItem, $event)" :disabled="setDisabledCheckbox(permissionItem.id)" :checked="setValue(permission.permissions, permissionItem.id)">
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
import Multiselect from 'vue-multiselect'
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
       },
       userRolesandPermissionsObject: {
         roles_ids: [],
         permissions_ids: []
       }
    }
  },
  components: {
    HomeSectionTitle,
    CardDynamic,
    Multiselect
  },
     methods: {
  ...mapActions({
    fetchPermissions: 'roles/fetchPermissions',
    fetchPermissionsByRoleId: 'roles/fetchPermissionsByRoleId',
    editRoleNamePermissions: 'roles/editRoleNamePermissions',
    addRole: 'roles/addRole',
    fetchRolesLookup: 'lookups/fetchRolesLookup',
    fetchPermissionsRelatedToRolesToUser: 'roles-users/fetchPermissionsRelatedToRolesToUser',
    fetchDirectPermissionsToUser: 'roles-users/fetchDirectPermissionsToUser',
    addEditUserRolesandPermissions: 'roles-users/addEditUserRolesandPermissions',
    fetchRolesListAssignedToUser: 'roles-users/fetchRolesListAssignedToUser',
    fetchUser: 'users/fetchUser'
  }),
  // onAddRole
  onAddRole(){
   this.addRole({name: this.name}).then(res => {
     this.$bvModal.hide('modal-1');
     this.fetchRolesLookup();
    });
  },
  // set checked checkbox
   setValue(myPermissions,  id) {
      return this.permissionsRelatedToRolesToUser.find((role) => role.id == id) || this.directPermissionsToUser.find((role) => role.id == id);
    },
    seDropdowntValue(id) {
      return this.permissionsRelatedToRolesToUser.find((role) => role.id == id);
    },
    // setDisabledCheckbox on page load
    setDisabledCheckbox(permissionItemId){
        return this.permissionsRelatedToRolesToUser.some(permissionRelatedItem => permissionRelatedItem.id == permissionItemId);
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

    // add and remove in permissions array
    if(this.userRolesandPermissionsObject.permissions_ids.includes(Number(permissionItem.id)) || e.target.checked == false){
      console.log('id exists');
      const permissionItemIndex = this.userRolesandPermissionsObject.permissions_ids.indexOf(Number(permissionItem.id));
      if (permissionItemIndex > -1) {
          this.userRolesandPermissionsObject.permissions_ids.splice(permissionItemIndex, 1);
      }
    }else{
      this.userRolesandPermissionsObject.permissions_ids.push(Number(permissionItem.id));
      // checkBoxChecked
    }

  },
  // saveUserRolesPermissions
  saveUserRolesPermissions(){
    console.log('this.userRolesandPermissionsObject', this.userRolesandPermissionsObject);
    this.addEditUserRolesandPermissions({userId: this.$route.params.id, data: this.userRolesandPermissionsObject});
  }
  },
  created(){

    // fetch user on page load
    this.fetchUser(this.$route.params.id);

    // fetch permissions
    this.fetchPermissions();

    // get roles lookup
    this.fetchRolesLookup();

    // get rolesListAssignedToUser & then make selected option
    this.fetchRolesListAssignedToUser(this.$route.params.id).then(res => {
      this.rolesListAssignedToUser.forEach(roleListItem => {
         this.userRolesandPermissionsObject.roles_ids.push(roleListItem);
      });
    });

    // get PermissionsRelatedToRolesToUser & add permissions ids in permissions array
    this.fetchPermissionsRelatedToRolesToUser(this.$route.params.id).then(res => {
       this.checkBoxDisabled = false;
       this.permissionsRelatedToRolesToUser.forEach(permissionRole => {
          this.roleNamePermissionsObject.permissions.push(permissionRole.id)
       })
    });

   // get directPermissionsToUser & add permissions ids in permissions array
    this.fetchDirectPermissionsToUser(this.$route.params.id).then(res => {
       this.checkBoxDisabled = false;
       this.directPermissionsToUser.forEach(permissionRole => {
          this.roleNamePermissionsObject.permissions.push(permissionRole.id);
          // push direct permissions ids in permissions ids array in page load
          this.userRolesandPermissionsObject.permissions_ids.push(permissionRole.id);
       })
    });



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
      rolesLookup: 'lookups/rolesLookup',
      permissionsRelatedToRolesToUser: 'roles-users/permissionsRelatedToRolesToUser',
      directPermissionsToUser: 'roles-users/directPermissionsToUser',
      rolesListAssignedToUser:'roles-users/rolesListAssignedToUser',
      user: 'users/user'
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
input[type='checkbox']{
  &:disabled{
    filter: invert(73%) sepia(79%) saturate(6760%) hue-rotate(166deg) brightness(100%) contrast(107%);
    opacity: 1;
  }
}
</style>
