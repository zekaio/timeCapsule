<template>
    <div class="questionCapsule-submit">
        <div  class="questionFrame">
          <div class="question">{{question}}</div>
        </div>
        <div class="now-reply">
        <p>你的回答:</p>
        <textarea class="content" value="在此输入内容" v-model="content"/>
        </div>
        <div class="btn" @click="submit" v-show="isShow">
          <img :src="submitBtn" />
        </div>
        <div class="star" v-show="isShow">
          <img :src="star" />
        </div>
    </div>
</template>
<script>

import questionFrame from '../assets/questionFrame.png'
import submitBtn from '../assets/submit-btn.png'
import star from '../assets/star.png'

import { submitReply } from '../API/apis'

const url = require('../assets/questionFrame.png')

export default {
  name: 'questionCapsule_submit',
  data: function () {
    return {
      question: window.sessionStorage.getItem('latest_capsule_question'),
      content: '',
      questionFrame: questionFrame,
      submitBtn: submitBtn,
      star: star,
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
    async submit () {
      let capsuleId = window.sessionStorage.getItem('latest_capsule_id')
      window.sessionStorage.setItem('latest_capsule_new_answer', this.content)
      let res = await submitReply(capsuleId, this.content)
      if (res) {
        this.$router.push({
          path: '/questionCapsule/replyCompare'
        })
      }
    }
  }
}
</script>
<style scoped>
.questionCapsule-submit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.questionFrame {
  background-image: url('../assets/questionFrame.png');
  background-size: 100%;
  display: flex;
  align-items: center;
  width: 78vw;
  height: 28vw;
  margin-top: 22vw;
}
.question {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.2vw;
  color:#666666;
  /* position: absolute;
  top: 19vh;
  left: 28vw; */
  width: 50vw;
  margin-bottom: 1vw;
  margin-left: 18vw;
}
.now-reply {
  margin-top: 6vh;
}
.now-reply p {
  font-family: 'MicrosoftYaHeiUI';
  font-size:4.6vw;
  color:#a8bee3;
}
.now-reply .content {
    border-radius:2vw;
    border: 0.5vw solid #a8bee3;
    background-color: transparent;
    width: 70vw;
    height: 17.8vw;
    color:#666666;
    outline:none;
}
.btn img {
  width: 45vw;
  margin-top: 8vh;
  z-index: 100;
}
.star img {
  width: 72vw;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
