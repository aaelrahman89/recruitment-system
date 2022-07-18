<template>
  <div>
    <ScrollToTop />
    <client-only>
      <HomeSlider />
      <div class="layout-container">
      <Nuxt />
    </div>
      </client-only>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollToTop from '@/components/shared/ScrollToTop';
import HomeSlider from '@/components/home/HomeSlider.vue';

export default {
    head(context) {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale == "ar" ? "rtl" : "ltr",
      },
    };
  },
  components: {
    SectionHeader,
    Footer,
    ScrollToTop,
    HomeSlider
  },
    mounted(){
    if(!!!localStorage.getItem('token')){
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
