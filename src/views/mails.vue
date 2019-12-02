<template>
    <div class="mails">
      <div class="container">
        <div class="sum">您总共收到了{{mailNum}}封来信，请查收~</div>
      </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(mail,key,index) in mails" :key="index">
            <mailItem :content="mail.content" :index="key+1" :num="mailNum"/>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="container">
          <div class="btn" @click="back">
            <img :src="backBtn" />
          </div>
        </div>
    </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import backBtn from '../assets/back-btn.png'

import mailItem from '@/components/mail-item.vue'

export default {
  name: 'mails',
  components: {
    swiper,
    swiperSlide,
    mailItem
  },
  data: function () {
    return {
      mailNum: 0,
      backBtn: backBtn,
      mails: [],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    this.mails = JSON.parse(window.sessionStorage.getItem('mails'))
    this.mailNum = this.mails.length
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sum {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.7vw;
  color:#666666;
  width: 84vw;
  margin-top: 8vh;
}
.tip {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.8vw;
  color:#666666;
  width: 84vw;
  margin-top: 12vw;
  line-height: 1.8;
}
.btn img {
  width: 45vw;
  margin-top: 8vh;
}
.swiper-button-prev {
  opacity: 0.35;
  left: 8vw;
  background-size: 70% 70%;
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%2342a5f5'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next {
  opacity: 0.35;
  right: 8vw;
  background-size: 70% 70%;
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%2342a5f5'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled {
  opacity: 0;
}
</style>
