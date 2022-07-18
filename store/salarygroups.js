export const state = () => ({
  salaryGroups: [],
  salaryGroup: {},
  jobs: [],
  positions: [],
  mySalaryGroups: []
})

export const getters = {
  salaryGroups: state => state.salaryGroups,
  salaryGroup: state => state.salaryGroup,
  jobs: state => state.jobs,
  positions: state => state.positions,
  mySalaryGroups: state => state.mySalaryGroups
};

export const actions = {
  // fetchSalaryGroups
  async fetchSalaryGroups({ commit }, data) {
    const response = await this.$axios.$post( `salary/groups/list`, data );
    commit('setSalaryGroups', response.data);
  },

    // fetchSalaryGroup
    async fetchSalaryGroup({ commit }, id) {
      const response = await this.$axios.$post( `salary/groups/${id}/details`, null );
      commit('setSalaryGroup', response.data);
    },

    // addEditSalaryGroup
    async addEditSalaryGroup({ commit }, { id, data }) {
      const response = await this.$axios.$post( `salary/groups/${id}/save`, data );
      this.$swal('Good job!', id == 0?'Added Successfully!':'Updated Successfully!', 'success');
      this.$router.push('/salarygroups');
    },

   // assignJobsToSalaryGroup
    async assignJobsToSalaryGroup({ commit }, { salaryGroupId, data }) {
      const response = await this.$axios.$post( `salary/groups/${salaryGroupId}/assign/job`, data );
      this.$swal('Good job!', 'Done Successfully!', 'success');
    },

    // assignUsersToSalaryGroup
    async assignUsersToSalaryGroup({ commit }, { salaryGroupId, data }) {
      const response = await this.$axios.$post( `salary/groups/${salaryGroupId}/assign/user`, data );
      this.$swal('Good job!', 'Done Successfully!', 'success');
    },

    // changeActive
    async changeActive({ commit }, id) {
      const response = await this.$axios.$post( `salary/groups/${id}/change_status`, null );
      this.$swal('Good job!', 'Successfully Done!', 'success');
    },

 // fetchJobsBySalaryGroup
  async fetchJobsBySalaryGroup({ commit }, data) {
    const response = await this.$axios.$post( `salary/groups/jobs`, data );
    commit('setJobs', response.data.jobs_list);
  },

  // fetchPositionsByJob
  async fetchPositionsByJob({ commit }, data) {
    const response = await this.$axios.$post( `jobs/get/positions`, data );
    commit('setPositions', response.data.positions_list);
  },

    // fetchMySalaryGroups
    async fetchMySalaryGroups({ commit }) {
      const response = await this.$axios.$post( `users/salary_group/list`, null );
      commit('setMySalaryGroups', response.data.user_salary_group_list);
    },

  // removeJobFromSalarygroup
  async removeJobFromSalarygroup({ commit }, data) {
    const response = await this.$axios.$post( `salary/groups/remove/job`, data );
  },

  // removeUserFromSalarygroup
  async removeUserFromSalarygroup({ commit }, data) {
    const response = await this.$axios.$post( `salary/groups/remove/user`, data );
  },

   // exportSalarygroupsReportExcel
    async exportSalarygroupsReportExcel({ commit }) {
      const response = await this.$axios.$post( `salary/groups/report/list/export`, null );
      window.location.replace(response.data.url);
    },


};

export const mutations = {
  setSalaryGroups: (state, salaryGroups) => (state.salaryGroups = salaryGroups),
  setSalaryGroup: (state, salaryGroup) => (state.salaryGroup = salaryGroup),
  setJobs: (state, jobs) => (state.jobs = jobs),
  setPositions: (state, positions) => (state.positions = positions),
  setMySalaryGroups: (state, mySalaryGroups) => (state.mySalaryGroups = mySalaryGroups)
};

