export const state = () => ({
  permissionsRelatedToRolesToUser: [],
  directPermissionsToUser: [],
  rolesListAssignedToUser: [],
})

export const getters = {
  permissionsRelatedToRolesToUser: state => state.permissionsRelatedToRolesToUser,
  directPermissionsToUser: state => state.directPermissionsToUser,
  rolesListAssignedToUser: state => state.rolesListAssignedToUser,
};

export const actions = {

  // fetchPermissionsRelatedToRolesToUser
  async fetchPermissionsRelatedToRolesToUser({ commit }, userId) {
    const response = await this.$axios.$post( `roles/user/${userId}/roles/permissions/list`, null );
    commit('setPermissionsRelatedToRolesToUser', response.data.user_roles_permissions);
  },

  // fetchDirectPermissionsToUser
  async fetchDirectPermissionsToUser({ commit }, userId) {
    const response = await this.$axios.$post( `roles/user/${userId}/direct/permissions/list`, null );
    commit('setDirectPermissionsToUser', response.data.user_direct_permissions);
  },

  // fetchRolesListAssignedToUser
  async fetchRolesListAssignedToUser({ commit }, userId) {
    const response = await this.$axios.$post( `roles/user/${userId}/roles/list`, null );
    commit('setRolesListAssignedToUser', response.data.user_roles);
  },

  // addEditUserRolesandPermissions
    async addEditUserRolesandPermissions({ commit }, { userId, data }) {
      const response = await this.$axios.$post( `roles/user/${userId}/save`, data );
      this.$swal('Good job!', userId == 0?'Added Successfully!':'Updated Successfully!', 'success');
      // this.$router.push('/salarygroups');
  },



};

export const mutations = {
  setPermissionsRelatedToRolesToUser: (state, permissionsRelatedToRolesToUser) => (state.permissionsRelatedToRolesToUser = permissionsRelatedToRolesToUser),
  setDirectPermissionsToUser: (state, directPermissionsToUser) => (state.directPermissionsToUser = directPermissionsToUser),
  setRolesListAssignedToUser: (state, rolesListAssignedToUser) => (state.rolesListAssignedToUser = rolesListAssignedToUser),
};

