<template>
<div class="main-section">
  <!-- <Preloader v-if="showLoading" /> -->
  <div class="nav-bar"><NavBar /></div>
  <div class="overlay"></div>
  <div class="logo d-none d-sm-block"><nuxt-link :to="localePath('/')" class="navbar-brand" exact><img src="~assets/images/logo.png"></nuxt-link></div>
    <img src="~assets/images/slide.jpg" class="w-100">
</div>
</template>

<script>
import NavBar from '@/components/shared/NavBar';
import { mapGetters, mapActions } from "vuex";
import Preloader from '@/components/shared/Preloader.vue';
export default {
  name: 'HomeSlider',
  data(){
    return{
      showLoading: true
    }
  },
  components: {
    NavBar,
    Preloader
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
$small: 768px;

   .logo{
     position: absolute;
     left: 40%;
     z-index: 9999;
     top: 40%;
     img{
     height: 50px;
     }
   }

   img {
        height:40vh;
        @media screen and (max-width: $small){
      height: auto;
    }
    }

    .overlay{
          background-color: #19365F;
          opacity: 0.5;
  position: absolute; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
    }

.main-section{
  position: relative;
  .nav-bar{
    position: absolute;
    z-index: 10;
    width: 100%;
  }
}

</style>
