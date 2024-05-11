<template>
  <div v-if="!animationCompleted">
    <lottie-player
      :src="RedirectAnimation"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px; margin: auto"
      direction="1"
      mode="normal"
      autoplay
      @complete="handleAnimationComplete"
    >
    </lottie-player>
    <!-- <div v-if="animationCompleted">
      </div> -->
    <div>You are already logged in!</div>
  </div>
</template>

<script>
import '@lottiefiles/lottie-player'
import RedirectAnimation from '../assets/animation/RedirectAnimation.json'

export default {
  name: 'animate',
  // components: {
  //   // LottieAnimation
  // },
  data() {
    return {
      RedirectAnimation: JSON.stringify(RedirectAnimation),
      animationCompleted: false
    }
  },
  methods: {
    handleAnimationComplete() {
      this.$router.push('/home')
      this.animationCompleted = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
