import Vue from 'vue'

Vue.mixin({
  computed: {
    //userDetailsGlobal
    userDetailsGlobal(){
      if(process.browser){
        return JSON.parse(localStorage.getItem('userDetails'));
      }
    },
    //userPermissionsGlobal
    userPermissionsGlobal() {
      if(process.browser){
        return JSON.parse(localStorage.getItem('userPermissions'));
      }
    }
  }
})
