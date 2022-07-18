<template>
<div class="main-section">

 <b-navbar toggleable="lg" type="dark">
   <nuxt-link :to="localePath('/')" class="navbar-brand d-block d-sm-none" exact><img src="~assets/images/logo.png"></nuxt-link>

    <i class="fas fa-bars fa-2x text-white cursor-pointer" v-b-toggle.sidebar-backdrop></i>

    <!-- sidbar start -->
          <b-sidebar
      id="sidebar-backdrop"

      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <nuxt-link :to="localePath('/')" class="navbar-brand" exact><img src="~assets/images/logo-login.png"></nuxt-link>

           <ul class="my-menu">
             <li class="d-block d-sm-none" v-if="userDetailsGlobal"> <nuxt-link :to="localePath(`/users/${userDetailsGlobal.id}`)"> <span class="badge bg-success text-white"><i class="fas fa-user-tie"></i> {{userDetailsGlobal.name}}</span></nuxt-link></li>
             <li class="text-uppercase nav-item"><nuxt-link :to="localePath('/')" exact><i class="fas fa-home"></i> HOME</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_requests')"><nuxt-link :to="localePath('/all-requests')"><i class="fab fa-buffer"></i> All Requests</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="candidatesPermissions"><nuxt-link :to="localePath('/candidates')"><i class="fas fa-star"></i> Candidates</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_candidates')"><nuxt-link :to="localePath('/all-candidates')"><i class="fas fa-star"></i> All Candidates</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_salary-groups')"><nuxt-link :to="localePath('/salarygroups')"><i class="fas fa-wallet"></i> Salary Groups</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_users')"><nuxt-link :to="localePath('/users')"><i class="fas fa-users"></i> Users</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_departments')"><nuxt-link :to="localePath('/departments')"><i class="fab fa-buffer"></i> Departments</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_employees')"><nuxt-link :to="localePath('/employees')"><i class="fab fa-black-tie"></i> Employees</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_logs')"><nuxt-link :to="localePath('/logs')"><i class="far fa-clone"></i> Logs</nuxt-link></li>
             <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_roles')"><nuxt-link :to="localePath('/roles')"><i class="fas fa-dice-five"></i> Roles</nuxt-link></li>
             <li class="d-block d-sm-none" @click="$bvToast.show('example-toast')"> <span class="badge bg-success text-white"><i class="far fa-bell text-white fa-2x"></i></span></li>
             <li @click="onLogOut" class="d-block d-sm-none cursor-pointer"><i class="fas fa-sign-out-alt"></i> Logout</li>
           </ul>

      </div>
    </b-sidebar>
    <!-- sidebar end -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

        <!-- <b-navbar-nav>
          <li class="text-uppercase nav-item"><nuxt-link :to="localePath('/')" exact>HOME</nuxt-link></li>
          <li class="text-uppercase nav-item"><nuxt-link :to="localePath('/candidate-evaluation')">Candidate Evaluation</nuxt-link></li>
          <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_roles')"><nuxt-link :to="localePath('/roles')">Roles</nuxt-link></li>
          <li class="text-uppercase nav-item"><nuxt-link :to="localePath('/salarygroups')">Salary Groups</nuxt-link></li>
          <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_users')"><nuxt-link :to="localePath('/users')">Users</nuxt-link></li>
          <li class="text-uppercase nav-item" v-if="userPermissionsGlobal && userPermissionsGlobal.includes('list_departments')"><nuxt-link :to="localePath('/departments')">Departments</nuxt-link></li>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav :class="$i18n.locale == 'ar'?'mr-auto':'ml-auto'" class="d-none d-sm-block">
     <li class="mt-2">
 <!-- Notification Start -->
<button type="button" class="btn btn-default position-relative" @click="$bvToast.show('example-toast')">
  <i class="far fa-bell text-white fa-2x"></i>
  <small class="badge badge-success notification-badge" v-if="notifications && notifications.counter > 0">{{notifications.counter}}</small>
