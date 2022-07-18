<template>
<div class="container">
  <div class="row mt-4">
    <div class="col-md-8 offset-md-2">
        <div class="heading">
          <h2 class="text-capitalize">{{title}}</h2>
            <div class="mx-auto"><img src="~assets/images/title-separator.png" loading="lazy" title="Recruitment System" alt="Recruitment System"></div>
		  <p>{{desc}}</p>
   </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeSectionTitle',
  props: ['title', 'desc']
}
</script>

<style scoped>
.utf_main_banner_area h2 {
    font-weight: 700;
}
.heading {
	padding: 0px 0 35px 0;
	text-align: center;
}
.heading h2 {
	font-weight: bold;
	margin-top: 0;
  color: #334e6f;
}
.heading p {
	line-height: 1.8;
	font-size: 15px;
  color: #707f8c;
}
.heading.light h2, .heading.light p {
	color: #ffffff;
}
</style>
