<template>
<div class="main-section">
  <div class="nav-bar"><NavBar /></div>
  <div class="overlay"></div>
  <img src="~assets/images/slide.jpg" loading="lazy" class="w-100" title="Recruitment System" alt="Recruitment System" />
</div>
</template>

<script>
import NavBar from '@/components/shared/NavBar';
export default {
  name: 'SectionHeader',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
$small: 768px;
.main-section{
  position: relative;
  .nav-bar{
    position: absolute;
    z-index: 10;
    width: 100%;
  }
  img{
    height: 150px;
  }
  .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
}


</style>
