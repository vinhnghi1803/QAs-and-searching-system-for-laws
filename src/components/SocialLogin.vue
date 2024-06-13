<template>
  <div class="login-form">
    <!-- <h2>Sign in with Google</h2>
    <button @click="handleGoogleLogin">Sign in with Google</button> -->
    <div class="signup-buttons">
      <a href="#" class="google-signup" @click.prevent="handleGoogleLogin">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <title>Google</title>
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#4285F4"
              d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
            ></path>
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
            ></path>
            <path
              fill="#FBBC05"
              d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
            ></path>
            <path
              fill="#EA4335"
              d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
            ></path>
          </g>
        </svg>
        Google
      </a>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
import axios from 'axios'
export default {
  methods: {
    async handleGoogleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('openid')
      provider.addScope('profile')
      provider.addScope('email')
      provider.addScope('https://www.googleapis.com/auth/user.addresses.read')
      provider.addScope('https://www.googleapis.com/auth/user.birthday.read')
      provider.addScope('https://www.googleapis.com/auth/user.gender.read')
      provider.addScope('https://www.googleapis.com/auth/user.phonenumbers.read')
      try {
        const result = await firebase.auth().signInWithPopup(provider)
        const user = result.user
        console.log(result)
        console.log(result.user.getIdToken())
        console.log(await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true))
        // console.log(result.credential)
        const token = {
          providerId: result.credential.providerId,
          accessToken: result.credential.accessToken,
          idToken: result.credential.idToken,
          idTokenFireBase: await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        }

        // Store the refresh token in session storage
        sessionStorage.setItem('GoogleToken', JSON.stringify(token))
        console.log(user.email)
        console.log(typeof user.email)
        const response = await axios.get(`${process.env.beURL}/api/auth/existsByEmail`, {
          params: {
            email: user.email
          }
        })

        //here
        if (response.data) {
          try {
            // Verify the token after successful Google login
            const tokenVerificationResult = await this.verifyToken(token.idTokenFireBase)
            // Handle token verification result if needed
            console.log(tokenVerificationResult)

            this.$store.commit('setLoginUser', tokenVerificationResult)
            this.$router.push('/home')
          } catch (error) {
            // Handle token verification error
            console.error('Error verifying token:', error)
          }
        } else this.$router.push({ name: 'SignUp', query: { google_login: true } })
      } catch (error) {
        console.error('Error logging in:', error)
      }
    },
    async verifyToken(firebaseToken) {
      try {
        const response = await axios.post(`${process.env.beURL}/api/auth/verifyToken`, firebaseToken)
        // Handle successful response
        console.log(response.data) // Print response data to console
        return response.data // Return response data if needed
      } catch (error) {
        // Handle error
        console.error('Error:', error)
        throw error // Rethrow error for handling in the calling function
      }
    }
  }
}
</script>

<style scoped>
.signup-buttons {
  margin-top: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
}
.google-signup {
  color: #031b4e;
  background: #f2f8ff;
  border: 1px solid rgba(0, 105, 255, 0.2);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 20px;
  display: inline-block;
  margin-top: 0;
  width: 47.5%;
  padding: 15px;
  text-align: center;
  position: inherit;
}
.signup-buttons a {
  vertical-align: middle;
  text-decoration: none;
}
.signup-buttons svg {
  left: 18px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
