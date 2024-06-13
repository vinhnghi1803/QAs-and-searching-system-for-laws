<template>
  <v-container fluid>
    <lottie-player
      :src="Bus"
      style="width: 200px; height: 160px; margin: auto"
      background="transparent"
      speed="1"
      direction="1"
      mode="normal"
      autoplay
      loop
    ></lottie-player>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-form ref="signupData" @submit.prevent="submitForm">
          <v-card rounded="xl" elevation="10" class="pa-7" max-width="500">
            <v-card-title class="justify-center text-h4 mb-4 font-weight-black blue--text text--lighten-1">{{ title }}</v-card-title>

            <v-text-field v-model="signupData.fullName" label="Full name" outlined :rules="fullNameRules" required rounded color="grey darken-2">
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-account-circle </v-icon>
              </template>
            </v-text-field>

            <v-text-field v-model="signupData.email" label="Email" type="email" outlined :rules="emailRules" required rounded color="grey darken-2">
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-email </v-icon>
              </template>
            </v-text-field>

            <v-text-field
              v-model="signupData.password"
              label="Password"
              type="password"
              outlined
              :rules="passwordRules"
              required
              rounded
              color="grey darken-2"
            >
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-lock </v-icon>
              </template>
            </v-text-field>

            <v-text-field v-model="signupData.phone" label="Phone" outlined rounded color="grey darken-2">
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-phone </v-icon>
              </template>
            </v-text-field>

            <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="signupData.birthdays"
                  label="Birthday"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  rounded
                  color="grey darken-2"
                >
                  <template v-slot:prepend>
                    <v-icon style="top: -5px" size="32"> mdi-calendar </v-icon>
                  </template>
                </v-text-field>
              </template>
              <v-date-picker v-model="signupData.birthdays" @input="menu = false" no-title scrollable></v-date-picker>
            </v-menu>

            <v-text-field v-model="signupData.addresses" label="Address" outlined rounded color="grey darken-2">
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-map-marker </v-icon>
              </template>
            </v-text-field>
            <v-select v-model="signupData.genders" :items="gender" label="Gender" outlined rounded color="grey darken-2">
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-gender-male-female </v-icon>
              </template>
            </v-select>
            <v-btn @click="submitForm" class="mb-5 font-weight-bold text-button white--text" large rounded color="blue lighten-1">{{
              buttonText
            }}</v-btn>
            <div>
              <p class="center mb-0" v-if="!googleLogin">
                By signing up you agree to the
                <a class="text-decoration-none font-weight-bold" href="#">Terms of Service</a>.
              </p>
              <p class="center mb-0" v-else>Please fill this to create an account with our website.</p>
            </div>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getGoogleUserInfo } from '@/config/googleAuth'
import axios from 'axios'
import store from '@/store/store'
import Bus from '../assets/animation/Bus.json'

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
      menu: false,
      Bus: JSON.stringify(Bus)
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
          let result = await axios.post(`${process.env.beURL}/api/auth/signup`, {
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
  background-color: #e3f2fd !important;
}
</style>
<style scoped></style>
