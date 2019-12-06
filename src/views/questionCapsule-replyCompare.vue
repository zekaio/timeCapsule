<template>
    <div class="questionCapsule_replyCompare">
        <img :src="questionFrame" class="questionFrame"/>
        <div class="question">{{question}}</div>
        <img :src="compareFrame" class="compareFrame"/>
        <div class="former-reply">{{former_reply}}</div>
        <div class="now-reply">{{now_reply}}</div>
        <div class="btn" @click="back">
          <img :src="okBtn" />
        </div>
    </div>
</template>
<script>

import okBtn from '../assets/ok-btn.png'
import questionFrame from '../assets/question_Frame.png'
import compareFrame from '../assets/compareFrame.png'

export default {
  name: 'questionCapsule_replyCompare',
  data: function () {
    return {
      question: window.sessionStorage.getItem('latest_capsule_question'),
      former_reply: window.sessionStorage.getItem('latest_capsule_answer'),
      now_reply: window.sessionStorage.getItem('latest_capsule_new_answer'),
      okBtn: okBtn,
      questionFrame: questionFrame,
      compareFrame: compareFrame
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/questionCapsule'
      })
    }
  }
}
</script>
<style scoped>
.questionCapsule_replyCompare {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn img {
  width: 45vw;
  margin-top: 14.24vw;
}
.questionFrame {
  width: 80vw;
  margin-top: 21vw;
}
.compareFrame {
  width: 80vw;
  margin-top: 8vw;
}
.question {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.5vw;
  color:#666666;
  position: absolute;
  top: 32.04vw;
  left: 27vw;
  width: 55vw;
}
.former-reply {
  width: 55vw;
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.5vw;
  color:#666666;
  position: absolute;
  top: 70.31vw;
  left: 27vw;
}
.now-reply {
  width: 55vw;
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.5vw;
  color:#666666;
  position: absolute;
  top: 99.68vw;
  left: 27vw;
}
</style>
