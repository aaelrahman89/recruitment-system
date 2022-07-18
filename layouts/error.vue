<template>
  <div class="text-center main-section">
    <h1 v-if="error.statusCode === 404"> <NuxtLink to="/"><img src="~assets/images/logo-login.png"></NuxtLink></h1>
    <!-- <h1 v-if="error.statusCode === 404"> <NuxtLink to="/"><img src="~assets/images/logo-caffebene.png" loading="lazy" class="mb-3" title="caffebene" alt="caffebene"></NuxtLink> <br /> <b>404</b> | Page not found</h1> -->
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'noFooter',
    created(){
      if(this.error.statusCode === 404){
           this.$router.push('/');
          //  this.$i18n.localePath('/');
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-section{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1{
    font-size: 50px;
    text-transform: capitalize;
  }
}
</style>
