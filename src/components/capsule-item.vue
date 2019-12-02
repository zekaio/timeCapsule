<template>
    <div class="capsuleItem" @click="goToSubmit()">
        <img :src="capsule" />
        <div class="content">{{question}}</div>
    </div>
</template>
<script>

import capsule from '../assets/capsule.png'

export default {
  name: 'capsuleItem',
  props: {
    question: String,
    answer: String,
    id: Number
  },
  data: function () {
    return {
      capsule: capsule
    }
  },
  methods: {
    goToSubmit () {
      window.sessionStorage.setItem('latest_capsule_id', this.id)
      window.sessionStorage.setItem('latest_capsule_question', this.question)
      window.sessionStorage.setItem('latest_capsule_answer', this.answer)
      this.$router.push({
        path: '/questionCapsule/submit'
      })
    }
  }
}
</script>
<style scoped>
.capsuleItem {
  position: relative;
  margin-bottom: 4vw;
}
img {
    width: 75vw;
}
.content {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3vw;
  color:#666666;
  width: 60vw;
  position: absolute;
  left: 15vw;
  top: 5vw;
}
</style>
