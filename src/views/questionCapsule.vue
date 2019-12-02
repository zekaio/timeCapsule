<template>
    <div class="questionCapsule">
        <div class="tip-player">欢迎来到问题胶囊：）<br/>{{tip_player}}</div>
        <div class="questionCapsuleGroup">
            <capsuleItem v-for="(capsule,key,index) in capsules" :key='index' :id=capsule.id :question=capsule.question :answer=capsule.answer></capsuleItem>
        </div>
        <div class="btn" @click="back">
          <img :src="backBtn" />
        </div>
    </div>
</template>
<script>

import capsuleItem from '@/components/capsule-item.vue'
import backBtn from '../assets/back-btn.png'

export default {
  name: 'timeCapsule',
  components: {
    capsuleItem
  },
  data: function () {
    return {
      tip_player: '选择下方的一个胶囊，回答半年前的你曾思考过的问题，来看看半年里自己的改变吧~',
      capsules: [],
      backBtn: backBtn
    }
  },
  mounted () {
    this.capsules = JSON.parse(window.sessionStorage.getItem('capsules'))
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
.questionCapsule {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tip-player {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.8vw;
  color:#666666;
  width: 84vw;
  margin-top: 12vw;
  line-height: 1.8;
}
.questionCapsuleGroup {
  width: 80vw;
  margin-top: 15vw;
  height: 45vh;
  overflow-y: scroll;
}
.btn img {
  width: 45vw;
  margin-top: 8vh;
}
</style>
