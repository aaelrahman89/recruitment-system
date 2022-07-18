<template>
 <div class="login-section">
    <div class="account-pages">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5 mt-5">
                    <div class="card shadow-sm mt-5">
    <client-only>
      <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onLogin">
 <div class="card-body p-4">
                            <div class="text-center w-75 m-auto">
                                <div class="auth-logo">
                                    <img src="~assets/images/logo-login.png" class="logo">
                                </div>
                                <p class="text-muted mb-4 mt-3 d-none d-sm-block">Enter your email & password to access Recruitment System</p>
                            </div>

                              <ValidationProvider v-slot="{ errors }" rules="required|email">
                                 <div class="form-group mb-3">
                                    <label>Email</label>
                                    <input type="text" placeholder="Enter Your Email" class="form-control" v-model="myObject.email" />
                                    <div class="text-danger error-msg">{{ errors[0] }}</div>
                                </div>
                              </ValidationProvider>
                              <ValidationProvider v-slot="{ errors }" rules="required">
                               <div class="form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter your password" class="form-control" v-model="myObject.password" />
                                    <div class="text-danger error-msg">{{ errors[0] }}</div>
                               </div>
                              </ValidationProvider>

                               <!-- <div class="form-group mb-3">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" id="checkbox-signin" checked="checked" class="custom-control-input" /> <label for="checkbox-signin" class="custom-control-label"><span>Remember me</span></label>
                                    </div>
                                </div> -->
                                <div class="form-group mb-0 text-center">
                                 <button type="submit" class="btn main-btn btn-block" :disabled="invalid">Log In</button>
                                  </div>

                        </div>
     </form>
      </ValidationObserver>
    </client-only>

                    </div>
                    <!-- <div class="row mt-3">
                        <div class="col-12 text-center">
                            <p><a href="/account/forgot-password" class="text-muted ml-1">Forgot your password?</a></p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <!-- <footer class="footer footer-alt">{{currentDate}} ©Recruitment System</footer> -->
</div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: 'noFooter',
  data(){
    return{
      myObject: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    currentDate(){
      return new Date().getFullYear()
    },
     ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    })
  },
  methods: {
     ...mapActions({
        login: 'auth/login'
      }),
    onLogin(){
      this.login(this.myObject).then(res => this.$router.push('/')).catch(err => this.$swal('Error!', 'Invalid Email or Password', 'error'));
    }
  },
   mounted(){
    if(!!localStorage.getItem('token')){
      this.$router.push('/')
    }
  }

}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';

.login-section{
   background-color: #fcfcfc;
}

  .card{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e7eaed;
    border-radius: .25rem;
  }
  .text-muted {
    color: #98a6ad !important;
    font-size: 13px;
  }
  label{
    display: inline-block;
    margin-bottom: .5rem;
    color: #6c757d;
    font-size: .9rem;
  }
  .form-control{
    font-size: .8rem;
    &::placeholder{
      color: #b2b2b2;
    }
  }
  .custom-control-label{
    font-weight: 400;
    font-size: 13px;
    color: #6c757d;
    span{
      position: relative;
      top: 4px;
    }
  }
  .footer-alt {
    left: 0!important;
    text-align: center;
    background-color: transparent;
  }
  .footer {
    bottom: 0;
    padding: 19px 15px 20px;
    position: absolute;
    right: 0;
    color: #98a6ad;
    left: 240px;
    font-size: 14px;
  }
  .custom-control-input:checked ~ .custom-control-label::before{
    border-color: $mainColor;
    background-color: $mainColor;
  }
</style>
