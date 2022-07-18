<template>
  <div>
     <div id="loading" class="text-center">
    <img src="~assets/images/preloader.gif" loading="lazy" title="caffebene" alt="caffebene" />
    </div>
  </div>
</template>

<script>
export default {
   name: 'Preloader'
}
</script>

<style lang="scss" scoped>
  #loading {
  width: 100%;
  height: 100%;
  position: fixed;
  display: block;
  background-color: #fff;
  z-index: 99999;
  text-align: center;
  opacity: 0.99;
  img{
position: absolute;
  width: 100px;
  height: 300px;
  position: absolute;
left: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
top: 25%;
  }
}
</style>
