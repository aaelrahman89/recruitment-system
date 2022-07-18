<template>
  <div>
    <Preloader v-if="showLoading" />
    <ScrollToTop />
    <div class="layout-container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Preloader from '@/components/shared/Preloader.vue';
export default {
    head(context) {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale == "ar" ? "rtl" : "ltr",
      },
    };
  },
  data(){
    return {
      showLoading: true
    }
  },
  components: {
    Footer,
    ScrollToTop,
    Preloader
  },
    mounted(){
    this.showLoading = false;
    if(!!!localStorage.getItem('token')){
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
