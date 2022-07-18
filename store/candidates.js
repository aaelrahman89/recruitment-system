export const state = () => ({
  candidates: [],
  candidate: {},
  jobOffer: {},
  candidateStatusList: []
})

export const getters = {
  candidates: state => state.candidates,
  candidate: state => state.candidate,
  jobOffer: state => state.jobOffer,
  candidateStatusList: state => state.candidateStatusList
};

export const actions = {
  // fetchCandidates
  async fetchCandidates({ commit }, data) {
    const response = await this.$axios.$post( `candidates/list`, data );
    commit('setCandidates', response.data);
  },

    // fetchPendingCandidates
    async fetchPendingCandidates({ commit }) {
      const response = await this.$axios.$post( `candidates/pending/list`, null );
      commit('setCandidates', response.data.candidates_list);
    },

    // fetchPendingFinalApprovalCandidates
    async fetchPendingFinalApprovalCandidates({ commit }) {
      const response = await this.$axios.$post( `candidates/pending/final/approval/list`, null );
      commit('setCandidates', response.data.candidates_list);
    },

    // fetchApprovedCandidates
    async fetchApprovedCandidates({ commit }) {
      const response = await this.$axios.$post( `candidates/approved/list`, null );
      commit('setCandidates', response.data.candidates_list);
    },

    // fetchCandidate
    async fetchCandidate({ commit }, id) {
      const response = await this.$axios.$post( `candidates/${id}/details`, null );
      commit('setCandidate', response.data.candidate_details);
    },

    // addEditCandidate
    async addEditCandidate({ commit }, { id, data }) {
      const response = await this.$axios.$post( `candidates/${id}/save`, data );
      this.$swal('Good job!', id == 0?'Added Successfully!':'Updated Successfully!', 'success');
      this.$router.push('/');
    },

    // exportCandidatesReportExcel
    async exportCandidatesReportExcel({ commit }) {
      const response = await this.$axios.$post( `candidates/report/list/export`, null );
      window.location.replace(response.data.url);
    },

    // getJobOffer - get candidate & job offer if exist
    async getJobOffer({ commit }, data) {
      const response = await this.$axios.$post( `job/offers/create`, data );
      commit('setJobOffer', response.data.candidate_job_offer.job_offer);
    },

    // exportJobOffer
    async exportJobOffer({ commit }, data) {
      const response = await this.$axios.$post( `job/offers/store`, data );
    },

     // fetchCandidateStatusList
  async fetchCandidateStatusList({ commit }, data) {
    const response = await this.$axios.$post( `candidates/status/list`, data );
    commit('setCandidateStatusList', response.data.status_list);
  },

     // sendJobofferByMail
     async sendJobofferByMail({ commit }, data) {
      const response = await this.$axios.$post( `job/offers/send/mail`, data );
      this.$swal('Good job!', 'Email Sent Successfully', 'success');
    },

    // changeActive
    // async changeActive({ commit }, id) {
    //   const response = await this.$axios.$post( `departments/${id}/change_status`, null );
    //   this.$swal('Good job!', 'Successfully Done!', 'success');
    // },

};

export const mutations = {
  setCandidates: (state, candidates) => (state.candidates = candidates),
  setCandidate: (state, candidate) => (state.candidate = candidate),
  setJobOffer: (state, jobOffer) => (state.jobOffer = jobOffer),
  setCandidateStatusList: (state, candidateStatusList) => (state.candidateStatusList = candidateStatusList)
};

