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
  padding: 20px;
  margin: 0 auto;
  width: 80%;
  box-shadow: beige;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  word-break: break-all;
}
.main-container {
  margin-top: 10%;
}
.box-container {
  padding: 20px;
  margin: 0 auto;
  width: 400px;
  box-shadow: beige;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
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
.form-fields,
.form-fields button {
  width: 100%;
  margin: 5px 0;
  line-height: 28px;
  border-radius: 5px;
}
.form-fields input {
  width: 100%;
  line-height: 40px;
  border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  background: #fff;
  padding: 0 5px;
  font-size: 14px;
}
.signIn {
  padding: 10px 32px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  background: #15cd72;
  text-align: center;
  cursor: pointer;
  height: auto;
  -webkit-appearance: none;
}
.createaccount {
  padding: 15px;
  background-color: #0069ff;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  height: 48px;
  line-height: 48px;
  padding: 0 32px;
  text-align: center;
  border-radius: 5px;
}
.center {
  text-align: center;
}
.login-choice span {
  color: #5b6987;
  display: -ms-grid;
  display: grid;
  font-size: 16px;
  width: 100%;
  line-height: 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  -ms-grid-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
  grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
  grid-gap: 19px;
}
.login-choice span:after,
.login-choice span:before {
  content: '';
  border-top: 1px solid #e5e8ed;
}
.footer,
.footer a {
  text-align: center;
  color: #fff;
}
</style>
