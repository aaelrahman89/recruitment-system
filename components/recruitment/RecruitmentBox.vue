<template>
  <div class="utf_grid_job_widget_area"> <span class="job-type full-type">MIS</span>
              <!-- <div class="utf_job_like">
                <label class="toggler toggler-danger">
                  <input type="checkbox">
                  <i class="fa fa-heart"></i>
				</label>
              </div> -->
              <div class="u-content">
                <div class="avatar box-80"> <img class="img-fluid" src="https://picsum.photos/id/1/800" alt=""> </div>
                <h5>Frontend Developer</h5>
                <p class="text-muted">EXP: 5+</p>
              </div>
              <div class="utf_apply_job_btn_item">
                <nuxt-link :to="localePath('/recruitment-requests/1')" class="btn job-browse-btn btn-radius br-light">DETAILS</nuxt-link>
              </div>
  </div>
</template>

<script>
export default {
  name: 'RecruitmentBox',
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/card';
</style>
