<template>
  <div>
    <HomeSectionTitle :title="'Candidate'" />
    <div class="container">
      <client-only>
        <ValidationObserver v-slot="{ invalid }">
           <form>
      <div class="row" v-if="myRequest">
      <div class="col-md-12">

        <!-- card start -->
        <div class="card mb-4">
  <div class="card-header text-center">
     Candidate
  </div>

   <div class="card-body">
     <div class="row">

       <div class="col-md-12">
         <h5>Candidate Informations</h5>
         <hr />
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Candidate Name</label>
         <input type="text" class="form-control" placeholder="Candidate Name" v-model="myObject.candidate_name">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

        <div class="col-md-4">
       <div class="form-group">
         <label>Job Title</label>
         <input type="text" class="form-control" placeholder="Job Title" :value="myRequest.job_title" readonly>
       </div>
       </div>

        <div class="col-md-4">
          <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Date</label>
         <input type="text" class="form-control" placeholder="Date" ref="dateInput" @focus="$refs.dateInput.setAttribute('type', 'date')" v-model="myObject.interview_date">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
       </ValidationProvider>
       </div>

       <div class="col-md-4">
       <div class="form-group">
         <label>Job Recruitment Request no.</label>
         <input type="text" class="form-control" placeholder="Request no." v-model="myObject.job_request_id" readonly>
       </div>
       </div>

      <div class="col-md-4">
       <div class="form-group">
         <label>Position Applied to</label>
         <input type="text" class="form-control" placeholder="Position Applied to" :value="myRequest.position_name" readonly>
       </div>
       </div>

         <div class="col-md-4">
           <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Date of Birth</label>
         <input type="text" class="form-control" placeholder="Date of Birth" ref="dateOfBirthInput" @focus="$refs.dateOfBirthInput.setAttribute('type', 'date')" v-model="myObject.dob">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
           </ValidationProvider>
       </div>

       <div class="col-md-4">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Age</label>
         <input type="number" class="form-control" placeholder="Age" v-model="myObject.age">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

       <div class="col-md-4">
         <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Years of Experience</label>
         <input type="text" class="form-control" placeholder="Years of Experience" v-model="myObject.experience_years">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

      <div class="col-md-4">
      <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Nationality</label>
         <input type="text" class="form-control" placeholder="Nationality" v-model="myObject.nationality">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
         </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required|email">
       <div class="form-group">
         <label>Email</label>
         <input type="text" class="form-control" placeholder="Email" v-model="myObject.email">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

      <div class="col-md-4">
        <ValidationProvider v-slot="{ errors }" rules="required">
       <div class="form-group">
         <label>Phone</label>
         <input type="number" class="form-control" placeholder="Phone" v-model="myObject.phone">
         <div class="text-danger error-msg">{{ errors[0] }}</div>
       </div>
        </ValidationProvider>
       </div>

       <div class="col-md-4"></div>

        <div class="col-md-12 mt-3">
         <h5>Evaluation Factors</h5>
         <hr />
       </div>

<div class="col-md-2">
       <div class="form-group">
         <label>Education</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault3">
  <label class="form-check-label" for="flexRadioDefault3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4">
  <label class="form-check-label" for="flexRadioDefault4">
    Fair
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5">
  <label class="form-check-label" for="flexRadioDefault5">
    Poor
  </label>
</div>

       </div>
       </div>

       <div class="col-md-2">
       <div class="form-group">
         <label>Experience</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault11">
  <label class="form-check-label" for="flexRadioDefault11">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault22">
  <label class="form-check-label" for="flexRadioDefault22">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault33">
  <label class="form-check-label" for="flexRadioDefault33">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault44">
  <label class="form-check-label" for="flexRadioDefault44">
    Fair
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault55">
  <label class="form-check-label" for="flexRadioDefault55">
    Poor
  </label>
</div>

       </div>
       </div>

          <div class="col-md-2">
       <div class="form-group">
         <label>PC Skills</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault111">
  <label class="form-check-label" for="flexRadioDefault111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault222">
  <label class="form-check-label" for="flexRadioDefault222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault333">
  <label class="form-check-label" for="flexRadioDefault333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault444">
  <label class="form-check-label" for="flexRadioDefault444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault555">
  <label class="form-check-label" for="flexRadioDefault555">
    Poor
  </label>
