<template>
 <div class="row copyright pt-5 pb-5">
     <div class="col-md-12 text-center" v-if="$i18n.locale == 'en'">©{{currentDate}}  <span class="text-main">Recruitment System.</span> All Rights Reserved.</div>
     <div class="col-md-12 text-center" v-if="$i18n.locale == 'ar'">©{{currentDate}} <span class="text-main">نظام التوظيف.</span> جميع الحقوق محفوظة</div>
   </div>
</template>

<script>
export default {
  name: 'Copyright',
  computed: {
    currentDate(){
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
  .social{
      li{
        margin: 0px 10px;
        a{
          color: #fff;
          &:hover{
          color: $mainColor;
          transition: all 0.5s ease;
        }
        }
      }
    }
    .copyright{
      font-size: 14px;
    }
        .line{
      height: 1px;
      margin-top: 10px;
      background-color: #363636;
    }
</style>
