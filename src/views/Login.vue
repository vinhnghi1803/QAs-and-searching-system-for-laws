<template>
  <v-container class="main-container" fluid>
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
        <v-form ref="form" @submit.prevent="submitForm">
          <v-card rounded="xl" elevation="10" class="pa-7 mx-auto" max-width="500">
            <v-card-title class="justify-center text-h4 mb-4 font-weight-black blue--text text--lighten-1">Sign In</v-card-title>

            <v-text-field v-model="email" label="Email Address" outlined :rules="emailRules" required rounded color="grey darken-2">
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-email </v-icon>
              </template>
            </v-text-field>
            <v-text-field v-model="password" label="Password" type="password" outlined :rules="passwordRules" required color="grey darken-2" rounded>
              <template v-slot:prepend>
                <v-icon style="top: -5px" size="32"> mdi-lock </v-icon>
              </template>
            </v-text-field>

            <v-btn class="mb-5 px-7 font-weight-bold text-button" large type="submit" rounded color="success">Sign In</v-btn>

            <div><span class="font-italic">or Sign In with</span></div>
            <SocialLogin />
          </v-card>
        </v-form>
      </v-col>
    </v-row>

    <div class="pt-5">
      <p>Don't have an account? <router-link class="text-decoration-none font-weight-bold" to="/signup"> Create one now</router-link></p>
    </div>
  </v-container>
</template>

<script>
import SocialLogin from '@/components/SocialLogin'
import axios from 'axios'
import store from '@/store/store'
import Bus from '../assets/animation/Bus.json'
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  components: {
    SocialLogin
  },
  data() {
    return {
      email: '',
      password: '',
      Bus: JSON.stringify(Bus)
    }
  },
  computed: {
    ...mapGetters({
      isAdmin: 'isAdmin'
    }),
    emailRules() {
      return [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid']
    },
    passwordRules() {
      return [(v) => !!v || 'Password is required', (v) => (v && v.length >= 6) || 'Password must be at least 6 characters']
    }
  },
  methods: {
    async submitForm() {
      if (await this.$refs.form.validate()) {
        try {
          let result = await axios.post(`${process.env.VUE_APP_BE_URL}/api/auth/signin`, {
            email: this.email,
            password: this.password
          })
          if (result.status == 200 && result.data) {
            store.commit('setLoginUser', result.data)
            this.$router.push(this.isAdmin ? { name: 'ManageUsers' } : { name: 'Home' })
          } else {
            console.error('Login failed', result)
          }
        } catch (error) {
          console.error('Login failed', error)
        }
      }
    }
  },
  mounted() {
    document.getElementById('app').classList.add('background-class')
    document.body.classList.add('background-class')
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
