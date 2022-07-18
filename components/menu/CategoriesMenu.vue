<template>
  <div>
    <aside class="mb-2" v-for="menuCategory in allCategories" :key="menuCategory.id">
                <h5>{{menuCategory.category_name}}</h5>
                <ul class="list-unstyled">
    <li v-for="menuSubCategory in menuCategory.sub_categories" :key="menuSubCategory.id" v-if="menuSubCategory.sub_products.length > 0"><nuxt-link :to="localePath(`/menu/category/${menuSubCategory.id}`)">{{menuSubCategory.subcategory_name}}</nuxt-link></li>
</ul>
              </aside>
  </div>
</template>

<script>
export default {
   name: 'CategoriesMenu',
   props: ['allCategories']
}
</script>

<style lang="scss" scoped>
  ul{
    li{
      margin: 10px 0px;
      a{
        color: rgba(0,0,0,.56);
      }
    }
  }


  html:lang(ar){

   h5, li{
     text-align: right;
   }

  }

</style>

