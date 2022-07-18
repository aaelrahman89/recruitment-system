export const state = () => ({
  logs: []
})

export const getters = {
  logs: state => state.logs
};

export const actions = {

    // fetchLogs
    async fetchLogs({ commit }, data) {
      const response = await this.$axios.$post( `logs/list`, data );
      commit('setLogs', response.data);
    },

    // exportLogsReportExcel
    async exportLogsReportExcel({ commit }) {
      const response = await this.$axios.$post( `logs/report/list/export`, null );
      window.location.replace(response.data.url);
    },

};

export const mutations = {
  setLogs: (state, logs) => (state.logs = logs)
};

