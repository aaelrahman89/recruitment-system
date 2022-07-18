export const state = () => ({
  permissions: [],
  permissionsByRoleId: [],
  department: {}
})

export const getters = {
  permissions: state => state.permissions,
  permissionsByRoleId: state => state.permissionsByRoleId,
  department: state => state.department
};

export const actions = {
  // fetchPermissions
  async fetchPermissions({ commit }) {
    const response = await this.$axios.$post( `permissions/grouped/list`, null );

    let grouped_permissions_list = [];
    let index = 0;

    for (var key in response.data.grouped_permissions_list) {
      grouped_permissions_list.push({
        name: key,
        permissions: [],
      });
      for (var key2 in response.data.grouped_permissions_list[key]) {
        grouped_permissions_list[index].permissions.push({
          id: key2,
          name: response.data.grouped_permissions_list[key][key2],
        });
      }
      index++;
    }

    commit('setPermissions', grouped_permissions_list);
  },

  // fetchPermissionsByRoleId
  async fetchPermissionsByRoleId({ commit }, id) {
    const response = await this.$axios.$post( `roles/${id}/get/permissions`, null );
    commit('setPermissionsByRoleId', response.data.permissions_list);
  },

    // addRole
    async addRole({ commit }, data) {
      const response = await this.$axios.$post( `roles/add`, data );
      this.$swal('Good job!', 'Added Successfully!', 'success');
    },

    // editRoleNamePermissions
    async editRoleNamePermissions({ commit }, { id, data }) {
      const response = await this.$axios.$post( `roles/${id}/save`, data );
      this.$swal('Good job!', 'Done Successfully!', 'success');
      // commit('setEditRoleNamePermissions', response.data.grouped_permissions_list);
    },

};

export const mutations = {
  setPermissions: (state, permissions) => (state.permissions = permissions),
  setPermissionsByRoleId: (state, permissionsByRoleId) => (state.permissionsByRoleId = permissionsByRoleId),
};

