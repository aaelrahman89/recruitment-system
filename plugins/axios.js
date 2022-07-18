
export default ({ $axios, env, i18n, app }) => {

  // put in headers (Lang, Authorization)
  $axios.onRequest(config => {
    config.headers.common['Lang'] = i18n.locale;
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  });

  // Error Handling
  $axios.interceptors.response.use(undefined, function (error) {
    if(error.response.status === 400) {
      // app.$swal('Error!', "Validation Error", 'error');
      app.$swal('Error!', error.response.data.errors.error?error.response.data.errors.error:'Validation Error', 'error');
      return Promise.reject(error);
    }
    if(error.response.status === 401) {
      app.$swal('Error!', "You don't have enough permissions", 'error');
      window.$nuxt.$router.push('/');
      return Promise.reject(error);
    }
    if(error.response.status === 403) {
      // app.$swal('Error!', "Session Expired or don't have enough permissions, Please login again", 'error');
      localStorage.clear();
      window.$nuxt.$router.push('/login');
      return Promise.reject(error);
    }
    if(error.response.status === 500) {
      app.$swal('Error!', "Server Error", 'error');
      return Promise.reject(error);
    }
    // if(error.response.status === 404) {
    //   app.$swal('Error!', "Not Found", 'error');
    //   return Promise.reject(error);
    // }
  });


}



