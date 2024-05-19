<template>
  <v-container>
    <v-form ref="signupData" @submit.prevent="submitForm">
      <v-card class="box-container">
        <v-card-title class="heading">{{ title }}</v-card-title>

        <v-text-field v-model="signupData.fullName" label="Full name" outlined :rules="fullNameRules" required></v-text-field>
        <v-text-field v-model="signupData.email" label="Email" type="email" outlined :rules="emailRules" required></v-text-field>
        <v-text-field v-model="signupData.password" label="Password" type="password" outlined :rules="passwordRules" required></v-text-field>

        <v-text-field v-model="signupData.phone" label="Phone" outlined></v-text-field>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="signupData.birthdays" label="Birthday" outlined readonly v-bind="attrs" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="signupData.birthdays" @input="menu = false" no-title scrollable></v-date-picker>
        </v-menu>
        <v-text-field v-model="signupData.addresses" label="Address" outlined></v-text-field>
        <v-select v-model="signupData.genders" :items="gender" label="Gender" outlined></v-select>
        <v-btn class="createaccount" @click="submitForm" depressed color="primary">{{ buttonText }}</v-btn>
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
import axios from 'axios'
import store from '@/store/store'

export default {
  name: 'signup',
  data() {
    return {
      gender: ['Male', 'Female', 'Other'],
      signupData: {
        fullName: '',
        email: '',
        password: '',
        phone: '',
        birthdays: null,
        genders: 'Male',
        addresses: ''
      },
      googleLogin: false,
      menu: false
    }
  },
  computed: {
    title() {
      return this.$route.query.google_login ? 'Update account information' : 'Sign Up'
    },
    buttonText() {
      return this.$route.query.google_login ? 'Create Account' : 'Create your account'
    },
    fullNameRules() {
      return [(v) => !!v || 'Full name is required', (v) => (v && v.length >= 3) || 'Full name must be at least 3 characters']
    },
    emailRules() {
      return [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid']
    },
    passwordRules() {
      return [(v) => !!v || 'Password is required', (v) => (v && v.length >= 6) || 'Password must be at least 6 characters']
    }
  },
  methods: {
    async submitForm() {
      // Validate the form data
      const valid = await this.$refs.signupData.validate()
      let RegistrationSource = this.$route.query.google_login ? 'Google' : 'Local'

      if (valid) {
        try {
          let result = await axios.post('http://localhost:8080/api/auth/signup', {
            fullname: this.signupData.fullName,
            email: this.signupData.email,
            password: this.signupData.password,
            phone: this.signupData.phone,
            birthdays: this.signupData.birthdays,
            genders: this.signupData.genders,
            addresses: this.signupData.addresses,
            registrationSources: RegistrationSource
          })
          if (result.status == 200 && result.data) {
            store.commit('setLoginUser', result.data)
            this.$router.push({ name: 'Home' })
            console.log('Login successful', result.data)
          }
          // else {
          //   console.error('Login failed', result)
          // }
        } catch (error) {
          console.error('Login failed', error)
        }
      }
      // else {
      //   // If the form is not valid, show an error message or take appropriate action
      //   console.error('Form validation failed. Please check your input.')
      // }
    }
  },
  created() {
    // console.log(this.$route.query.google_login)
    this.googleLogin = this.$route.query.google_login
  },
  async mounted() {
    document.getElementById('app').classList.add('background-class')
    document.body.classList.add('background-class')
    this.googleLogin = this.$route.query.google_login

    let GoogleToken = sessionStorage.getItem('GoogleToken')
    if (GoogleToken) {
      let accessToken = JSON.parse(GoogleToken).accessToken
      console.log(accessToken)
      console.log(this.googleLogin)

      await getGoogleUserInfo(this.signupData, this.googleLogin, accessToken)
    }
  },
  beforeDestroy() {
    document.getElementById('app').classList.remove('background-class')
    document.body.classList.remove('background-class')
  }
}
</script>
<style>
.background-class {
  background-color: #0069ff !important;
}
</style>
<style scoped>
.container {
  padding-top: 20px !important;
  max-width: 100%;
}
.v-card {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 14px !important;
}

.box-container {
  padding: 40px !important;
  margin: 0 auto !important;
  max-width: 400px !important;
}

.heading {
  text-align: center !important;
  font-weight: 300 !important;
  color: #444 !important;
  margin: 0 auto 45px !important;
  font-size: 35px !important;
  line-height: 38px !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

.center {
  text-align: center !important;
}
</style>
