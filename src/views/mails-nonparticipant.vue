<template>
    <div class="questionCapsule-nonparticipant">
        <div class="tip">{{tip}}</div>
        <div class="btn" @click="back">
          <img :src="backBtn" />
        </div>
        <div class="star">
          <img :src="star" />
        </div>
    </div>
</template>
<script>

import backBtn from '../assets/back-btn.png'
import star from '../assets/star.png'

export default {
  name: 'questionCapsule_nonparticipant',
  data: function () {
    return {
      backBtn: backBtn,
      star: star,
      tip: '抱歉，你还没有可取信件哦，期待你再次参加百步梯的活动~'
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/home-participant'
      })
    }
  }
}
</script>
<style scoped>
.questionCapsule-nonparticipant {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn img {
  width: 45vw;
  margin-top: 35vw;
  z-index: 100;
}
.tip {
  font-family: 'MicrosoftYaHeiUI';
  font-size:5vw;
  color:#666666;
  width: 60vw;
  line-height: 8vw;
  margin-top: 25vh;
  text-align: center;
}
.star img {
  width: 72vw;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
