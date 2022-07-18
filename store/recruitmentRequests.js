export const state = () => ({
  myRequests: [],
  allRequests: [],
  myRequest: {},
  approvalUsers: []
})

export const getters = {
  myRequests: state => state.myRequests,
  allRequests: state => state.allRequests,
  myRequest: state => state.myRequest,
  approvalUsers: state => state.approvalUsers
};

export const actions = {

  // fetchAllRequests
  async fetchAllRequests({ commit }, data) {
    const response = await this.$axios.$post( `job/requests/list`, data );
    commit('setAllRequests', response.data);
  },

  // fetchMyRequests
  async fetchMyRequests({ commit }) {
    const response = await this.$axios.$post( `job/requests/my/requests`, null );
    commit('setMyRequests', response.data.my_job_requests);
  },

    // fetchMyRequest
    async fetchMyRequest({ commit }, id) {
      const response = await this.$axios.$post( `job/requests/${id}/details`, null );
      commit('setMyRequest', response?.data?.job_request_details);
    },

  // fetchPendingRequests
  async fetchPendingRequests({ commit }, param) {
    const response = await this.$axios.$post( `job/requests/${param}_requests`, null );
    commit('setMyRequests', response.data.pending_requests);
  },

  // approvePendingRequest
  async approvePendingRequest({ commit }, {param, data}) {
    const response = await this.$axios.$post( `job/requests/${param}/approval`, data );
    this.$swal('Good job!', 'Updated Successfully!', 'success');
    this.$router.push('/');
    // commit('setMyRequests', response.data.my_job_requests);
  },

  // pendingRequestApprovalUsers
  async pendingRequestApprovalUsers({ commit }, data) {
    const response = await this.$axios.$post( `job/requests/pending_requests/approval/users`, data );
    commit('setPendingRequestApprovalUsers', Object.values(response.data));
  },

    // fetchApprovedRequests
    async fetchApprovedRequests({ commit }) {
      const response = await this.$axios.$post( `job/requests/approved_requests`, null );
      commit('setMyRequests', response.data.all_approved_requests);
    },

  // fetchRequestsBySalaryGroup
  async fetchRequestsBySalaryGroup({ commit }, salaryGroupId) {
    const response = await this.$axios.$post( `salary/groups/${salaryGroupId}/requests/list`, null );
    commit('setMyRequests', response.data.jobRequestsList);
  },

    // addEditRequest
    async addEditRequest({ commit }, { id, data }) {
      const response = await this.$axios.$post( `job/requests/${id}/save`, data );
      this.$swal('Good job!', id == 0?'Added Successfully!':'Updated Successfully!', 'success');
      this.$router.push(`/recruitment-requests/${response.data.job_request_details.id}`);
    },

    // changeActive
    async changeActive({ commit }, id) {
      const response = await this.$axios.$post( `job/requests/${id}/change_status`, null );
      this.$swal('Good job!', 'Successfully Done!', 'success');
    },


    // downloadRequestAttach
    async downloadRequestAttach({ commit }, data) {

      const headers = {
        responseType: 'blob'
      }

      const response = await this.$axios.$post( `job/requests/attach/download`, data, { headers: headers } );
      const blob = new Blob([response]);
      const objectUrl = URL.createObjectURL(blob);
      window.open(objectUrl);
    },

      // reviseRequest
        async reviseRequest({ commit }, data) {
          const response = await this.$axios.$post( `job/requests/revise_requests/approval`, data );
          this.$swal('Good job!', 'Done Successfully!', 'success');
          this.$router.push('/');
        },

    // exportRequestsReportExcel
    async exportRequestsReportExcel({ commit }) {
      const response = await this.$axios.$post( `job/requests/report/list/export`, null );
      window.location.replace(response.data.url);
    },

};

export const mutations = {
  setAllRequests: (state, allRequests) => (state.allRequests = allRequests),
  setMyRequests: (state, myRequests) => (state.myRequests = myRequests),
  setMyRequest: (state, myRequest) => (state.myRequest = myRequest),
  setPendingRequestApprovalUsers: (state, approvalUsers) => (state.approvalUsers = approvalUsers)
};

