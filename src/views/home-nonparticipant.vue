<template>
    <div class="nonparticipant">
        <div class="text">
        同学你好呀~<br/>这里是百步梯毕业季之时光胶囊系列活动。收到朋友来信的你一定是个幸运儿~，快在下方填<br/>写取信码，听听Ta的问候吧！
        </div>
        <div class="input">
          <p>取信码：</p>
          <input class="mailCode" v-model="code">
        </div>
        <div class="btn" @click="getMail" v-show="isShow">
          <img :src="goToMail" />
        </div>
        <div class="star" v-show="isShow">
          <img :src="star" />
        </div>
    </div>
</template>
<script>

import goToMail from '../assets/goToMail-btn.png'
import star from '../assets/star.png'

import { getTimecapsuleMail } from '../API/apis'

export default {
  name: 'home_nonparticipant',
  data () {
    return {
      code: '',
      goToMail: goToMail,
      star: star,
      docmHeight: document.documentElement.clientHeight || document.body.clientHeight,
      showHeight: document.documentElement.clientHeight || document.body.clientHeight,
      isShow: true
    }
  },
  watch: {
    // 监听显示高度
    showHeight: function () {
      if (this.docmHeight > this.showHeight) {
      // 隐藏
        this.isShow = false
      } else {
      // 显示
        this.isShow = true
      }
    }
  },
  mounted () {
    // 监听事件
    window.onresize = () => {
      return (() => {
        this.showHeight = document.documentElement.clientHeight || document.body.clientHeight
      })()
    }
  },
  methods: {
    async getMail () {
      let res = await getTimecapsuleMail(this.code)
      if (res) {
        let type = JSON.parse(window.sessionStorage.getItem('mailContent')).type
        switch (type) {
          case 'text':
            this.$router.push({
              path: '/timeCapsule/mail'
            })
            break
          case 'audio':
            this.$router.push({
              path: '/timeCapsule/audio'
            })
            break
        }
      }
    }
  }
}
</script>
<style scoped>
.nonparticipant {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
    white-space: pre-wrap;
    width: 80%;
    margin: 10%;
}
.text {
    width: 77vw;
    margin-top: 16vh;
    line-height: 4vh;
    font-family: 'MicrosoftYaHeiUI';
    font-size:3.7vw;
    color:#666666;
}
.input {
  margin-top: 4vh;
}
.input p {
  font-family: 'MicrosoftYaHeiUI';
  font-size:5vw;
  color:#a8bee3;
}
.mailCode {
  border-radius:2vw;
  border: 0.5vw solid #a8bee3;
  background-color: transparent;
  width: 67vw;
  padding-left: 1vw;
  height: 8.9vw;
  color:#666666;
  outline:none;
}
.btn img {
  width: 45vw;
  margin-top: 22vw;
  z-index: 100;
}
.star img {
  width: 72vw;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
