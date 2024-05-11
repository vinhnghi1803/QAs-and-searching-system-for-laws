<template>
  <v-container>
    <v-form ref="signupData">
      <v-card class="box-container">
        <v-card-title class="heading">{{ title }}</v-card-title>
        <v-text-field v-model="signupData.fullName" label="Full name" outlined></v-text-field>
        <v-text-field v-model="signupData.email" label="Email" type="email" outlined></v-text-field>
        <v-text-field v-model="signupData.password" label="Password" type="password" outlined></v-text-field>
        <v-text-field v-model="signupData.phone" label="Phone" outlined></v-text-field>
        <v-text-field v-model="signupData.birthdays" label="Birthdays" outlined></v-text-field>
        <v-text-field v-model="signupData.address" label="Address" outlined></v-text-field>
        <select v-model="signupData.gender" style="margin-bottom: 20px">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <v-btn class="createaccount" @click="submitForm" color="primary">{{ buttonText }}</v-btn>
        <div>
          <p class="center" v-if="!googleLogin">
            By signing up you agree to the
            <a href="#">Terms of Service</a>.
          </p>
          <p class="center" v-else>Please fill this to create an account with our website.</p>
        </div>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { getGoogleUserInfo } from '@/config/googleAuth'
export default {
  name: 'signup',
  data() {
    return {
      signupData: {
        fullName: '',
        email: '',
        password: '',
        phone: '',
        birthdays: '',
        gender: 'Male',
        address: ''
      },
      googleLogin: false,
      genders: ['Male', 'Female', 'Other']
    }
  },
  computed: {
    title() {
      return this.$route.query.google_login ? 'Update account information' : 'Sign Up'
    },
    buttonText() {
      return this.$route.query.google_login ? 'Create Account' : 'Create your account'
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
    }
  },
  created() {
    // console.log(this.$route.query.google_login)
    this.googleLogin = this.$route.query.google_login
  },
  async mounted() {
    document.body.classList.add('login-body')

    this.googleLogin = this.$route.query.google_login

    let GoogleToken = sessionStorage.getItem('GoogleToken')
    let accessToken = JSON.parse(GoogleToken).accessToken
    console.log(accessToken)
    console.log(this.googleLogin)

    await getGoogleUserInfo(this.signupData, this.googleLogin, accessToken)
  },
  beforeDestroy() {
    document.body.classList.remove('login-body')
  }
}
</script>

<style scoped>
.login-body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background: #0069ff;
}

.box-container {
  padding: 40px;
  margin: 0 auto;
  max-width: 400px;
}

.heading {
  text-align: center;
  font-weight: 300;
  color: #444;
  margin: 0 auto 45px;
  font-size: 35px;
  line-height: 38px;
  text-transform: none;
  letter-spacing: 0;
}

.center {
  text-align: center;
}
</style>
