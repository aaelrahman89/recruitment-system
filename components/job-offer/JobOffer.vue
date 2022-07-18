<template>
   <div class="container">
     <div class="text-center w-100">
       <img src="~assets/images/keden-logo.png" width="150px" height="80px" v-if="location == 'KSA'">
       <img src="~assets/images/mothol-logo.png" width="190px" height="70px" v-if="'Egypt'">
     </div>
<table dir="RTL" style="border: none;border-collapse: collapse;width: 100%;">
    <tbody>
        <tr>
            <td colspan="4" dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:704pt;">عرض وظيفي - Job Offer</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:16px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;height:23.25pt;width:176pt;">التاريخ </td>
            <td colspan="2" dir="LTR" style="color:black;font-size:16px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:none;border-left:none;border-bottom:1.0pt solid windowtext;border-right:none;width:352pt;">{{currentDate}}</td>
            <td dir="LTR" style="color:black;font-size:16px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;width:176pt;">Date &nbsp;</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">الى السيد &nbsp;</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:16px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{candidateName}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">To Mr.</td>
        </tr>
        <tr>
            <td colspan="2" dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:none;border-bottom:none;border-right:1.0pt solid windowtext;height:25.5pt;width:352pt;">تحية طيبة وبعد،</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:none;border-right:none;width:352pt;">Greetings,</td>
        </tr>
        <tr>
            <td colspan="2" dir="RTL" style="color:black;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:top;border:none;border-top:none;border-left:none;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;height:90.0pt;width:352pt;font-size: 15px;">يسرنا ان نتقدم لكم بعرض وظيفي لدى&nbsp;شركة &quot; <span v-if="location == 'KSA'">كدن العالمية</span> <span v-if="location == 'Egypt'">مثل</span> &quot; على الوظيفة المذكورة أدناه بالشروط والاحكام، كما يسعدنا انضمامك وقبول عرضنا ومشاركتنا بناء صروح النجاحات المتوالية تحقيقا لأهداف الشركة وتطلعاتها الطموحة، ونتمنى لك آن تحظى بخبرة عمل ايجابية ومجزية.</td>
            <td colspan="2" dir="LTR" style="color:black;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:top;border:none;border-top:none;border-left:1.0pt solid black;border-bottom:1.0pt solid windowtext;border-right:none;width:352pt; font-size: 15px;">We are pleased to offer you an employment offer with <span v-if="location == 'KSA'">Keden International Company</span> <span v-if="location == 'Egypt'">Mothol Company</span> on the following terms &amp; conditions. We are delighted that you are joining us and accepting our job offer and participating in building the successive success.We also hope that you will find your experience of working here both positive and rewarding.</td>
        </tr>
        <tr>
            <td colspan="4" dir="RTL" style="color:black;font-size:16px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:none;border-left:none;border-bottom:1.0pt solid windowtext;border-right:none;height:20pt;width:704pt;">بيانات الوظيفة - Job Information</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">مسمى الوظيفة</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;text-transform: none;">{{jobTitle}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Job Title</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">القسم</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{department}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Department</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">المدينة</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{city}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">City</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">الموقع</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{location}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Location</td>
        </tr>
        <tr>
            <td colspan="4" dir="RTL" style="color:black;font-size:16px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:none;border-bottom:1.0pt solid windowtext;border-right:none;height:20pt;width:704pt;">التفاصيل التعاقدية - Contract Details</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">نوع العقد</td>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{contractType}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Contract Type</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">مدة العقد</td>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{contractDuration}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Contract Duration</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">الإجازات السنوية</td>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{annualLeaves}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Annual Leaves</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">ساعات العمل</td>
            <td colspan="2" dir="ltr" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{workingHours}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Working Hours</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">فترة التجربة</td>
            <td colspan="2" dir="ltr" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{probationPeriod}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Probation Period</td>
        </tr>
        <tr>
            <td colspan="4" dir="RTL" style="color:black;font-size:16px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:none;border-bottom:1.0pt solid windowtext;border-right:none;height:20pt;width:704pt;">تفاصيل الراتب الشهري - Salary Details Per Month</td>
        </tr>
         <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">الراتب النهائى</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:general;vertical-align:middle;border:none;text-align:center;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{finalSalary}} {{currency}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Final Salary</td>
            </tr>
        <tr v-for="(salaryDetail, index) in salary_details_array" :key="index">
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">{{salaryDetail.ar_name}}</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:general;vertical-align:middle;border:none;text-align:center;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{salaryDetail.value}} {{currency}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">{{salaryDetail.name}}</td>
        </tr>
        <tr>
            <td colspan="4" dir="RTL" style="color:black;font-size:16px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:none;border-bottom:1.0pt solid windowtext;border-right:none;height:20pt;width:704pt;">المزايا - Benefits</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">التأمين الطبي</td>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{medicalInsurance}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Medical Insurance</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">تذاكر الطيران والدرجة</td>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{airlinesTickets}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Airlines Tickets &amp; Class</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">حوافز الاداء</td>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{bonusIncentives}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Bonus Incentives</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:20pt;width:176pt;">مزايا أخرى</td>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;">{{otherBenefits}}</td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Other Benefits</td>
        </tr>
        <tr>
            <td colspan="4" dir="RTL" style="color:black;font-size:16px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;height:20pt;width:704pt;">ملاحظات - Notes</td>
        </tr>
        <tr>
            <td colspan="2" dir="RTL" style="color:black;font-size:15px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:none;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;height:34.5pt;width:352pt;">علما بأن هذا العرض لا يشكل أي التزام علي الشركة وذلك إلى حين توقيع عقد العمل وبعد استكمال إجراءات التعيين.</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:15px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:none;width:352pt;">Note that Company is not committed to this offer till the contract is signed and all the recruitment procedures are completed.</td>
        </tr>
        <tr>
            <td colspan="2" dir="RTL" style="color:black;font-size:15px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:none;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;height:34.5pt;width:352pt;">هذا العرض ساري لمدة (5) أيام عمل من تاريخ ارسال العرض.</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:15px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:1.0pt solid windowtext;border-right:none;width:352pt;">This offer is vaild for (5) working days.</td>
        </tr>
        <tr>
            <td colspan="4" dir="RTL" style="color:black;font-size:16px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:center;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:none;border-bottom:1.0pt solid windowtext;border-right:none;height:20pt;width:704pt;">المتقدم - Applicant</td>
        </tr>
        <tr>
            <td colspan="2" dir="RTL" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:none;border-bottom:none;border-right:1.0pt solid windowtext;height:26.25pt;width:352pt;">اوافق على ما ورد اعلاه وسيكون تاريخ الانضمام فى : &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/</td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-left:  1.0pt solid black;width:352pt;">I agree to the above and joining date on : &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:39.9pt;width:176pt;">الاسم </td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:general;vertical-align:middle;border:none;text-align:center;border-top:1.0pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;"><br></td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:1.0pt solid windowtext;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Name</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:39.9pt;width:176pt;">التاريخ </td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:general;vertical-align:middle;border:none;text-align:center;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;"><br></td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Date</td>
        </tr>
        <tr>
            <td dir="RTL" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:right;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;height:39.9pt;width:176pt;">التوقيع </td>
            <td colspan="2" dir="LTR" style="color:black;font-size:17px;font-weight:400;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:general;vertical-align:middle;border:none;text-align:center;border-top:.5pt solid windowtext;border-left:1.0pt solid black;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;width:352pt;"><br></td>
            <td dir="LTR" style="color:black;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;font-family:Arial, sans-serif;text-align:left;vertical-align:middle;border:none;border-top:none;border-left:1.0pt solid windowtext;border-bottom:1.0pt solid windowtext;border-right:1.0pt solid windowtext;background:#c3e6cb;width:176pt;">Signature</td>
        </tr>
    </tbody>
</table>
             </div>
</template>

<script>
export default {
  name: 'JobOffer',
  props: ['currentDate', 'candidateName', 'jobTitle', 'department', 'city', 'location', 'contractType', 'contractDuration', 'annualLeaves', 'workingHours', 'probationPeriod', 'finalSalary', 'currency', 'medicalInsurance', 'airlinesTickets', 'bonusIncentives', 'otherBenefits', 'salary_details_array']

}
</script>

<style lang="scss" scoped>
  td{
    padding: 2px !important;
    text-transform: capitalize;
  }
</style>
