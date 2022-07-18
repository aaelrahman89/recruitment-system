<template>
<div class="main-section mb-5">
  <HomeSectionTitle :title="'Recruitment Requests'" />
   <div class="container">
     <div class="row">
       <div class="col-md-3" v-for="(box, index) in 12" :key="index">

         <CardDynamic
         :mainTitle="'lorem ipsum'"
         :label="'label'"
         :icon="'fab fa-buffer'"
         :editRoute="`/departments/addEdit-department/${index}`">
        </CardDynamic>

         <!-- <RecruitmentBox /> -->
       </div>
   </div>

   <div class="row">
     <div class="col-md-12 text-center">
      <nuxt-link :to="localePath('/recruitment-requests')"><button class="btn main-btn">SEE ALL REQUESTS</button></nuxt-link>
     </div>
   </div>

   </div>
</div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
import RecruitmentBox from '@/components/recruitment/RecruitmentBox.vue';
import CardDynamic from '@/components/shared/CardDynamic.vue';
export default {
  name: 'HomeFashionQuotes',
  components: {
    HomeSectionTitle,
    CardDynamic,
    RecruitmentBox
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
   img{
     height: 260px;
     border: 1px solid #e1e1e1;
   }
   .content{
      height: 260px;
      border: 1px solid $mainColor;
      h5{
        color: #000;
        font-weight: 500;
        font-size: 18px;
      }
      p{
        color: #666666;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
      }
   }
</style>
