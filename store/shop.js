export const state = () => ({
  products: [],
  homeProducts: [],
  product: [],
})

export const getters = {
  allProducts: state => state.products,
  allHomeProducts: state => state.homeProducts,
  product: state => state.product,
};

export const actions = {
  // fetchProducts
  async fetchProducts({ commit }, page) {
    const response = await this.$axios.$post( `shop/menu?page=${page}&length=12`, null );
    commit('setProducts', response.data);
  },

    // fetchHomeProducts
    async fetchHomeProducts({ commit }) {
      const response = await this.$axios.$post( `menu/random/shop/products`, null );
      commit('setHomeProducts', response.data.random_shop_products);
    },

    // fetch Product
    async fetchProduct({ commit }, id) {
      const response = await this.$axios.$post( `shop/products/${id}/details`, null );
      commit('setProduct', response.data.product_details);
    },

};

export const mutations = {
  setProducts: (state, products) => (state.products = products),
  setHomeProducts: (state, homeProducts) => (state.homeProducts = homeProducts),
  setProduct: (state, product) => (state.product = product),
};

