<template>
    <div class="timeCapsuleMail">
        <div class="container">
            <div class="tip">{{tip}}</div>
            <Audio ref="myAudioOne" :myAudioUrl="url"></Audio>
        </div>
        <div class="btn more" @click="getMore">
          <img :src="getMoreBtn" />
        </div>
        <div class="btn back" @click="back">
          <img :src="backBtn" />
        </div>
        <div class="star">
          <img :src="star" />
        </div>
    </div>
</template>
<script>

import getMoreBtn from '../assets/getMore-btn.png'
import backBtn from '../assets/back-btn.png'
import star from '../assets/star.png'

import Audio from '../components/audio'

export default {
  name: 'timeCapsule_audio',
  components: {
    Audio
  },
  watch: {

    'dialogVisible': function (val) {
      const self = this

      self.$refs.myAudioOne.init()

      self.$refs.myAudioOne.audioEnded()
    }

  },
  data () {
    return {
      url: '',
      getMoreBtn: getMoreBtn,
      backBtn: backBtn,
      star: star,
      tip: '快来听听ta的问候吧~'
    }
  },
  mounted () {
    this.url = JSON.parse(window.sessionStorage.getItem('mailContent')).content
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
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45vw;
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.8vw;
  color:#666666;
  position: relative;
}
.btn img {
  width: 45vw;
  z-index: 100;
}
.more {
  margin-top: 15vh;
}
.back {
  margin-top: 3.5vh;
}
.star img {
  width: 72vw;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
