<template>
  <div>
     <HomeSectionTitle :title="'Recruitment Requests'" />
     <div class="container">
       <div class="row">
         <div class="col-md-3">

           <section>
            <FilterWidget :title="'Search'">
               <input type="text" class="form-control" placeholder="Search Keyword" />
            </FilterWidget>
          </section>

           <section>
            <FilterWidget :title="'Department'">
               <select class="form-control">
                 <option>MIS</option>
                 <option>It</option>
               </select>
            </FilterWidget>
          </section>

          <section>
            <FilterWidget :title="'Experience'" :checkBoxList="experienceList" :showCheckList="true"></FilterWidget>
          </section>

          <section>
            <FilterWidget :title="'Salary'" :checkBoxList="salaryList" :showCheckList="true"></FilterWidget>
          </section>

          <!-- <section>
            <FilterWidget :title="'Job Type'" :checkBoxList="jopTypeList" :showCheckList="true"></FilterWidget>
          </section> -->

          <section>
            <button type="btn" class="btn main-btn btn-block">FILTER</button>
          </section>

         </div>
         <div class="col-md-9">
           <div class="row">
             <div class="col-md-4" v-for="(box, index) in 12" :key="index">
                 <RecruitmentBox />
             </div>

       <div class="col-md-12 mt-3 mb-3">
                <b-pagination
                 align="center"
      v-model="currentPage"
      :total-rows="20"
      :per-page="12"
      first-number
      last-number
      aria-controls="my-table"
      @change="onPageChange"
    ></b-pagination>
          </div>

           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue';
import RecruitmentBox from '@/components/recruitment/RecruitmentBox.vue';
import FilterWidget from '@/components/shared/FilterWidget';

export default {
  data(){
    return{
      currentPage: 1,
      jopTypeList: [
         {id:1, title: 'Full Time'},
         {id:2, title: 'Part Time'},
         {id:3, title: 'Internship'},
         {id:4, title: 'Freelancer'}
       ],
        experienceList: [
         {id:1, title: '1 - 2 Years'},
         {id:2, title: '3 - 5 Years'},
         {id:3, title: '5 - 7 Years'},
         {id:4, title: '+7 Years'}
       ],
       salaryList: [
         {id:1, title: '2000 - 3000 SAR'},
         {id:2, title: '4000 - 8000 SAR'},
         {id:3, title: '9000 - 15000 SAR'},
         {id:4, title: '+15000 SAR'}
       ]
    }
  },
    components: {
      HomeSectionTitle,
      RecruitmentBox,
      FilterWidget
    },
    methods: {
        onPageChange(e){
           console.log(e)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