</div>

       </div>
       </div>

          <div class="col-md-2">
       <div class="form-group">
         <label>Practical test</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1111">
  <label class="form-check-label" for="flexRadioDefault1111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2222">
  <label class="form-check-label" for="flexRadioDefault2222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault3333">
  <label class="form-check-label" for="flexRadioDefault3333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4444">
  <label class="form-check-label" for="flexRadioDefault4444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault5555">
  <label class="form-check-label" for="flexRadioDefault5555">
    Poor
  </label>
</div>

       </div>
       </div>


          <div class="col-md-2">
       <div class="form-group">
         <label>English</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault11111">
  <label class="form-check-label" for="flexRadioDefault11111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault22222">
  <label class="form-check-label" for="flexRadioDefault22222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault33333">
  <label class="form-check-label" for="flexRadioDefault33333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault44444">
  <label class="form-check-label" for="flexRadioDefault44444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault55555">
  <label class="form-check-label" for="flexRadioDefault55555">
    Poor
  </label>
</div>

       </div>
       </div>

        <div class="col-md-2">
       <div class="form-group">
         <label>Travel & Relocation</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault111111">
  <label class="form-check-label" for="flexRadioDefault111111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault222222">
  <label class="form-check-label" for="flexRadioDefault222222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault333333">
  <label class="form-check-label" for="flexRadioDefault333333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault444444">
  <label class="form-check-label" for="flexRadioDefault444444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault555555">
  <label class="form-check-label" for="flexRadioDefault555555">
    Poor
  </label>
</div>

       </div>
       </div>

         <div class="col-md-2">
       <div class="form-group">
         <label>Job Knowledge</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1111111">
  <label class="form-check-label" for="flexRadioDefault1111111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2222222">
  <label class="form-check-label" for="flexRadioDefault2222222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault3333333">
  <label class="form-check-label" for="flexRadioDefault3333333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault4444444">
  <label class="form-check-label" for="flexRadioDefault4444444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault5555555">
  <label class="form-check-label" for="flexRadioDefault5555555">
    Poor
  </label>
</div>

       </div>
       </div>

         <div class="col-md-2">
       <div class="form-group">
         <label>Appearance</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadio1">
  <label class="form-check-label" for="flexRadio1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadio2">
  <label class="form-check-label" for="flexRadio2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadio3">
  <label class="form-check-label" for="flexRadio3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadio4">
  <label class="form-check-label" for="flexRadio4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadio5">
  <label class="form-check-label" for="flexRadio5">
    Poor
  </label>
</div>

       </div>
       </div>

          <div class="col-md-2">
       <div class="form-group">
         <label>Arrive on time</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadio11">
  <label class="form-check-label" for="flexRadio11">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadio22">
  <label class="form-check-label" for="flexRadio22">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadio33">
  <label class="form-check-label" for="flexRadio33">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadio44">
  <label class="form-check-label" for="flexRadio44">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadio55">
  <label class="form-check-label" for="flexRadio55">
    Poor
  </label>
</div>

       </div>
       </div>

         <div class="col-md-2">
       <div class="form-group">
         <label>Energetic</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadio111">
  <label class="form-check-label" for="flexRadio111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadio222">
  <label class="form-check-label" for="flexRadio222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadio333">
  <label class="form-check-label" for="flexRadio333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadio444">
  <label class="form-check-label" for="flexRadio444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadio555">
  <label class="form-check-label" for="flexRadio555">
    Poor
  </label>
</div>

       </div>
       </div>

       <div class="col-md-2">
       <div class="form-group">
         <label>Pleasant & Smile</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexfddf1">
  <label class="form-check-label" for="flexfddf1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexfddf2">
  <label class="form-check-label" for="flexfddf2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexfddf3">
  <label class="form-check-label" for="flexfddf3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexfddf4">
  <label class="form-check-label" for="flexfddf4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexfddf5">
  <label class="form-check-label" for="flexfddf5">
    Poor
  </label>
