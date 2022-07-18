<template>
  <div>
    <HomeSectionTitle :title="'Job Recruitment Request'" />
    <div class="container">
      <div class="row">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     Job Recruitment Request
  </div>

   <div class="card-body">
     <div class="row">
        <div class="col-md-4">
       <div class="form-group">
         <label>Job Title</label>
         <input type="text" class="form-control" placeholder="Job Title" value="Front End Developer" readonly>
       </div>
       </div>

       <div class="col-md-4">
       <div class="form-group">
         <label>Salary Limit</label>
         <div class="d-flex">
           <input type="text" class="form-control mr-1 ml-1" placeholder="From" value="7000" readonly>
         <input type="text" class="form-control mr-1 ml-1" placeholder="To" value="10000" readonly>
         </div>
       </div>
       </div>

       <div class="col-md-4">
       <div class="form-group">
         <label>Salary Group Type</label>
         <input type="text" class="form-control" placeholder="Salary Group Type" value="group type" readonly>
       </div>
       </div>

         <div class="col-md-4">
       <div class="form-group">
         <label>Department</label>
         <select class="form-control" disabled>
           <option selected>MIS</option>
           <option>IT</option>
         </select>
       </div>
       </div>

       <div class="col-md-4">
       <div class="form-group">
         <label>City</label>
         <input type="text" class="form-control" placeholder="City" value="Cairo" readonly>
       </div>
       </div>

        <div class="col-md-4">
       <div class="form-group">
         <label>Location</label>
         <input type="text" class="form-control" placeholder="Location" value="Nasr City" readonly>
       </div>
       </div>

    <div class="col-md-4">
       <div class="form-group">
         <label>Age Limit</label>
         <div class="d-flex">
           <input type="text" class="form-control mr-1 ml-1" placeholder="From" value="25" readonly>
         <input type="text" class="form-control mr-1 ml-1" placeholder="To" value="35" readonly>
         </div>
       </div>
       </div>

        <div class="col-md-4">
       <div class="form-group">
         <label>Years of Experience</label>
         <input type="text" class="form-control" placeholder="Years of Experience" value="5" readonly>
       </div>
       </div>

      <div class="col-md-4">
       <div class="form-group">
         <label>
           Required by Date
 <span v-b-popover.hover.top="'Not less than one month from the date of approval of the request'" title="Required by Date">
    <i class="fas fa-info-circle"></i>
  </span>
         </label>
         <input type="text" class="form-control" placeholder="Required by Date" ref="requiredDateInput" value="23/6/2021" readonly>
       </div>
       </div>

        <div class="col-md-4">
       <div class="form-group">
         <label>No. of workers in the department</label>
         <input type="text" class="form-control" placeholder="No. of workers in the department" value="7" readonly>
       </div>
       </div>

      <div class="col-md-4">
       <div class="form-group">
         <label>No. of workers in the same Position</label>
         <input type="text" class="form-control" placeholder="No. of workers in the same Position" value="3" readonly>
       </div>
       </div>

      <div class="col-md-4">
       <div class="form-group">
         <label>Qty. Required No</label>
         <div class="d-flex">
           <input type="text" class="form-control mr-1 ml-1" placeholder="Qty. Required No" value="2" readonly>
         <select class="form-control" disabled>
             <option selected>New</option>
             <option>Replacement</option>
             <option>Job vacancy</option>
         </select>
         </div>
       </div>
       </div>

      <div class="col-md-12">
       <div class="form-group">
         <label>Job Description</label>
         <textarea class="form-control text-area" placeholder="Job Description" rows="7" readonly>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </textarea>
       </div>
       </div>

       <!-- responsibilities start -->
          <div class="col-md-12">
       <div class="form-group">
         <label>Responsibility</label>
         <!-- <div class="d-flex">
           <input type="text" maxlength="128" class="form-control mr-1" placeholder="Add Responsibility" v-model="responsibilityFormControl" @keyup.enter="requestObject.responsibilities.push(responsibilityFormControl)">
           <button class="btn" @click="requestObject.responsibilities.push(responsibilityFormControl)" :disabled="responsibilityFormControl.length == 0?true:false"><i class="fas fa-plus-circle fa-2x"></i></button>
         </div> -->

<ul class="list-group mt-2">
  <li class="list-group-item active" aria-current="true">Responsibilities</li>
  <li class="list-group-item" v-for="(responsibilityText, index) in requestObject.responsibilities" :key="index">
    <div class="d-flex justify-content-between">
      {{index+1}}- {{responsibilityText}}
      <!-- <i class="far fa-trash-alt text-danger cursor-pointer" @click="requestObject.responsibilities.splice(index,1)"></i> -->
    </div>
  </li>
</ul>

       </div>
       </div>
       <!-- responsibilities end -->


       <!-- requirements start -->
          <div class="col-md-12">
       <div class="form-group">
         <label>Requirements</label>
         <!-- <div class="d-flex">
           <input type="text" maxlength="128" class="form-control mr-1" placeholder="Add Requirement" v-model="requirementFormControl" @keyup.enter="requestObject.requirements.push(requirementFormControl)">
           <button class="btn" @click="requestObject.requirements.push(requirementFormControl)" :disabled="requirementFormControl.length == 0?true:false"><i class="fas fa-plus-circle fa-2x"></i></button>
         </div> -->

<ul class="list-group mt-2">
  <li class="list-group-item active" aria-current="true">Requirements</li>
  <li class="list-group-item" v-for="(requirementText, index) in requestObject.requirements" :key="index">
    <div class="d-flex justify-content-between">
      {{index+1}}- {{requirementText}}
      <!-- <i class="far fa-trash-alt text-danger cursor-pointer" @click="requestObject.requirements.splice(index,1)"></i> -->
    </div>
  </li>
</ul>

       </div>
       </div>
       <!-- requirements end -->

         <div class="col-md-12">
       <div class="form-group">
         <label>Other Notes</label>
         <textarea class="form-control text-area" placeholder="Other Notes" rows="7" readonly>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </textarea>
       </div>
       </div>
<!--
       <div class="col-md-12 text-center mt-3">
         <button type="button" class="btn main-btn">SUBMIT</button>
       </div> -->

   </div>
   </div>

</div>
<!-- card end -->



      </div>


    </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      responsibilityFormControl: '',
      requirementFormControl: '',
       requestObject: {
         date: new Date().toLocaleDateString(),
         responsibilities: ['Lorem Ipsum', 'dummy text of the printing and typesetting industry', 'standard dummy text ever since the 1500s'],
         requirements: ['unknown printer took a galley of type', 'scrambled it to make a type specimen book']
       }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
