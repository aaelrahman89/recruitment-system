<template>
    <div class="widget-boxed padd-bot-0">
          <div class="widget-boxed-header">
            <h4>{{title}}</h4>
          </div>
          <div class="widget-boxed-body">
            <div class="side-list no-border">
              <slot></slot>
              <ul v-if="showCheckList">
                <li v-for="(checkBoxItem, index) in checkBoxList" :key="index">
                  <span class="custom-checkbox">
                  <input type="checkbox" :value="checkBoxItem.id">
                  <label></label>
                  </span> {{checkBoxItem.title}}
			        	</li>
              </ul>
            </div>
          </div>
        </div>

</template>

<script>
export default {
   name: 'FilterWidget',
   props: {
     title: {
       type: String,
       required: true
     },
      checkBoxList: {
          required: false
       },
      showCheckList: {
          default: false
       }
   }
}
</script>

<style lang="scss" scoped>

.widget-boxed {
	background-color: #fff;
	border-radius: 6px;
	padding:25px 20px;
	transform: translate3d(0, 0, 0);
	z-index: 1;
	margin-bottom: 15px;
	position: relative;
	border: 1px solid #eaeff5;
	box-shadow: 0 4px 10px 0 rgba(41,128,185,0.07);
	-webkit-box-shadow: 0 4px 10px 0 rgba(41,128,185,0.07);
}
.widget-boxed .btn{
	margin-bottom:0;
}
.btn-success:hover, .btn-success:focus {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
	outline: 0px auto -webkit-focus-ring-color;
}
.widget-boxed-header {
	padding:0 0 15px 0;
	border-bottom: 1px solid #eaeff5;
	margin-bottom:10px;
}
.widget-boxed-header h4 {
	margin: 0;
	font-size:18px;
}
.widget-boxed-header h4 i{
	background:#26ae61;
	color:#fff;
	width:36px;
	height:36px;
	line-height:34px;
	text-align:center;
	border-radius:30px;
	padding:0;
	font-size:18px;
	display: inline-block;
	margin-right: 10px;
}
.widget-boxed-header h4 a i{
	background:#26ae61;
	color:#fff;
	width:36px;
	height:36px;
	line-height:34px;
	text-align:center;
	border-radius:30px;
	padding:0;
	font-size:18px;
	display: inline-block;
	margin-right: 10px;
	position: relative;
	top: -8px;
	right: -15px;
}
.side-list ul {
	margin: 0;
	padding: 0;
	margin-bottom:0px;
}
.side-list ul li {
	list-style: none;
	padding: 7px 5px;
	display: inline-block;
	width: 100%;
	border-bottom: 1px dashed #eaeff5;
}
ul.side-list-inline.social-side li {
	display: inline-block;
	width: auto;
	padding: 10px 0 10px 3px;
}
.side-list ul.social-side li{
	border-bottom:0;
	padding-top:0;
	padding-bottom:0;
}
.side-list ul li:last-child{
	border-bottom: none;
}
ul.side-list-inline.social-side li a i {
	width: 40px;
	height: 40px;
	display: inline-block;
	line-height: 38px;
	text-align: center;
	border-radius: 50%;
	transition: all ease .4s;
	border: 1px solid #eaeff5;
	box-shadow: 0 0 10px 1px rgba(71, 85, 95, .05);
	-webkit-box-shadow: 0 0 10px 1px rgba(71, 85, 95, .05);
	-moz-box-shadow: 0 0 10px 1px rgba(71, 85, 95, .05);
}
ul.side-list-inline.social-side li a :hover, ul.side-list-inline.social-side li a :focus {
	background: #26ae61;
	color: #ffffff;
	border-color:#26ae61;
}
.widget-boxed-body form{
	margin-top:25px;
}
.widget-boxed-body a.full-width i {
	margin-right: 5px;
}
.custom-checkbox {
	position: relative;
}
.custom-checkbox input[type="checkbox"] {
	opacity: 0;
	position: absolute;
	margin: 5px 0 0 3px;
	z-index: 9;
}
.custom-checkbox label:before {
	width: 18px;
	height: 18px;
}
.custom-checkbox label:before {
	content: '';
	margin-right: 10px;
	display: inline-block;
	vertical-align: text-top;
	background: #ffffff;
	border: 2px solid #bbb;
	border-radius: 3px;
	box-sizing: border-box;
	z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	content: '';
	position: absolute;
	left: 6px;
	top: 3px;
	width: 6px;
	height: 10px;
	border: solid #000;
	border-width: 0 2px 2px 0;
	transform: inherit;
	z-index: 3;
	transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
	border-color: #26ae61;
	background: #26ae61;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
	color: #b8b8b8;
	cursor: auto;
	box-shadow: none;
	background: #ddd;
}
</style>
