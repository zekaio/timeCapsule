<template>
    <div class="nonparticipant">
        <div class="text">
        同学你好呀~<br/>这里是百步梯毕业季之时光胶囊系列活动。收到朋友来信的你一定是个幸运儿~，快在下方填<br/>写取信码，听听Ta的问候吧！
        </div>
        <div class="input">
          <p>取信码：</p>
          <input class="mailCode" v-model="code">
        </div>
        <div class="btn" @click="getMail">
          <img :src="goToMail" />
        </div>
        <div class="star">
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
      star: star
    }
  },
  methods: {
    async getMail () {
      let res = await getTimecapsuleMail(this.code)
      if (res) {
        this.$router.push({
          path: '/timeCapsule/mail'
        })
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
  width: 68vw;
  height: 5vh;
  color:#666666;
  outline:none;
}
.btn img {
  width: 45vw;
  margin-top: 22vw;
}
.star img {
  width: 72vw;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
