<template>
    <div class="timeCapsuleMail">
        <div class="container">
            <div class="content" v-html="content">
              {{content}}
            </div>
            <img :src="logo" class="logo"/>
        </div>
        <div class="btn more" @click="getMore">
          <img :src="getMoreBtn" />
        </div>
        <div class="btn back" @click="back">
          <img :src="backBtn" />
        </div>
    </div>
</template>
<script>

import getMoreBtn from '../assets/getMore-btn.png'
import backBtn from '../assets/back-btn.png'
import logo from '../assets/logo.png'

export default {
  name: 'timeCapsule_mail',
  data () {
    return {
      content: '',
      url: '',
      getMoreBtn: getMoreBtn,
      backBtn: backBtn,
      logo: logo
    }
  },
  mounted () {
    this.content = JSON.parse(window.sessionStorage.getItem('mailContent')).content
  },
  methods: {
    getMore () {
      this.$router.push({ path: '/timeCapsule/getMail' })
    },
    back () {
      this.$router.push({ path: '/home-participant' })
    }
  }
}
</script>
<style scoped>
.timeCapsuleMail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 85vw;
  height: 59vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.5vw;
  color:#666666;
  border-radius: 2vw;
  box-shadow: 4px 4px 1px rgb(173, 173, 173,0.3);
  position: relative;
}
.content,.video {
  width: 72vw;
  margin-top: 4vh;
}
.logo {
  width: 20vw;
  position: absolute;
  left: 8vw;
  bottom: 5.5vw;
}
.btn img {
  width: 45vw;
}
.more {
  margin-top: 7vh;
}
.back {
  margin-top: 1.5vh;
}
</style>
