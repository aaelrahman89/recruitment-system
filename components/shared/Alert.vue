<template>
<div>
<!-- The Modal -->
<div id="myModal" class="modal" v-if="showModal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" @click="showModal = false">&times;</span>
    <p>
      <i class="far fa-check-circle fa-6x text-green" v-if="alertType === 'success'"></i>
      <i class="far fa-check-circle fa-6x text-danger" v-if="alertType === 'danger'"></i>
      </p>
    <h2 class="text-capitalize">{{title}}</h2>
    <p>{{desc}}</p>
  </div>

</div>
</div>
</template>

<script>
export default {
  name: 'Alert',
  data(){
    return {
      showModal: true
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    alertType: {
      type: String,
      required: true
    },
    desc: {
      type: String
    }
  }

}
</script>

<style lang="scss" scoped>

$small: 768px;

/* The Modal (background) */
.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 99999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 32%; /* Could be more or less, depending on screen size */
  text-align: center;
  @media screen and (max-width: $small){
    width: 90%;
  }
}

/* The Close Button */
.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 0px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

html:lang(ar){
  .close {
  right: auto;
  left: 10px;
}
}
.text-green{
  color: #a5dc86;
}
h2{
  color: #595959;
}
p{
  color: #545454;
}

</style>
