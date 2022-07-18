
export const state = () => ({

})

export const getters = {
  token: state => state.token,
  // isLoggedIn: state => state.isLoggedIn
};

export const actions = {
  // Login
  async login({ commit }, data) {
    const response = await this.$axios.$post(
      'login',
      data
    );

    // store token in localstorage
    localStorage.setItem('token', response.data.token);

    // store userDetails in localstorage
    localStorage.setItem('userDetails', JSON.stringify(response.data.user_details));

    // store userPermissions in localstorage
    localStorage.setItem('userPermissions', JSON.stringify(response.data.user_permissions));

    commit('setLogin', response);
  },

  // Logout
  async logout({ commit }) {
    localStorage.clear();
    commit('setLogout');
  },

};

export const mutations = {
  // set login
  setLogin: (state, response) => {
    // state.token = localStorage.getItem('token');

    // if(!!localStorage.getItem('userDetails')){
    //   state.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    // };

    // if(!!localStorage.getItem('userPermissions')){
    //   state.userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
    // };

    // // if token exists make isLoggedIn = true
    // if(!!localStorage.getItem('token')){
    //     state.isLoggedIn = true;
    // }

  },

  // set logout
  setLogout: (state) => {
    // state.isLoggedIn = false;
  }

};

