<template>
  <v-container class="main-container">
    <v-form ref="form" @submit.prevent="submitForm">
      <v-card class="box-container">
        <v-card-title class="heading">Sign In</v-card-title>

        <v-text-field v-model="email" label="Email Address" outlined :rules="emailRules" required></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" outlined :rules="passwordRules" required></v-text-field>

        <v-btn class="signIn" type="submit" color="success">Sign In</v-btn>

        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLogin />
      </v-card>
    </v-form>

    <div class="footer">
      <p>Don't have an account? <router-link to="/signup"> Create one now</router-link></p>
    </div>
  </v-container>
</template>

<script>
import SocialLogin from '@/components/SocialLogin'
import axios from 'axios'
import store from '@/store/store'

export default {
  name: 'login',
  components: {
    SocialLogin
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
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
          let result = await axios.post('http://localhost:8080/api/auth/signin', {
            email: this.email,
            password: this.password
          })
          if (result.status == 200 && result.data) {
            store.commit('setLoginUser', result.data)
            this.$router.push({ name: 'Home' })
            console.log('Login successful', result.data)
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
  background-color: #0069ff !important;
}
</style>
<style scoped>
.loginsuccess-container {
  padding: 20px !important;
  margin: 0 auto !important;
  width: 80% !important;
  box-shadow: beige !important;
  border: 1px solid #ccc !important;
  border-radius: 5px !important;
  background: #fff !important;
  word-break: break-all !important;
}
.main-container {
  margin-top: 10% !important;
}
.box-container {
  padding: 20px !important;
  margin: 0 auto !important;
  width: 400px !important;
  box-shadow: beige !important;
  border: 1px solid #ccc !important;
  border-radius: 5px !important;
  background: #fff !important;
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
.form-fields,
.form-fields button {
  width: 100% !important;
  margin: 5px 0 !important;
  line-height: 28px !important;
  border-radius: 5px !important;
}
.form-fields input {
  width: 100% !important;
  line-height: 40px !important;
  border-radius: 5px !important;
  border-radius: 5px !important;
  border: 1px solid #f1f1f1 !important;
  background: #fff !important;
  padding: 0 5px !important;
  font-size: 14px !important;
}
.signIn {
  padding: 10px 32px !important;
  color: white !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  background: #15cd72 !important;
  text-align: center !important;
  cursor: pointer !important;
  height: auto !important;
}
.createaccount {
  padding: 15px !important;
  background-color: #0069ff !important;
  border: none !important;
  color: #fff !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  height: 48px !important;
  line-height: 48px !important;
  padding: 0 32px !important;
  text-align: center !important;
  border-radius: 5px !important;
}
.center {
  text-align: center !important;
}
.login-choice span {
  color: #5b6987 !important;
  display: -ms-grid !important;
  display: grid !important;
  font-size: 16px !important;
  width: 100% !important;
  line-height: 40px !important;
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  text-align: center !important;
  -ms-grid-columns: minmax(20px, 1fr) auto minmax(20px, 1fr) !important;
  grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr) !important;
  grid-gap: 19px !important;
}
.login-choice span:after,
.login-choice span:before {
  content: '' !important;
  border-top: 1px solid #e5e8ed !important;
}
.footer,
.footer a {
  text-align: center !important;
  color: #fff !important;
}
</style>
