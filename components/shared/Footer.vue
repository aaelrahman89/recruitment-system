<template>
  <footer class="text-white">
   <div class="container">
     <Copyright />
   </div>
  </footer>
</template>

<script>
import Copyright from '@/components/shared/Copyright';
export default {
  name: 'Footer',
  components: {
    Copyright
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
  footer{
    background-color: #091208;
    .links{
      a{
        color: #fff;
        &:hover{
          opacity: 0.7;
          transition: all 0.5s ease;
        }
      }
    }
    .app-img{
      height: 50px;
      margin-bottom: 10px;
    }
    .newsletter{
      font-size: 14px;
    }
    li{
      text-transform: uppercase;
    }
  }
</style>
