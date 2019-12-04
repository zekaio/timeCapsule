<template>
    <div class="timeCapsule_getMail">
        <div class="title">
            <img :src="title" />
        </div>
        <div class="input">
            <p>取信码：</p>
            <input class="mailCode" v-model="code">
        </div>
        <div class="btn" @click="getMail" v-show="isShow">
          <img :src="getMailBtn" />
        </div>
        <div class="Tboy" @click="chat()" v-show="isShow">
          <img :src="Tboy" />
        </div>
        <div class="arrow" v-show="!isClick&&isShow">
          <img :src="arrow" />
        </div>
        <div class="chatFrame" v-show="isClick&&isShow" >
          <!-- <img :src="chatFrame" /> -->
           <div class="chatContent">梯仔悄悄告诉你~<br/>通过时光胶囊，共有{{total_count}}人收到了来自朋友的信件，你也是其中之一。明年也要继续参加哦~</div>
        </div>
        <div class="tip" v-show="!isClick&&isShow">戳我!戳我!</div>
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
      total_count: 2213,
      bgImg: {
        backgroundImage: 'url(' + url + ')'
      },
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
    width: 67vw;
    padding-left: 1vw;
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
  background-size: 100%;
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 41vw;
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
  width: 44vw;
  /* position:absolute;
  right: 24vw;
  bottom: 28vw; */
}
</style>