</div>

       </div>
       </div>

         <div class="col-md-2">
       <div class="form-group">
         <label>Body Language</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexfddf11">
  <label class="form-check-label" for="flexfddf11">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexfddf22">
  <label class="form-check-label" for="flexfddf22">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexfddf33">
  <label class="form-check-label" for="flexfddf33">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexfddf44">
  <label class="form-check-label" for="flexfddf44">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexfddf55">
  <label class="form-check-label" for="flexfddf55">
    Poor
  </label>
</div>

       </div>
       </div>


   <div class="col-md-2">
       <div class="form-group">
         <label>Communication Skills</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexfddf111">
  <label class="form-check-label" for="flexfddf111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexfddf222">
  <label class="form-check-label" for="flexfddf222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexfddf333">
  <label class="form-check-label" for="flexfddf333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexfddf444">
  <label class="form-check-label" for="flexfddf444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexfddf555">
  <label class="form-check-label" for="flexfddf555">
    Poor
  </label>
</div>

       </div>
       </div>


  <div class="col-md-2">
       <div class="form-group">
         <label>Clear Ideas & Focused</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexfddf1111">
  <label class="form-check-label" for="flexfddf1111">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexfddf2222">
  <label class="form-check-label" for="flexfddf2222">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexfddf3333">
  <label class="form-check-label" for="flexfddf3333">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexfddf4444">
  <label class="form-check-label" for="flexfddf4444">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexfddf5555">
  <label class="form-check-label" for="flexfddf5555">
    Poor
  </label>
</div>

       </div>
       </div>

         <div class="col-md-2">
       <div class="form-group">
         <label>Self Confidence</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfname" id="self1">
  <label class="form-check-label" for="self1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfname" id="self2">
  <label class="form-check-label" for="self2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfname" id="self3">
  <label class="form-check-label" for="self3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfname" id="self4">
  <label class="form-check-label" for="self4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="selfname" id="self5">
  <label class="form-check-label" for="self5">
    Poor
  </label>
</div>

       </div>
       </div>


   <div class="col-md-2">
       <div class="form-group">
         <label>Personality & Attitude</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="personalityname" id="personality1">
  <label class="form-check-label" for="personality1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="personalityname" id="personality2">
  <label class="form-check-label" for="personality2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="personalityname" id="personality3">
  <label class="form-check-label" for="personality3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="personalityname" id="personality4">
  <label class="form-check-label" for="personality4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="personalityname" id="personality5">
  <label class="form-check-label" for="personality5">
    Poor
  </label>
</div>

       </div>
       </div>

       <div class="col-md-2">
       <div class="form-group">
         <label>Self Motivation</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfMotivationName" id="selfMotivationName1">
  <label class="form-check-label" for="selfMotivationName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfMotivationName" id="selfMotivationName2">
  <label class="form-check-label" for="selfMotivationName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfMotivationName" id="selfMotivationName3">
  <label class="form-check-label" for="selfMotivationName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfMotivationName" id="selfMotivationName4">
  <label class="form-check-label" for="selfMotivationName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="selfMotivationName" id="selfMotivationName5">
  <label class="form-check-label" for="selfMotivationName5">
    Poor
  </label>
</div>

       </div>
       </div>

          <div class="col-md-2">
       <div class="form-group">
         <label>Mature & Serious</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="MatureSeriousName" id="MatureSeriousName1">
  <label class="form-check-label" for="MatureSeriousName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="MatureSeriousName" id="MatureSeriousName2">
  <label class="form-check-label" for="MatureSeriousName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="MatureSeriousName" id="MatureSeriousName3">
  <label class="form-check-label" for="MatureSeriousName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="MatureSeriousName" id="MatureSeriousName4">
  <label class="form-check-label" for="MatureSeriousName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="MatureSeriousName" id="MatureSeriousName5">
  <label class="form-check-label" for="MatureSeriousName5">
    Poor
  </label>
