export const state = () => ({
  employees: [],
  employee: {}
})

export const getters = {
  allEmployees: state => state.employees,
  employee: state => state.employee
};

export const actions = {
  // fetchEmployees
  async fetchEmployees({ commit }, data) {
    const response = await this.$axios.$post( `employees/list`, data );
    commit('setEmployees', response.data);
  },

    // fetchEmployee
    async fetchEmployee({ commit }, id) {
      const response = await this.$axios.$post( `employees/${id}/details`, null );
      commit('setEmployee', response.data.employee_details);
    },

  // exportEmployeesReportExcel
    async exportEmployeesReportExcel({ commit }) {
      const response = await this.$axios.$post( `employees/report/list/export`, null );
      window.location.replace(response.data.url);
    },

};

export const mutations = {
  setEmployees: (state, employees) => (state.employees = employees),
  setEmployee: (state, employee) => (state.employee = employee)
};

