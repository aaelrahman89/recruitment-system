<template>
  <div>
    <HomeSectionTitle :title="'Logs'" />
    <div class="container">

      <!-- Filter -->

     <div class="row">
         <div class="col-6 mb-3">
         <button class="btn btn-default btn-sm border rounded" @click="showFilter = !showFilter"><i class="fas fa-filter"></i> Filter</button>
        </div>
        <div class="col-6 text-right">
          <div class="rounded p-1">
            <button type="button" class="btn main-btn btn-sm excel-btn mr-2 ml-2" @click="exportLogsReportExcel" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_reports')"><i class="far fa-file-excel" title="Export Logs Report"></i></button>
          <span class="border-right" @click="showCardsMode = false" :class="!showCardsMode?'text-main':''"><i class="fas fa-list mr-1 ml-1 cursor-pointer"></i></span>
          <span class="border-left" @click="showCardsMode = true" :class="showCardsMode?'text-main':''"><i class="fas fa-th mr-1 ml-1 cursor-pointer"></i></span>
          </div>
        </div>
     </div>

     <div class="row mb-3" v-if="showFilter">
       <div class="col-md-12">
         <div class="bg-white border rounded p-3">
           <form>
           <div class="row">

               <div class="col-md-4">
               <div class="form-group">
                 <label>Search</label>
               <input type="text" class="form-control" v-model="myObject.text_search">
               </div>
             </div>


             <div class="col-md-4">
               <div class="form-group">
               <label>From</label>
               <input type="text" class="form-control" ref="fromDateInput" @focus="$refs.fromDateInput.setAttribute('type', 'date')" v-model="myObject.from">
             </div>
             </div>

                <div class="col-md-4">
                   <div class="form-group">
               <label>To</label>
               <input type="text" class="form-control" ref="toDateInput" @focus="$refs.toDateInput.setAttribute('type', 'date')" v-model="myObject.to">
             </div>
                </div>

             <div class="col-md-12 text-center mt-3">
               <button type="button" class="btn btn-light border" @click="onReset">RESET</button>
               <button type="button" class="btn main-btn" @click="onFilter">SEARCH</button>
             </div>

           </div>
           </form>
         </div>
       </div>
     </div>

      <div class="row" v-if="logs && logs.data && logs.data.data">

  <!-- Table Mode Start -->
  <template v-if="!showCardsMode">
 <div class="table-responsive col-md-12" v-if="logs.data.data.length > 0">
            <table class="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th class="w-5">#</th>
      <th>Created At</th>
      <th>Created By</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(log, index) in logs.data.data" :key="index">
      <td>{{log.id}}</td>
      <td v-if="log.created_at">{{log.created_at.substring(0,10)}}</td>
      <td>{{log.created_by}}</td>
      <td>{{log.description}}</td>
    </tr>
  </tbody>
</table>
          </div>
  </template>
       <!-- Table Mode End -->

      <!-- Card Mode Start -->
      <template v-if="showCardsMode">
       <div class="col-md-3" v-for="(log, index) in logs.data.data" :key="index">
         <CardDynamic
         v-if="log.created_at"
         :mainTitle="log.description"
         :secondTitle="`Created By: ${log.created_by}`"
         :label="log.created_at.substring(0,10)"
         :icon="'fab fa-buffer'"
         :showDropDown="false"
         >
         </CardDynamic>
       </div>
      </template>
       <!-- Card Mode End -->


<!-- Pagination -->
<div class="row w-100 m-0 p-0 mt-2" v-if="logs.data.data.length > 0">

<div class="col-md-6 mt-1">
    Showing {{logs.data.from}} to {{logs.data.to}} of {{logs.data.total}} entries
  </div>

<div class="col-md-6 mb-3">
                <b-pagination
                 align="right"
      v-model="currentPage"
      :total-rows="logs.recordsTotal"
      :per-page="12"
      first-number
      last-number
      @change="onPageChange"
    ></b-pagination>
          </div>

</div>

             <div class="col-md-12" v-if="logs.data.data.length == 0">
         <div class="alert alert-default shadow-sm text-center alert-style"> <i class="far fa-file"></i> There are no logs</div>
       </div>

    </div>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import CardDynamic from '@/components/shared/CardDynamic.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      showCardsMode: false,
      showFilter: false,
      currentPage: 1,
       myObject: {
          page: 1,
          length: 12,
          text_search: null,
          from: null,
          to: null,
          order_dr: 'DESC'
       }
    }
  },
  components: {
    HomeSectionTitle,
    CardDynamic
  },
     methods: {
  ...mapActions({
    fetchLogs: 'logs/fetchLogs',
    exportLogsReportExcel: 'logs/exportLogsReportExcel'
  }),
  onPageChange(e){
    this.myObject.page = e;
    this.fetchLogs(this.myObject);
  },
  onFilter(){
    this.currentPage = 1;
    this.myObject.page = 1;
    this.fetchLogs(this.myObject);
  },
  onReset(){
    this.myObject = {
          page: 1,
          length: 12,
          text_search: null,
          from: null,
          to: null,
          order_dr: 'DESC'
       };
    this.fetchLogs(this.myObject);
  }
  },
  created(){
    this.fetchLogs(this.myObject);

     // permissions start
     if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('list_logs')){
          this.$router.push('/')
        }
    // permissions end

  },
    computed: {
    ...mapGetters({
      logs: 'logs/logs'
    }),
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/card';
.fa-plus-circle{
  color: #707f8c;
  font-size: 25px;
}
</style>
