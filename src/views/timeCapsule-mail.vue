<template>
  <div class="timeCapsuleMail">
    <div class="container">
      <div class="content">
        {{ content }}
        <br />
        <div
          style="margin-top:28px; display:inline-block"
          v-for="(pic, index) in pics"
          :key="index"
        >
          <el-image
            style="width: 100px; height: 100px; margin-top:28px; margin-left: 12px "
            fit="contain"
            :src="staticPrefix + 'picture/' + pic"
            :preview-src-list="[staticPrefix + 'picture/' + pic]"
          >
          </el-image>
        </div>
        <br />
        <Audio
          style="margin-top:28px;"
          ref="myAudioOne"
          :myAudioUrl="staticPrefix + 'mp3/' + voice"
          v-if="Boolean(voice)"
        ></Audio>
      </div>

      <img :src="logo" class="logo" />
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

import {
  getTimecapsuleMail,
  getSelfTimecapsuleMail,
  getQRcodeTimecapsuleMail,
  getStrangerTimecapsuleMail
} from '../API/apis'
import Audio from '../components/audio'

import { Message } from 'element-ui'
export default {
  name: 'timeCapsule_mail',
  components: {
    Audio
  },
  data() {
    return {
      staticPrefix: 'https://hemc.100steps.net/2020/timecapsule-resources/',
      content: '',
      pics: [],
      offset: 0,
      voice: '',
      getMoreBtn: getMoreBtn,
      backBtn: backBtn,
      logo: logo
    }
  },
  async mounted() {
    this.offset = 0
    let mail
    switch (this.$route.query.type) {
      case 'self':
        mail = await getSelfTimecapsuleMail(this.offset)
        break
      case 'code':
        mail = await getTimecapsuleMail(this.$route.query.code)
        break
      case 'qrcode':
        mail = await getQRcodeTimecapsuleMail(this.offset)
        break
      case 'stranger':
        mail = await getStrangerTimecapsuleMail()
        break
      default:
        Message({
          message: '参数错误，请刷新重试',
          type: 'error'
        })
    }
    if (mail) {
      console.log(mail)
      this.content = mail.content
      this.pics = mail.pic
      this.voice = mail.voice
    }
  },
  methods: {
    async getMore() {
      let mail
      switch (this.$route.query.type) {
        case 'self':
          this.offset++
          mail = await getSelfTimecapsuleMail(this.offset)
          break
        case 'code':
          this.$router.push({ path: '/timeCapsule/getMail' })
          return
        case 'qrcode':
          this.offset++
          mail = await getQRcodeTimecapsuleMail(this.offset)
          break
        case 'stranger':
          mail = await getStrangerTimecapsuleMail()
          break
      }

      if (mail) {
        console.log(mail)
        this.content = mail.content
        this.pics = mail.pic
        this.voice = mail.voice
      }
    },
    back() {
      this.$router.push({ path: '/home-participant' })
    }
  },
  watch: {
    dialogVisible: function() {
      const self = this

      self.$refs.myAudioOne.init()

      self.$refs.myAudioOne.audioEnded()
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
  font-size: 3.5vw;
  color: #666666;
  border-radius: 2vw;
  box-shadow: 4px 4px 1px rgb(173, 173, 173, 0.3);
  position: relative;
}
.content,
.video {
  width: 72vw;
  height: 45vh;
  margin-top: 4vh;
  overflow: scroll;
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
