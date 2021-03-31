<template>
  <div class="participant">
    <div class="title">
      <img :src="title" />
    </div>
    <div class="btn" @click="goToTimeCapsule">
      <img :src="toTaBtn" />
    </div>
    <div class="btn" @click="goToSelfTimeCapsule">
      <img :src="selfBtn" />
    </div>
    <div class="btn" @click="goToStrangerTimeCapsule">
      <img :src="strangerBtn" />
    </div>
    <!-- <div class="btn" @click="goToQuestionCapsule">
          <img :src="questionCapsuleBtn" />
        </div> -->
    <div class="btn" @click="goToGetMail">
      <img :src="mailCodeBtn" />
    </div>
    <div class="bg">
      <img :src="clock" />
    </div>
  </div>
</template>
<script>
import clock from '../assets/background.png'
import title from '../assets/title.png'
import timeCapsuleBtn from '../assets/timeCapsule-btn.png'
import questionCapsuleBtn from '../assets/questionCapsule-btn.png'
import mailCodeBtn from '../assets/mailCode.png'

import toTaBtn from '../assets/tota.png'
import selfBtn from '../assets/self.png'
import strangerBtn from '../assets/stranger.png'

// import { getQuestionCapsules, getMails } from '../API/apis'

export default {
  name: 'home_participant',
  data: function() {
    return {
      title: title,
      timeCapsuleBtn: timeCapsuleBtn,
      questionCapsuleBtn: questionCapsuleBtn,
      mailCodeBtn: mailCodeBtn,
      clock: clock,
      toTaBtn,
      selfBtn,
      strangerBtn
    }
  },
  methods: {
    goToTimeCapsule() {
      this.$router.push({
        path: '/timeCapsule/getMail'
      })
    },
    goToSelfTimeCapsule() {
      this.$router.push({
        path: '/timeCapsule/mail',
        query: {
          type: 'self'
        }
      })
    },
    goToStrangerTimeCapsule() {
      this.$router.push({
        path: '/timeCapsule/mail',
        query: {
          type: 'stranger'
        }
      })
    },
    // async goToQuestionCapsule() {
    //   let res = await getQuestionCapsules()
    //   if (res) {
    //     this.$router.push({
    //       path: '/questionCapsule'
    //     })
    //   } else {
    //     this.$router.push({
    //       path: '/questionCapsule/nonparticipant'
    //     })
    //   }
    // },
    async goToGetMail() {
      this.$router.push({
        path: '/timeCapsule/mail',
        query: {
          type: 'qrcode'
        }
      })
      // let res = await getMails()
      // if (res) {
      //   this.$router.push({
      //     path: '/mails'
      //   })
      // } else {
      //   this.$router.push({
      //     path: '/mails/nonparticipant'
      //   })
      // }
    }
  }
}
</script>
<style scoped>
.participant {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title img {
  margin-top: 21.36vw;
  margin-bottom: 12.46vw;
  width: 81vw;
}
.btn img {
  width: 50vw;
}
.bg img {
  width: 43vw;
  height: 83.66vw;
  position: absolute;
  right: 0;
  bottom: 3.56vw;
}
.btn {
  margin-bottom: 8.9vw;
}
</style>
