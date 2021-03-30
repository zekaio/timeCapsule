<template>
  <div class="mailItem">
    <div class="index">{{ index }} / {{ num }}</div>
    <div class="content">
      <div class="text" v-show="isShow" v-html="content">
        {{ content }}
      </div>
      <div class="audio" v-show="!isShow">
        <div class="tip">{{ tip }}</div>
        <Audio ref="myAudioOne" :myAudioUrl="content"></Audio>
      </div>
    </div>
    <img :src="logo" class="logo" />
  </div>
</template>
<script>
import logo from '../assets/logo.png'

import Audio from '../components/audio'

export default {
  name: 'mailItem',
  props: {
    index: Number,
    num: Number,
    content: String,
    type: String,
  },
  components: {
    Audio,
  },
  watch: {
    dialogVisible: function () {
      const self = this

      self.$refs.myAudioOne.init()

      self.$refs.myAudioOne.audioEnded()
    },
  },
  data: function () {
    return {
      logo: logo,
      isShow: true,
      tip: '快来听听ta的问候吧~',
    }
  },
  mounted() {
    switch (this.type) {
      case 'text':
        this.isShow = true
        break
      case 'audio':
        this.isShow = false
        break
    }
  },
}
</script>
<style scoped>
.mailItem {
  background: #ffffff;
  width: 85vw;
  height: 60vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  margin-bottom: 2vh;
  font-family: 'MicrosoftYaHeiUI';
  font-size: 3.3vw;
  color: #666666;
  border-radius: 2vw;
  box-shadow: 4px 4px 1px rgb(173, 173, 173, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.index {
  font-family: 'MicrosoftYaHeiUI';
  font-size: 4.5vw;
  color: #a8bee3;
  position: absolute;
  right: 5vw;
  top: 4vw;
}
.content {
  width: 67vw;
  height: 40vh;
  margin-top: 11vh;
  line-height: 4vh;
  overflow: scroll;
}
.text {
  word-wrap: break-word;
}
.audio {
  width: 62vw;
}
.logo {
  width: 20vw;
  position: absolute;
  bottom: 5.5vw;
}
</style>
