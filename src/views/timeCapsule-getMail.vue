<template>
    <div class="timeCapsule_getMail">
        <div class="title">
            <img :src="title" />
        </div>
        <div class="input">
            <p>取信码：</p>
            <input class="mailCode" v-model="code">
        </div>
        <div class="btn" @click="getMail">
          <img :src="getMailBtn" />
        </div>
        <div class="Tboy" @click="chat()">
          <img :src="Tboy" />
        </div>
        <div class="arrow" v-show="!isClick">
          <img :src="arrow" />
        </div>
        <div class="chatFrame" v-show="isClick" >
          <!-- <img :src="chatFrame" /> -->
           <div class="chatContent">梯仔悄悄告诉你~<br/>通过时光胶囊，共有{{total_count}}人收到了来<br/>自朋友的信件，你也是其中之一。<br/>明年也要继续参加哦~</div>
        </div>
        <div class="tip" v-show="!isClick">戳我!戳我!</div>
    </div>
</template>
<script>

import title from '../assets/title.png'
import getMailBtn from '../assets/getMail-btn.png'
import Tboy from '../assets/Tboy.png'
import chatFrame from '../assets/chatFrame.png'
import arrow from '../assets/arrow.png'

import { getTimecapsuleMail } from '../API/apis'

const url = require('../assets/chatFrame.png')

export default {
  name: 'timeCapsule_getMail',
  data () {
    return {
      code: '',
      title: title,
      getMailBtn: getMailBtn,
      Tboy: Tboy,
      chatFrame: chatFrame,
      arrow: arrow,
      isClick: false,
      total_count: '',
      bgImg: {
        backgroundImage: 'url(' + url + ')'
      }
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
    },
    chat () {
      this.isClick = !this.isClick
    }
  }
}
</script>
<style scoped>
.timeCapsule_getMail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title img {
  margin-top: 12vh;
  margin-bottom: 4vh;
  width: 81vw;
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
    outline:none;
}
.btn img {
  width: 45vw;
  margin-top: 10vh;
}
.Tboy img {
  width: 20vw;
  position: absolute;
  right: 0;
  bottom: 0;
}
.arrow img {
  width: 15vw;
  position: absolute;
  right: 25vw;
  bottom: 13vw;
}
.chatFrame img {
  width: 55vw;
}
.chatFrame {
  background-image: url('../assets/chatFrame.png');
  background-size: 102%;
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 42vw;
}
.tip {
  font-family: 'MicrosoftYaHeiUI';
  font-size:4.5vw;
  color:#9ebee3;
  position: absolute;
  bottom: 21vw;
}
.chatContent {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3vw;
  color:#666666;
  margin-top: 5vw;
  margin-left: 5vw;
  /* position:absolute;
  right: 24vw;
  bottom: 28vw; */
}
</style>
