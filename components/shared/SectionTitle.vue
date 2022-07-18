<template>
  <div class="text-center mt-3 mb-5">
     <h1 class="text-uppercase">{{title}}</h1>
     <div class="mx-auto"><img src="~assets/images/title-separator.png" loading="lazy" title="Recruitment System" alt="Recruitment System"></div>
     <p class="mt-3">{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeSectionTitle',
  props: ['title', 'desc']
}
</script>

<style lang="scss" scoped>
  h1{
        color: #262626;
        font-size: 35px;
  }
  p{
    font-size: 16px;
    color: #767676;
  }
</style>
