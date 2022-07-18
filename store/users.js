export const state = () => ({
  users: [],
  user: {},
  userPermissions: {}
})

export const getters = {
  allUsers: state => state.users,
  user: state => state.user,
  userPermissions: state => state.userPermissions,
};

export const actions = {
  // fetchUsers
  async fetchUsers({ commit }, data) {
    const response = await this.$axios.$post( `users/list`, data );
    commit('setUsers', response.data);
  },

    // fetchUser
    async fetchUser({ commit }, id) {
      const response = await this.$axios.$post( `users/${id}/details`, null );
      commit('setUser', response.data.user_details);
    },

    // fetchUserPermissions
    async fetchUserPermissions({ commit }, id) {
      const response = await this.$axios.$post( `users/${id}/details`, null );
      commit('setUserPermissions', response.data.user_permissions);
    },

    // addEditUser
    async addEditUser({ commit }, { id, data }) {
      const response = await this.$axios.$post( `users/${id}/save`, data );
      this.$swal('Good job!', id == 0?'Added Successfully!':'Updated Successfully!', 'success');
      if(id == 0){
        this.$router.push('/users');
      }
    },

    // changeActive
    async changeActive({ commit }, id) {
      const response = await this.$axios.$post( `users/${id}/change_status`, null );
      this.$swal('Good job!', 'Successfully Done!', 'success');
    },

    // exportUsersReportExcel
    async exportUsersReportExcel({ commit }) {
      const response = await this.$axios.$post( `users/report/list/export`, null );
      window.location.replace(response.data.url);
    },

};

export const mutations = {
  setUsers: (state, users) => (state.users = users),
  setUser: (state, user) => (state.user = user),
  setUserPermissions: (state, userPermissions) => (state.userPermissions = userPermissions),
};

