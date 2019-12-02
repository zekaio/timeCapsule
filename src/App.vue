<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

import { isParticipant } from './API/apis'

export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  mounted () {
    // checkLogin()
    // if (window.sessionStorage.getItem('isLogin') === 'undefined') { window.sessionStorage.setItem('isLogin', checkLogin()) }
    if (isParticipant()) {
      this.$router.push({
        path: '/home-participant'
      })
    } else {
      this.$router.push({
        path: '/home-nonparticipant'
      })
    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  background: #e4eafa;
  height: 100vh;
  width: 100vw;
}
</style>