</div>

       </div>
       </div>

    <div class="col-md-2">
       <div class="form-group">
         <label>Team Player</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="teamPlayerName" id="teamPlayerName1">
  <label class="form-check-label" for="teamPlayerName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="teamPlayerName" id="teamPlayerName2">
  <label class="form-check-label" for="teamPlayerName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="teamPlayerName" id="teamPlayerName3">
  <label class="form-check-label" for="teamPlayerName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="teamPlayerName" id="teamPlayerName4">
  <label class="form-check-label" for="teamPlayerName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="teamPlayerName" id="teamPlayerName5">
  <label class="form-check-label" for="teamPlayerName5">
    Poor
  </label>
</div>

       </div>
       </div>


 <div class="col-md-2">
       <div class="form-group">
         <label>Cooperative</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="cooperativeName" id="cooperativeName1">
  <label class="form-check-label" for="cooperativeName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="cooperativeName" id="cooperativeName2">
  <label class="form-check-label" for="cooperativeName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="cooperativeName" id="cooperativeName3">
  <label class="form-check-label" for="cooperativeName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="cooperativeName" id="cooperativeName4">
  <label class="form-check-label" for="cooperativeName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="cooperativeName" id="cooperativeName5">
  <label class="form-check-label" for="cooperativeName5">
    Poor
  </label>
</div>

       </div>
       </div>

        <div class="col-md-2">
       <div class="form-group">
         <label>Initiative</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="InitiativeName" id="InitiativeName1">
  <label class="form-check-label" for="InitiativeName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="InitiativeName" id="InitiativeName2">
  <label class="form-check-label" for="InitiativeName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="InitiativeName" id="InitiativeName3">
  <label class="form-check-label" for="InitiativeName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="InitiativeName" id="InitiativeName4">
  <label class="form-check-label" for="InitiativeName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="InitiativeName" id="InitiativeName5">
  <label class="form-check-label" for="InitiativeName5">
    Poor
  </label>
</div>

       </div>
       </div>

          <div class="col-md-2">
       <div class="form-group">
         <label>Self Development</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfDevelopmentName" id="selfDevelopmentName1">
  <label class="form-check-label" for="selfDevelopmentName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfDevelopmentName" id="selfDevelopmentName2">
  <label class="form-check-label" for="selfDevelopmentName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfDevelopmentName" id="selfDevelopmentName3">
  <label class="form-check-label" for="selfDevelopmentName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="selfDevelopmentName" id="selfDevelopmentName4">
  <label class="form-check-label" for="selfDevelopmentName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="selfDevelopmentName" id="selfDevelopmentName5">
  <label class="form-check-label" for="selfDevelopmentName5">
    Poor
  </label>
</div>

       </div>
       </div>

   <div class="col-md-2">
       <div class="form-group">
         <label>Future Plans</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="futurePlansName" id="futurePlansName1">
  <label class="form-check-label" for="futurePlansName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="futurePlansName" id="futurePlansName2">
  <label class="form-check-label" for="futurePlansName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="futurePlansName" id="futurePlansName3">
  <label class="form-check-label" for="futurePlansName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="futurePlansName" id="futurePlansName4">
  <label class="form-check-label" for="futurePlansName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="futurePlansName" id="futurePlansName5">
  <label class="form-check-label" for="futurePlansName5">
    Poor
  </label>
</div>

       </div>
       </div>


   <div class="col-md-2">
       <div class="form-group">
         <label>Decision Making</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="decisionMakingName" id="decisionMakingName1">
  <label class="form-check-label" for="decisionMakingName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="decisionMakingName" id="decisionMakingName2">
  <label class="form-check-label" for="decisionMakingName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="decisionMakingName" id="decisionMakingName3">
  <label class="form-check-label" for="decisionMakingName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="decisionMakingName" id="decisionMakingName4">
  <label class="form-check-label" for="decisionMakingName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="decisionMakingName" id="decisionMakingName5">
  <label class="form-check-label" for="decisionMakingName5">
    Poor
  </label>
</div>

       </div>
       </div>

          <div class="col-md-2">
       <div class="form-group">
         <label>Ambitious</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="AmbitiousName" id="AmbitiousName1">
  <label class="form-check-label" for="AmbitiousName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="AmbitiousName" id="AmbitiousName2">
  <label class="form-check-label" for="AmbitiousName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="AmbitiousName" id="AmbitiousName3">
  <label class="form-check-label" for="AmbitiousName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="AmbitiousName" id="AmbitiousName4">
  <label class="form-check-label" for="AmbitiousName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="AmbitiousName" id="AmbitiousName5">
  <label class="form-check-label" for="AmbitiousName5">
    Poor
  </label>
