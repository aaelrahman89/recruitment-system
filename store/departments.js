export const state = () => ({
  departments: [],
  department: {}
})

export const getters = {
  allDepartments: state => state.departments,
  department: state => state.department
};

export const actions = {
  // fetchDepartments
  async fetchDepartments({ commit }, data) {
    const response = await this.$axios.$post( `departments/list`, data );
    commit('setDepartments', response.data);
  },

    // fetchDepartment
    async fetchDepartment({ commit }, id) {
      const response = await this.$axios.$post( `departments/${id}/details`, null );
      commit('setDepartment', response.data.department_details);
    },

    // addEditDepartment
    async addEditDepartment({ commit }, { id, data }) {
      const response = await this.$axios.$post( `departments/${id}/save`, data );
      this.$swal('Good job!', id == 0?'Added Successfully!':'Updated Successfully!', 'success');
      this.$router.push('/departments');
    },

    // changeActive
    async changeActive({ commit }, id) {
      const response = await this.$axios.$post( `departments/${id}/change_status`, null );
      this.$swal('Good job!', 'Successfully Done!', 'success');
    },

    // exportDepartmentsReportExcel
    async exportDepartmentsReportExcel({ commit }) {
      const response = await this.$axios.$post( `departments/report/list/export`, null );
      window.location.replace(response.data.url);
    },

};

export const mutations = {
  setDepartments: (state, departments) => (state.departments = departments),
  setDepartment: (state, department) => (state.department = department)
};

