export const state = () => ({
  allNotifications: [],
  notifications: []
})

export const getters = {
  allNotifications: state => state.allNotifications,
  notifications: state => state.notifications
};

export const actions = {

    // fetchAllNotifications
    async fetchAllNotifications({ commit }, data) {
      const response = await this.$axios.$post( `notifications/list`, data );
      commit('setAllNotifications', response.data);
    },

  // fetchNotifications
  async fetchNotifications({ commit }, userId) {
    const response = await this.$axios.$post( `users/${userId}/notifications/list`, null );
    commit('setNotifications', response.data.result);
  },

  // sendJobRequestReminder
  async sendJobRequestReminder({ commit }, jobRequestId) {
    const response = await this.$axios.$post( `job/requests/${jobRequestId}/reminder/send`, null );
    this.$swal('Good job!', 'Job Request Reminder sent Successfully', 'success');
  },

  // notificationsRead
  async notificationsRead({ commit }, notificationId) {
    const response = await this.$axios.$post( `notifications/${notificationId}/read`, null );
    commit('setNotifications', response.data.result);
  },




};

export const mutations = {
  setAllNotifications: (state, allNotifications) => (state.allNotifications = allNotifications),
  setNotifications: (state, notifications) => (state.notifications = notifications),
};

