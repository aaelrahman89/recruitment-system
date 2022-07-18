<template>
  <div class="utf_grid_job_widget_area">
    <span class="job-type full-type" v-if="label" :class="labelClass">{{label}}</span>
              <div class="utf_job_like utf_job_like_left" v-if="showDropDown">
                <b-dropdown>
    <template #button-content>
      <i class="fas fa-ellipsis-v"></i>
    </template>
    <nuxt-link :to="localePath(`${editRoute}`)" v-if="editPermissions">
    <span class="dropdown-item cursor-pointer">Edit</span>
    </nuxt-link>
    <slot></slot>
  </b-dropdown>
              </div>
              <div class="u-content">
                <div class="avatar box-80"> <i :class="icon"></i> </div>
                <div class="card-dynamic-content">
                  <h5 class="text-capitalize">{{mainTitle}}</h5>
                  <p class="text-muted">{{secondTitle}}</p>
                  <p class="text-muted">{{thirdTitle}}</p>
                </div>
              </div>
              <div class="d-flex justify-content-center">
              <div class="utf_apply_job_btn_item" v-if="viewRoute">
                <nuxt-link :to="localePath(`${viewRoute}`)" class="btn job-browse-btn btn-radius br-light" v-if="showPermissions">DETAILS</nuxt-link>
              </div>
              <div class="mt-2 ml-2 mr-2" v-if="showAddCandidate">
                <nuxt-link :to="localePath(`${addCandidateRoute}`)">
                 <span class="text-main"><small><i class="far fa-plus-square"></i> Add Candidate</small></span>
                </nuxt-link>
              </div>
               <div class="mt-2 ml-2 mr-2" v-if="showJobOffer">
                <nuxt-link :to="localePath(`${jobOfferRoute}`)">
                 <span class="text-main"><small><i class="far fa-file-alt"></i> Job Offer</small></span>
                </nuxt-link>
              </div>
              </div>

  </div>
</template>

<script>
export default {
  name: 'CardDynamic',
  props: {
    mainTitle: {
      type: String
    },
        secondTitle: {
      type: String
    },
        thirdTitle: {
      type: String
    },
        label: {
      type: String
    },
    labelClass: {
      value: [String, Array]
    },
        icon: {
      type: String,
      default: 'fab fa-buffer'
    },
    editRoute: {
      type: String
    },
    viewRoute: {
      type: String
    },
    showDropDown: {
      type: Boolean,
      default: true
    },
    showAddCandidate: {
      type: Boolean,
      default: false
    },
    addCandidateRoute: {
      type: String
    },
    showJobOffer: {
      type: Boolean,
      default: false
    },
    jobOfferRoute: {
      type: String
    }
  },
  computed: {
    editPermissions(){
     return (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('edit_departments')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('edit_users')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('edit_requests')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('edit_salary-groups'))
    },
    showPermissions(){
      return (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_departments')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_users')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_requests') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('salary_group_manager_approval_requests') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('revise_requests')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_recruitment_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_hr_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_finance_manager')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_admin_manager'))) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_salary-groups')) || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') || (this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates')))
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/card';
</style>
