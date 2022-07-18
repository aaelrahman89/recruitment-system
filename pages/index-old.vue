<template>
  <div>
    <HomeSlider />
     <LazyBlock target="HomeRecruitmentRequests">
      <LazyHomeRecruitmentRequests />
    </LazyBlock>
  </div>
</template>

<script>
import HomeSlider from '@/components/home/HomeSlider';
import HomeRecruitmentRequests from '@/components/home/HomeRecruitmentRequests';
import LazyBlock from '@/components/shared/LazyBlock';

export default {
  name: 'home',
  layout: 'home',
  components: {
    HomeSlider,
    LazyBlock,
    HomeRecruitmentRequests
  },
  mounted(){
    this.showLoading = false;
    if(!!localStorage.getItem('token')){
      this.$router.push('/')
    }else{
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
