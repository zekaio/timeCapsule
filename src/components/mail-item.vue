<template>
    <div class="mailItem">
        <div class="index">{{index}} / {{num}}</div>
        <div class="content">
            {{content}}
        </div>
        <img :src="logo" class="logo"/>
        </div>
</template>
<script>

import logo from '../assets/logo.png'

export default {
  name: 'mailItem',
  props: {
    index: Number,
    num: Number,
    content: String
  },
  data: function () {
    return {
      logo: logo
    }
  }
}
</script>
<style scoped>
.mailItem {
  background: #ffffff;
  width: 85vw;
  height: 60vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.3vw;
  color:#666666;
  border-radius: 2vw;
  box-shadow: 4px 4px 1px rgb(173, 173, 173,0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.index {
  font-family: 'MicrosoftYaHeiUI';
  font-size:4.5vw;
  color:#a8bee3;
  position: absolute;
  right: 5vw;
  top: 4vw;
}
.content {
  width: 67vw;
  margin-top: 11vh;
  line-height: 4vh;
}
.logo {
  width: 20vw;
  position: absolute;
  bottom: 5.5vw;
}
</style>
