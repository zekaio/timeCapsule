<template>
    <div class="questionCapsule-submit">
        <img :src="questionFrame" class="questionFrame"/>
        <div class="question">{{question}}</div>
        <div class="now-reply">
        <p>你的回答:</p>
        <textarea class="content" value="在此输入内容" v-model="content"/>
        </div>
        <div class="btn" @click="submit">
          <img :src="submitBtn" />
        </div>
        <div class="star">
          <img :src="star" />
        </div>
    </div>
</template>
<script>

import questionFrame from '../assets/questionFrame.png'
import submitBtn from '../assets/submit-btn.png'
import star from '../assets/star.png'

import { submitReply } from '../API/apis'

export default {
  name: 'questionCapsule_submit',
  data: function () {
    return {
      question: window.sessionStorage.getItem('latest_capsule_question'),
      content: '',
      questionFrame: questionFrame,
      submitBtn: submitBtn,
      star: star
    }
  },
  methods: {
    submit () {
      let capsuleId = window.sessionStorage.getItem('latest_capsule_id')
      window.sessionStorage.setItem('latest_capsule_new_answer', this.content)
      submitReply(capsuleId, this.content)
      this.$router.push({
        path: '/questionCapsule/replyCompare'
      })
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
  width: 78vw;
  margin-top: 22vw;
}
.question {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.2vw;
  color:#666666;
  position: absolute;
  top: 19vh;
  left: 28vw;
  width: 50vw;
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
    height: 10vh;
    color:#666666;
}
.btn img {
  width: 45vw;
  margin-top: 8vh;
}
.star img {
  width: 72vw;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
