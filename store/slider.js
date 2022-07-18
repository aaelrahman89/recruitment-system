export const state = () => ({
  sliders: [],
})

export const getters = {
  allSliders: state => state.sliders,
};

export const actions = {
  // fetchSliders
  async fetchSliders({ commit }) {
    const response = await this.$axios.$post( 'sliders/list' );
    commit('setSliders', response.data.sliders);
  },
};

export const mutations = {
  setSliders: (state, sliders) => (state.sliders = sliders)
};