</button>
    <b-toast id="example-toast" title="Notifications"> <!-- no-auto-hide -->
      <ul class="notification-list" v-if="notifications">
        <li v-if="notifications.notifications && notifications.notifications.length == 0" class="border-0 text-center"><h6><i class="far fa-bell-slash"></i> There Are no Notifications Now</h6></li>
        <li v-for="notification of notifications.notifications" :key="notification.id" @click="onClickNotification(notification)"><i class="fas fa-angle-right"></i> {{notification.message}}</li>
      <nuxt-link :to="localePath('/notifications')"><li class="view-all-notifications-btn">View All Notifications</li></nuxt-link>
      </ul>
    </b-toast>
 <!-- Notification End -->

          <b-dropdown>
    <template #button-content v-if="userDetailsGlobal">
      <i class="fas fa-user-tie"></i> {{userDetailsGlobal.name}}
    </template>
   <nuxt-link :to="localePath(`/users/${userDetailsGlobal.id}`)"> <div class="dropdown-item cursor-pointer border-bottom" v-if="userDetailsGlobal">  <i class="fas fa-user"></i> Profile</div> </nuxt-link>
   <div class="dropdown-item cursor-pointer" @click="onLogOut"><i class="fas fa-sign-out-alt"></i> Logout</div>
  </b-dropdown>
       </li>


 <!-- <li class="text-uppercase nav-item">
   <nuxt-link class="btn-no-underline" :to="localePath('/login')"><button type="button" class="btn btn-default text-white border">{{$t('navbar.signIn')}}</button></nuxt-link>
   <nuxt-link class="btn-no-underline" :to="localePath('/register')"><button type="button" class="btn main-btn text-white">{{$t('navbar.joinNow')}}</button></nuxt-link>
 </li>
   <li class="mt-2" v-if="$store.state.auth.isLoggedIn"><span class="text-white">Welcome Ahmed</span></li>
   <li class="mt-2" v-if="$store.state.auth.isLoggedIn"><span class="text-white" @click="logout">Logout</span></li> -->

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'NavBar',
       methods: {
  ...mapActions({
    logout: 'auth/logout',
    fetchNotifications: 'notifications/fetchNotifications',
    notificationsRead: 'notifications/notificationsRead'
  }),
  onLogOut(){
    localStorage.clear();
    this.$router.push('/login');
  },
  onClickNotification(notification){
    this.$router.push(`/recruitment-requests/${notification.model_id}`);
     this.notificationsRead(notification.id).then(res => {
       this.fetchNotifications(this.userDetailsGlobal.id);
     });
  }
  },
  created(){
    if(this.userDetailsGlobal){
      this.fetchNotifications(this.userDetailsGlobal.id);
    }
  },
  computed: {
    candidatesPermissions(){
      return this.userPermissionsGlobal && this.userPermissionsGlobal.includes('hr_evaluate_candidates') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('manager_evaluate_candidates') || this.userPermissionsGlobal && this.userPermissionsGlobal.includes('final_evaluation_candidates')
    },
    ...mapGetters({
      notifications: 'notifications/notifications'
    }),
  }
}
</script>


<style lang="scss" scoped>
@import 'assets/scss/variable';

$small: 768px;

.fa-bell{
  font-size: 25px;
}

.notification-badge{
  position: absolute !important;
    left: 0;
    padding: 5px !important;
    opacity: 1 !important;
}

.notification-list{
  li{
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    left: 0;
    &:hover{
      color: $mainColor;
      transition: all 0.5s ease-in-out;
      left: 5px;
    }
  }
}

/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  border-bottom: 1px solid $mainColor;
}

.view-all-notifications-btn{
  text-align: center;
    font-weight: bold;
    font-size: 16px;
    background-color: #26ae61;
    border-radius: 10px;
    border: 1px solid #d3d3d3;
    color: #fff;
    padding: 3px !important;
    &:hover{
      color: #fff !important;
      left: 0 !important;
      opacity: 0.9;
    }
}

.main-section{

   .logo{
     height: 50px;
   }

   a{
     color: #fff;
     &:hover{
       text-decoration: none;
     }
   }

}

.cart-icon{
  position: absolute;
  left: 60%;
}

::v-deep{


.btn-secondary{
   background-color: $mainColor !important;
     &:hover{
       background-color: $hoverColor !important;
     }
}

  .navbar-brand{
    border-bottom: none !important;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 30px;
  }

.nav-link{
  color: #fff !important;
}

.navbar-nav{
  li{
    padding: 0px 16px;
    a{
        &:hover{
    border-bottom: 1px solid #fff;
    transition: all 0.9s ease-in-out;
  }
    }
        a.btn-no-underline{
          border-bottom: none;
        &:hover{
    border-bottom: none;
    opacity: 0.8;
  }
    }
  }
}

.navbar-collapse {
  @media screen and (max-width: $small){
     background-color: rgba(29,26,26,0.95);
    border-radius: 5px;
    li{
      padding: 10px 16px;
    }
    li:lang(ar){
      text-align: right;
    }
  }
}

}

// hide menu bar
.navbar-dark .navbar-toggler{
  display: none;
}

html:lang(ar){

  .cart-icon{
  right: 60%;
  left: auto;
}

}

.my-menu{
  padding: 20px;
  a{
    color: #334e6f;
  }
  li{
    border-bottom: 1px solid #eaeaea;
    padding: 14px 0;
  }
}

</style>
