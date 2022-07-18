<template>
  <div>
    <HomeSectionTitle :title="'Recruitment Request'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4" v-if="myRequest">
  <div class="card-header d-flex justify-content-between">
    <span><i class="fab fa-buffer"></i> {{myRequest.job_title}}</span>
    <span v-if="sendReminderPermissions"><button class="btn btn-default btn-sm text-white border send-reminder-btn" :disabled="showSpinner" @click="onClickSendReminder">
      <i class="far fa-bell" title="Send Reminder"></i>
    <span v-if="!showSpinner">Send Reminder</span>
    <span v-if="showSpinner">
      <div class="spinner-grow spinner-grow-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
    </span>
    </button></span>
    <span class="d-none d-sm-block"><small>Requested By <span class="badge badge-success">{{myRequest.requested_user}}</span></small></span>
    <span class="d-none d-sm-block" v-if="myRequest && myRequest.created_at"><small class="request-date">{{myRequest.created_at.substring(0,10)}}</small></span>
    <!-- <span><nuxt-link :to="localePath(`/recruitment-requests/addEdit-request/${myRequest.id}`)" class="text-white"><i class="far fa-edit"></i></nuxt-link></span> -->
  </div>

   <div class="card-body">
     <div class="row">

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job Title</label>
           <p><span class="badge badge-success large-badge">{{myRequest.job_title}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Department</label>
           <p v-if="userPermissionsGlobal && !this.userPermissionsGlobal.includes('show_departments')"><span class="badge badge-success large-badge">{{myRequest.department_name}}</span></p>
           <p v-if="userPermissionsGlobal && this.userPermissionsGlobal.includes('show_departments')"><nuxt-link :to="localePath(`/departments/${myRequest.department_id}`)" class="text-white"><span class="badge badge-success large-badge">{{myRequest.department_name}}</span></nuxt-link></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Salary Group</label>
           <p v-if="userPermissionsGlobal && !this.userPermissionsGlobal.includes('show_salary-groups')"><span class="badge badge-success large-badge">{{myRequest.salary_group_name}}</span></p>
           <p v-if="userPermissionsGlobal && this.userPermissionsGlobal.includes('show_salary-groups')"><nuxt-link :to="localePath(`/salarygroups/${myRequest.salary_group_id}`)" class="text-white"><span class="badge badge-success large-badge">{{myRequest.salary_group_name}}</span></nuxt-link></p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job</label>
           <p><span class="badge badge-success large-badge">{{myRequest.job_name}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Position</label>
           <p><span class="badge badge-success large-badge">{{myRequest.position_name}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Salary Range</label>
           <p><span class="badge badge-success large-badge">{{myRequest.salary_range}} {{myRequest.currency}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Age Range</label>
           <p><span class="badge badge-success large-badge">{{myRequest.age_range}}</span></p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Location</label>
           <p v-if="myRequest.location_id == 1"><span class="badge badge-success large-badge">Egypt</span></p>
           <p v-if="myRequest.location_id == 2"><span class="badge badge-success large-badge">Saudi Arabia</span></p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">City</label>
           <p><span class="badge badge-success large-badge">{{myRequest.city}}</span></p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job Type</label>
           <p>
             <span class="badge badge-success large-badge" v-if="myRequest.job_type == 1">Full Time</span>
             <span class="badge badge-success large-badge" v-if="myRequest.job_type == 2">Part Time</span>
             <span class="badge badge-success large-badge" v-if="myRequest.job_type == 3">Per Project</span>
           </p>
         </div>
       </div>

       <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Job Work Place</label>
           <p>
             <span class="badge badge-success large-badge" v-if="myRequest.job_workplace == 1">In Office</span>
             <span class="badge badge-success large-badge" v-if="myRequest.job_workplace == 2">Remotely</span>
             <span class="badge badge-success large-badge" v-if="myRequest.job_workplace == 3">Work from Home</span>
             </p>
         </div>
       </div>

          <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Years Of Experience</label>
           <p><span class="badge badge-success large-badge">{{myRequest.experience_years}}</span></p>
         </div>
       </div>

          <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Required By Date</label>
           <p><span class="badge badge-success large-badge">{{myRequest.required_by_date}}</span></p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Qty. Required No</label>
           <p><span class="badge badge-success large-badge">{{myRequest.number_required}}</span></p>
         </div>
       </div>

        <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">Employment Type</label>
           <p>
            <span class="badge badge-success large-badge" v-if="myRequest.employment_type == 1">New</span>
            <span class="badge badge-success large-badge" v-if="myRequest.employment_type == 2">Replacement</span>
            <span class="badge badge-success large-badge" v-if="myRequest.employment_type == 3">Job vacancy</span>
           </p>
         </div>
       </div>

           <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">No. of workers at this salary group</label>
           <p><span class="badge badge-success large-badge">{{myRequest.salary_group_workers}}</span></p>
         </div>
       </div>

           <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">No. of workers of this job at this salary group</label>
           <p><span class="badge badge-success large-badge">{{myRequest.salary_group_job_workers}}</span></p>
         </div>
       </div>

      <div class="col-md-4">
         <div class="form-group">
           <label class="large-label">No. of all workers of this job</label>
           <p><span class="badge badge-success large-badge">{{myRequest.job_workers}}</span></p>
         </div>
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label">Job Description</label>
           <p><span class="badge badge-success large-badge text-left w-50">{{myRequest.job_description}}</span></p>
         </div>
       </div>

      <div class="col-md-12">
         <div class="form-group">
           <label class="large-label">Responsibilities</label>
           <p><span class="badge badge-success large-badge text-left w-50">{{myRequest.responsibilities}}</span></p>
         </div>
       </div>

       <div class="col-md-12" v-if="previewFilePermissions">
         <div class="form-group">
           <label class="large-label">File</label>
           <p class="cursor-pointer"><a :href="myRequest.attach" target="_blank"><span class="badge badge-primary large-badge"><i class="far fa-file-alt"></i> Download</span></a></p>
         </div>
       </div>


       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label">Requirements</label>
           <p><span class="badge badge-success large-badge text-left w-50">{{myRequest.requirements}}</span></p>
         </div>
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <label class="large-label">Other Notes</label>
           <p><span class="badge badge-success large-badge text-left w-50">{{myRequest.notes}}</span></p>
         </div>
       </div>

       <div class="col-md-12" v-if="myRequest.status && myRequest.status.message">
         <hr />
         <div class="form-group">
           <label class="large-label">Request Status</label>
           <p><span class="badge large-badge text-white" :class="[myRequest.status.message && myRequest.status.message == 'Approved' ? 'badge-success' : null, myRequest.status.message && myRequest.status.message == 'Rejected' ? 'badge-danger' : null, myRequest.status.message && myRequest.status.message.includes('Pending') ? 'badge-warning' : null]">
             <span v-if="!requestStatusRedirectPermissions">{{myRequest.status.message}}</span>
             <span v-if="requestStatusRedirectPermissions"> <nuxt-link :to="localePath(`/salarygroups/${myRequest.salary_group_id}`)" class="text-white"> {{myRequest.status.message}} </nuxt-link></span>
            </span></p>
         </div>
       </div>

       <!-- <div class="col-md-6" v-if="myRequest.status && myRequest.status.comment && myRequest.status.message">
         <hr />
         <div class="form-group">
           <label class="large-label">Approval Decision Notes</label>
           <p><span class="badge large-badge text-white" :class="[myRequest.status.message && myRequest.status.message == 'Approved' ? 'badge-success' : null, myRequest.status.message && myRequest.status.message == 'Rejected' ? 'badge-danger' : null, myRequest.status.message && myRequest.status.message.includes('Pending') ? 'badge-warning' : null]">{{myRequest.status.comment}}</span></p>
         </div>
       </div> -->

     </div>
   </div>

</div>
<!-- card end -->


<!-- approval history -->
 <div class="card mb-4" v-if="approvalUsers && approvalUsers.length > 0">

   <div class="card-body">

     <div class="row">

       <div class="col-md-12 cursor-pointer" @click="showApprovalHistory = !showApprovalHistory">
         <div class="d-flex justify-content-between">
           <h6>Approval History</h6>
         <span><i class="fas" :class="showApprovalHistory?'fa-chevron-up':'fa-chevron-down'"></i></span>
         </div>

       </div>

          <div class="col-md-12" v-if="showApprovalHistory">
            <hr />
         <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(approvalUser, index) of approvalUsers" :key="index">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{index+1}}. {{approvalUser.user.name}}</div>
       <small v-if="approvalUser && approvalUser.approval_date"><b>Date:</b> {{approvalUser.approval_date.substring(0, 10)}}</small>
       <hr v-if="approvalUser.comment && approvalUser.comment.length > 0" />
       <small v-if="approvalUser.comment && approvalUser.comment.length > 0"><b><i class="fas fa-newspaper"></i> Approval Decision Notes:</b> {{approvalUser.comment}}</small>
    </div>
    <span class="badge rounded-pill text-white" :class="approvalUser.approval == 'Approved'?'bg-success':'bg-danger'">{{approvalUser.approval}}</span>
  </li>
</ol>


   <!-- hr revise request preview section -->
   <div v-if="myRequest && myRequest.job_request_evaluation && myRequest.job_request_evaluation != null">
     <hr />
     <h6>Hr Revision</h6>
     <hr />

    <div class="row">

      <div class="col-md-4">
        <div class="form-group">
          <label>Within Manpower Plan</label>
          <p>
             <span class="badge large-badge" v-if="myRequest.job_request_evaluation.manpower_plan && myRequest.job_request_evaluation.manpower_plan == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="myRequest.job_request_evaluation.manpower_plan && myRequest.job_request_evaluation.manpower_plan == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label>Within Budget</label>
          <p>
             <span class="badge large-badge" v-if="myRequest.job_request_evaluation.budget_plan && myRequest.job_request_evaluation.budget_plan == 1"><i class="fas fa-check-circle fa-2x text-success"></i></span>
             <span class="badge large-badge" v-if="myRequest.job_request_evaluation.budget_plan && myRequest.job_request_evaluation.budget_plan == 0"><i class="fas fa-times-circle fa-2x text-danger"></i></span>
           </p>
        </div>
      </div>

     <div class="col-md-12" v-if="myRequest.job_request_evaluation.additional_approve_text && myRequest.job_request_evaluation.additional_approve_text != null">
        <div class="form-group">
          <label>Additional Approval Notes</label>
          <p>{{myRequest.job_request_evaluation.additional_approve_text}}</p>
        </div>
      </div>

       <div class="col-md-12" v-if="myRequest.job_request_evaluation.reject_reason_text && myRequest.job_request_evaluation.reject_reason_text != null">
        <div class="form-group">
          <label>Reject Reason Notes</label>
          <p>{{myRequest.job_request_evaluation.reject_reason_text}}</p>
        </div>
      </div>

     <div class="col-md-12" v-if="myRequest.job_request_evaluation.notes && myRequest.job_request_evaluation.notes != null">
        <div class="form-group">
          <label>Other Notes</label>
          <p>{{myRequest.job_request_evaluation.notes}}</p>
        </div>
      </div>

    </div>

   </div>

      </div>

     </div>


   </div>

</div>

<!-- Approval Decision -->
<div v-if="approvalDecisionPermissions">
 <div class="card mb-4">

   <div class="card-body">

     <div class="row">

       <div class="col-md-12">
         <h6>Approval Decision</h6>
         <hr />
       </div>

       <div class="col-md-12">
         <div class="form-group">
           <textarea class="form-control text-area" placeholder="Type your rejection reason or notes about approvment ..." rows="5" v-model="approvalObject.comment"></textarea>
         </div>
       </div>

         <div class="col-md-12 text-center">
       <div>
           <div class="col-md-12 text-center mt-4 mb-4">
         <button type="button" class="btn main-btn bg-danger" @click="onClickRejectRequest" :disabled="approvalObject.comment && approvalObject.comment.length == 0"><i class="far fa-times-circle"></i> REJECT</button>
         <button type="button" class="btn main-btn" @click="onClickApproveRequest" :disabled="approvalObject.comment && approvalObject.comment.length == 0"><i class="far fa-check-circle"></i> APPROVE</button>
       </div>
       </div>
         </div>

     </div>


   </div>

</div>

</div>


     <!-- if HR user start - if permission revise_request -->
           <!-- card start -->
        <div class="card mb-4" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('revise_requests') && myRequest && myRequest.job_request_evaluation == null && myRequest.status && myRequest.status.status_id == 1">
  <div class="card-header text-center">
     Special For HR department
  </div>

   <div class="card-body">

     <form @submit.prevent="onSubmitHrRevision">
 <div class="row">

         <div class="col-md-12">
       <div class="form-group">

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Within Manpower Plan" v-model="hrRevisionObject.manpower_plan">
          <label class="form-check-label" for="inlineCheckbox1">Within Manpower Plan</label>
          <!-- {{hrRevisionObject.within_manpower_plan}} -->
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Within Budget" v-model="hrRevisionObject.budget_plan">
          <label class="form-check-label" for="inlineCheckbox2">Within Budget</label>
        </div>

       </div>

       </div>

            <div class="col-md-12">
       <div class="form-group">
         <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="We need additional approval for the following reasons" v-model="hrRevisionObject.additional_approve">
          <label class="form-check-label" for="inlineCheckbox5">We need additional approval for the following reasons</label>
        </div>
         <textarea class="form-control text-area" placeholder="We need additional approval for the following reasons" rows="7" v-model="hrRevisionObject.additional_approve_text" :disabled="hrRevisionObject.additional_approve == false"></textarea>
       </div>
     </div>

      <div class="col-md-12">
       <div class="form-group">
         <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="The request rejected for the following reasons" v-model="hrRevisionObject.reject_reason">
          <label class="form-check-label" for="inlineCheckbox6">The request rejected for the following reasons</label>
        </div>
         <textarea class="form-control text-area" placeholder="The request rejected for the following reasons" rows="7" v-model="hrRevisionObject.reject_reason_text" :disabled="hrRevisionObject.reject_reason == false"></textarea>
       </div>
     </div>

       <div class="col-md-12">
       <div class="form-group">
         <label>Other Notes</label>
         <textarea class="form-control text-area" placeholder="Other Notes" rows="7" v-model="hrRevisionObject.notes"></textarea>
       </div>
       </div>

        <div class="col-md-12 text-center mt-3">
         <button type="submit" class="btn main-btn">SUBMIT</button>
       </div>

     </div>
     </form>



   </div>

</div>
<!-- card end -->
     <!-- if HR user end -->



       <!-- Approve & Reject [old] -->
       <!-- <div v-if="userDetailsGlobal && myRequest">
           <div class="col-md-12 text-center mt-4 mb-4" v-if="userDetailsGlobal.id != myRequest.requested_by">
         <button type="button" class="btn main-btn bg-danger" @click="onClickRejectRequest"><i class="far fa-times-circle"></i> REJECT</button>
         <button type="button" class="btn main-btn" @click="onClickApproveRequest"><i class="far fa-check-circle"></i> APPROVE</button>
       </div>
       </div> -->



      </div>


    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return{
      showSpinner: false,
      showApprovalHistory: false,
       approvalObject: {
         job_request_id: 0,
         approval: 1,
         comment: ''
         },
         hrRevisionObject: {
          job_request_id: Number(this.$route.params.id),
          manpower_plan: false,
          budget_plan: false,
          additional_approve: false,
          reject_reason: false,
          additional_approve_text: null,
          reject_reason_text: null,
          notes: null
         }
    }
  },
  components: {
    HomeSectionTitle
  },
     methods: {
  ...mapActions({
    fetchMyRequest: 'recruitmentRequests/fetchMyRequest',
    approvePendingRequest: 'recruitmentRequests/approvePendingRequest',
    pendingRequestApprovalUsers: 'recruitmentRequests/pendingRequestApprovalUsers',
    downloadRequestAttach: 'recruitmentRequests/downloadRequestAttach',
    reviseRequest: 'recruitmentRequests/reviseRequest',
    sendJobRequestReminder: 'notifications/sendJobRequestReminder'
  }),
  onClickApproveRequest(){
    this.approvalObject.job_request_id = this.myRequest.id;
   if (this.recruitmentManagerRequestsPermissions) {
    this.approvePendingRequest({param: 'recruitment_requests', data: this.approvalObject});
    } else if (this.salaryGroupManagerPermissions) {
    this.approvePendingRequest({param: 'salaryGroupManager_requests', data: this.approvalObject});
    } else if (this.hrOperatingMangerRequestsPermissions) {
    this.approvePendingRequest({param: 'hr_requests', data: this.approvalObject});
    } else if (this.financialManagerRequestsPermissions) {
    this.approvePendingRequest({param: 'finance_requests', data: this.approvalObject});
    } else if (this.adminManagerRequestsPermissions) {
    this.approvePendingRequest({param: 'admin_requests', data: this.approvalObject});
   } else {
    this.approvePendingRequest({param: 'pending_requests', data: this.approvalObject});
   }
  },
  onClickRejectRequest(){
    this.approvalObject.job_request_id = this.myRequest.id;
    this.approvalObject.approval = 0;
       if (this.recruitmentManagerRequestsPermissions) {
    this.approvePendingRequest({param: 'recruitment_requests', data: this.approvalObject});
   } else if (this.hrOperatingMangerRequestsPermissions) {
    this.approvePendingRequest({param: 'hr_requests', data: this.approvalObject});
    } else if (this.financialManagerRequestsPermissions) {
    this.approvePendingRequest({param: 'finance_requests', data: this.approvalObject});
    } else if (this.adminManagerRequestsPermissions) {
    this.approvePendingRequest({param: 'admin_requests', data: this.approvalObject});
   } else {
    this.approvePendingRequest({param: 'pending_requests', data: this.approvalObject});
   }
  },
  onClickSendReminder(){
    this.showSpinner = true;
    this.sendJobRequestReminder(this.$route.params.id).then(res => {
      this.showSpinner = false;
    }).catch(err => {
      this.showSpinner = false;
    });
  },
  onDownloadRequestAttach(){
    this.downloadRequestAttach({attach: this.myRequest.attach});
  },
  onSubmitHrRevision(){
    this.reviseRequest(this.hrRevisionObject);
  }
  },
  created(){
    this.fetchMyRequest(this.$route.params.id);
    if(this.$route.params.id){
      this.pendingRequestApprovalUsers({job_request_id: Number(this.$route.params.id?this.$route.params.id:0)});
    }
  },
    computed: {
    ...mapGetters({
      myRequest: 'recruitmentRequests/myRequest',
      approvalUsers: 'recruitmentRequests/approvalUsers'
    }),
   salaryGroupManagerPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('salary_group_manager_approval_requests');
    },
    reviseRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('revise_requests');
    },
    previewFilePermissions(){
      return (this.myRequest && this.myRequest.attach && this.myRequest.attach.includes('.pdf')) || (this.myRequest && this.myRequest.attach && this.myRequest.attach.includes('.doc')) || (this.myRequest && this.myRequest.attach && this.myRequest.attach.includes('.docx'))
    },
    recruitmentManagerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_recruitment_manager');
    },
     hrOperatingMangerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_hr_manager');
    },
    financialManagerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_finance_manager');
    },
    adminManagerRequestsPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('approve_admin_manager');
    },
    approvalDecisionPermissionsInit(){
      return this.userDetailsGlobal && this.userPermissionsGlobal && this.myRequest && this.userDetailsGlobal.id != this.myRequest.requested_by && !this.reviseRequestsPermissions && this.myRequest.status && this.myRequest.status.message && this.myRequest.status.message != 'Approved'
    },
    approvalDecisionPermissions(){
      return (this.approvalDecisionPermissionsInit && this.myRequest.status.user && this.userDetailsGlobal.id == this.myRequest.status.user.id) || (this.approvalDecisionPermissionsInit && this.myRequest.status.status_id == 3 && this.userPermissionsGlobal.includes('approve_recruitment_manager')) || (this.approvalDecisionPermissionsInit && this.myRequest.status.status_id == 4 && this.userPermissionsGlobal.includes('approve_hr_manager')) || (this.approvalDecisionPermissionsInit && this.myRequest.status.status_id == 5 && this.userPermissionsGlobal.includes('approve_finance_manager')) || (this.approvalDecisionPermissionsInit && this.myRequest.status.status_id == 6 && this.userPermissionsGlobal.includes('approve_admin_manager')) || (this.approvalDecisionPermissionsInit && this.myRequest.status.status_id == 8 && this.userDetailsGlobal.manager_of_salary_groups.includes(Number(this.myRequest.salary_group_id)));
    },
    sendReminderPermissions(){
      return this.userDetailsGlobal && this.userDetailsGlobal.id == this.myRequest.requested_by && this.myRequest.status && this.myRequest.status.message && this.myRequest.status.message != 'Approved' && this.myRequest.status.message != 'Rejected';
    },
    requestStatusRedirectPermissions(){
      return this.myRequest.status.message && this.myRequest.status.message.includes('Pending') && this.myRequest.status.status_id == 0 && this.userPermissionsGlobal && this.userPermissionsGlobal.includes('show_salary-groups');
    }

  }
}
</script>

<style lang="scss" scoped>
  .request-date{
     font-size: 65%;
  }
  .send-reminder-btn{
    width: 140px;
  }
</style>