</div>

       </div>
       </div>

    <div class="col-md-2">
       <div class="form-group">
         <label>Flexible</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="FlexibleName" id="FlexibleName1">
  <label class="form-check-label" for="FlexibleName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="FlexibleName" id="FlexibleName2">
  <label class="form-check-label" for="FlexibleName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="FlexibleName" id="FlexibleName3">
  <label class="form-check-label" for="FlexibleName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="FlexibleName" id="FlexibleName4">
  <label class="form-check-label" for="FlexibleName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="FlexibleName" id="FlexibleName5">
  <label class="form-check-label" for="FlexibleName5">
    Poor
  </label>
</div>

       </div>
       </div>


  <div class="col-md-2">
       <div class="form-group">
         <label>Creative</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="CreativeName" id="CreativeName1">
  <label class="form-check-label" for="CreativeName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="CreativeName" id="CreativeName2">
  <label class="form-check-label" for="CreativeName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="CreativeName" id="CreativeName3">
  <label class="form-check-label" for="CreativeName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="CreativeName" id="CreativeName4">
  <label class="form-check-label" for="CreativeName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="CreativeName" id="CreativeName5">
  <label class="form-check-label" for="CreativeName5">
    Poor
  </label>
</div>

       </div>
       </div>


  <div class="col-md-2">
       <div class="form-group">
         <label>Handle work pressure</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="handleWorkPressureName" id="handleWorkPressureName1">
  <label class="form-check-label" for="handleWorkPressureName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="handleWorkPressureName" id="handleWorkPressureName2">
  <label class="form-check-label" for="handleWorkPressureName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="handleWorkPressureName" id="handleWorkPressureName3">
  <label class="form-check-label" for="handleWorkPressureName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="handleWorkPressureName" id="handleWorkPressureName4">
  <label class="form-check-label" for="handleWorkPressureName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="handleWorkPressureName" id="handleWorkPressureName5">
  <label class="form-check-label" for="handleWorkPressureName5">
    Poor
  </label>
</div>

       </div>
       </div>


  <div class="col-md-2">
       <div class="form-group">
         <label>Problem solving</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="ProblemSolvingName" id="ProblemSolvingName1">
  <label class="form-check-label" for="ProblemSolvingName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="ProblemSolvingName" id="ProblemSolvingName2">
  <label class="form-check-label" for="ProblemSolvingName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="ProblemSolvingName" id="ProblemSolvingName3">
  <label class="form-check-label" for="ProblemSolvingName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="ProblemSolvingName" id="ProblemSolvingName4">
  <label class="form-check-label" for="ProblemSolvingName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="ProblemSolvingName" id="ProblemSolvingName5">
  <label class="form-check-label" for="ProblemSolvingName5">
    Poor
  </label>
</div>

       </div>
       </div>


  <div class="col-md-2">
       <div class="form-group">
         <label>Leadership Skills</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="LeadershipName" id="LeadershipName1">
  <label class="form-check-label" for="LeadershipName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="LeadershipName" id="LeadershipName2">
  <label class="form-check-label" for="LeadershipName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="LeadershipName" id="LeadershipName3">
  <label class="form-check-label" for="LeadershipName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="LeadershipName" id="LeadershipName4">
  <label class="form-check-label" for="LeadershipName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="LeadershipName" id="LeadershipName5">
  <label class="form-check-label" for="LeadershipName5">
    Poor
  </label>
</div>

       </div>
       </div>

        <div class="col-md-2">
       <div class="form-group">
         <label>Short/Long Time</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="shortTimeName" id="shortTimeName1">
  <label class="form-check-label" for="shortTimeName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="shortTimeName" id="shortTimeName2">
  <label class="form-check-label" for="shortTimeName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="shortTimeName" id="shortTimeName3">
  <label class="form-check-label" for="shortTimeName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="shortTimeName" id="shortTimeName4">
  <label class="form-check-label" for="shortTimeName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="shortTimeName" id="shortTimeName5">
  <label class="form-check-label" for="shortTimeName5">
    Poor
  </label>
