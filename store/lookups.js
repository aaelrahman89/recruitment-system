export const state = () => ({
  departmentsLookup: [],
  rolesLookup: [],
  positionsLookup: [],
  salaryGroupsLookup: [],
  managersLookup: [],
  usersLookup: [],
  jobsLookup: []
})

export const getters = {
  departmentsLookup: state => state.departmentsLookup,
  rolesLookup: state => state.rolesLookup,
  positionsLookup: state => state.positionsLookup,
  salaryGroupsLookup: state => state.salaryGroupsLookup,
  managersLookup: state => state.managersLookup,
  usersLookup: state => state.usersLookup,
  jobsLookup: state => state.jobsLookup
};

export const actions = {
  // fetchDepartmentsLookup
  async fetchDepartmentsLookup({ commit }) {
    const response = await this.$axios.$post( `departments/dropdown/list`, null );
    commit('setDepartmentsLookup', response.data.departments_list);
  },

    // fetchRolesLookup
    async fetchRolesLookup({ commit }) {
      const response = await this.$axios.$post( `roles/dropdown/list`, null );
      commit('setRolesLookup', response.data.roles_list);
    },

   // fetchPositionsLookup
    async fetchPositionsLookup({ commit }) {
      const response = await this.$axios.$post( `positions/dropdown/list`, null );
      commit('setPositionsLookup', response.data.positions_list);
    },

   // fetchSalaryGroupsLookup
    async fetchSalaryGroupsLookup({ commit }) {
      const response = await this.$axios.$post( `salary/groups/dropdown/list`, null );
      commit('setSalaryGroupsLookup', response.data.salary_groups_list);
    },

  // fetchManagersLookup
    async fetchManagersLookup({ commit }) {
      const response = await this.$axios.$post( `users/managers/list`, null );
      commit('setManagersLookup', response.data.managers_list);
    },

      // fetchUsersLookup
      async fetchUsersLookup({ commit }) {
        const response = await this.$axios.$post( `users/salary/groups/list`, null );
        commit('setUsersLookup', response.data.users_list);
      },

   // fetchJobsLookup
      async fetchJobsLookup({ commit }) {
        const response = await this.$axios.$post( `jobs/dropdown/list`, null );
        commit('setJobsLookup', response.data.jobs);
      },

};

export const mutations = {
  setDepartmentsLookup: (state, departmentsLookup) => (state.departmentsLookup = departmentsLookup),
  setRolesLookup: (state, rolesLookup) => (state.rolesLookup = rolesLookup),
  setPositionsLookup: (state, positionsLookup) => (state.positionsLookup = positionsLookup),
  setSalaryGroupsLookup: (state, salaryGroupsLookup) => (state.salaryGroupsLookup = salaryGroupsLookup),
  setManagersLookup: (state, managersLookup) => (state.managersLookup = managersLookup),
  setUsersLookup: (state, usersLookup) => (state.usersLookup = usersLookup),
  setJobsLookup: (state, jobsLookup) => (state.jobsLookup = jobsLookup)
};