</div>

       </div>
       </div>


     <div class="col-md-10">
       <div class="form-group factor-styling-div">
         <label>Do you think that the candidate's personality is compatible with the company’s work culture?</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="doYouThinkName" id="doYouThinkName1">
  <label class="form-check-label" for="doYouThinkName1">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="doYouThinkName" id="doYouThinkName2">
  <label class="form-check-label" for="doYouThinkName2">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="doYouThinkName" id="doYouThinkName3">
  <label class="form-check-label" for="doYouThinkName3">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" name="doYouThinkName" id="doYouThinkName4">
  <label class="form-check-label" for="doYouThinkName4">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" name="doYouThinkName" id="doYouThinkName5">
  <label class="form-check-label" for="doYouThinkName5">
    Poor
  </label>
</div>

       </div>
       </div>


      <div class="col-md-12">
       <div class="form-group">
         <label>What are the strength points for the candidate</label>
         <textarea class="form-control text-area" placeholder="The strength points for the candidate" rows="5" v-model="myObject.candidate_strength_points"></textarea>
       </div>
       </div>

      <div class="col-md-12">
       <div class="form-group">
         <label>Do you have any negative feedback for the candidate</label>
         <textarea class="form-control text-area" placeholder="The feedback about candidate" rows="5" v-model="myObject.candidate_negative_feedback"></textarea>
       </div>
       </div>


        <!-- <div class="col-md-2" v-for="(factor, index) in factors" :key="index">
       <div class="form-group">
         <label>{{factor.title}}</label>

         <div class="form-check">
  <input class="form-check-input" type="radio" :name="factor.name" value="Excellent" v-model="factorArray[index]">
  <label class="form-check-label">
    Excellent
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" :name="factor.name" value="V. Good" v-model="factorArray[index]">
  <label class="form-check-label">
    V. Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" :name="factor.name" value="Good" v-model="factorArray[index]">
  <label class="form-check-label">
    Good
  </label>
</div>

         <div class="form-check">
  <input class="form-check-input" type="radio" :name="factor.name" value="Fair" v-model="factorArray[index]">
  <label class="form-check-label">
    Fair
  </label>
</div>

 <div class="form-check">
  <input class="form-check-input" type="radio" :name="factor.name" value="Poor" v-model="factorArray[index]">
  <label class="form-check-label">
    Poor
  </label>
</div>

       </div>
       </div> -->




       <div class="col-md-12 text-center mt-3">
         <button type="button" class="btn main-btn" @click="onSubmit" :disabled="invalid">SUBMIT</button>
       </div>

   </div>
   </div>

</div>
<!-- card end -->



      </div>


    </div>
      </form>
        </ValidationObserver>
      </client-only>
    </div>
  </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle.vue'
import { mapGetters, mapActions } from "vuex"
export default {
  data(){
    return {
      myObject: {
        job_request_id: Number(this.$route.params.requestId),
        candidate_name: null,
        interview_date: null,
        email: null,
        phone: null,
        experience_years: null,
        nationality: null,
        dob: null,
        age: null
      },
      factorArray: [],
      factors: [
        {id: 1, title: 'Education', name: 'Education'},
        {id: 2, title: 'Experience', name: 'Experience'}
      ],
       requestObject: {
           education: null,
           experience: null
       }
    }
  },
  components: {
    HomeSectionTitle
  },
  methods: {
      ...mapActions({
    fetchMyRequest: 'recruitmentRequests/fetchMyRequest',
    addEditCandidate: 'candidates/addEditCandidate'
  }),
    onSubmit(){
      this.addEditCandidate({id: 0, data: this.myObject});
    }
  },
   computed: {
    ...mapGetters({
      myRequest: 'recruitmentRequests/myRequest'
    })
  },
  created(){

   // fetch request on page load
   this.fetchMyRequest(this.$route.params.requestId)

     // permissions start
     if(this.userPermissionsGlobal && !this.userPermissionsGlobal.includes('add_candidates')){
          this.$router.push('/')
        }
    // permissions end
  }
}
</script>

<style lang="scss" scoped>
</style>
