
<template>
  <div class="audio-wrapper">
    <audio ref="audio">
      <source :src="myAudioUrl" type="audio/mp3" />
    </audio>
    <div class="audio-left">
      <img
        ref="audioPlayer"
        v-if="myPlayTemp"
        @click="myPlay()"
        :src="audioBtn"
      />
      <img
        ref="audioPlayer"
        v-if="!myPlayTemp"
        @click="myPlay()"
        :src="audioBtn"
      />
    </div>
    <div class="audio-right">
        <span class="audio-length-total" ref="duration">{{duration}}</span>
    </div>
  </div>
</template>

<script>

import audioBtn from '../assets/audio.png'

export default {
  name: 'myAudio',
  props: ['myAudioUrl'],
  data () {
    return {
      audio: '',
      myPlayTemp: true,
      audioBtn: audioBtn,
      duration: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.audio = this.$refs.audio
      this.audio.load()
      this.audio.pause()
      this.updateProgress()
    },
    // 点击播放/暂停图片时，控制音乐的播放与暂停
    myPlay () {
      if (this.audio.paused) {
        // 开始播放当前点击的音频
        this.audio.play()
        this.myPlayTemp = false
      } else {
        this.audio.pause()
        this.myPlayTemp = true
      }
      this.updateProgress()
    },
    // 更新进度条与当前播放时间
    updateProgress () {
      // 总共时长
      let audioElement = new Audio(this.myAudioUrl)
      let self = this
      audioElement.addEventListener('loadedmetadata', function () {
        let minute = parseInt(audioElement.duration / 60)
        let second = parseInt(audioElement.duration % 60)
        let duration2 = minute + ':' + second
        self.duration = self.formatTime(duration2)
      })
    },
    // 播放结束时
    audioEnded () {
      this.myPlayTemp = true
    },
    // 播放时间换算
    transTime (value) {
      let time = ''
      let h = parseInt(value / 3600)
      value %= 3600
      let m = parseInt(value / 60)
      let s = parseInt(value % 60)
      if (h > 0) {
        time = this.formatTime(h + ':' + m + ':' + s)
      } else {
        time = this.formatTime(m + ':' + s)
      }
      return time
    },
    //  * 格式化时间显示，补零对齐
    //  * eg：2:4  -->  02:04
    formatTime (value) {
      let time = ''
      let s = value.split(':')
      let i = 0
      for (; i < s.length - 1; i++) {
        time += s[i].length === 1 ? '0' + s[i] : s[i]
        time += ':'
      }
      time += s[i].length === 1 ? '0' + s[i] : s[i]
      return time
    }
  },
  watch: {
    audio: function (params) {
      let self = this
      self.audio.addEventListener(
        'timeupdate',
        function () {
          // console.log('开始');
          self.updateProgress()
        },
        false
      )
      self.audio.addEventListener(
        'ended',
        function () {
          // console.log('结束');
          self.audioEnded()
        },
        false
      )
    }
  }
}
</script>

<style scoped>
.audio-wrapper {
  background-color: #ffffff;
  margin: 3vw auto;
  width: 100%;
  height: 10vw;
}

.audio-left {
  float: left;
  text-align: center;
  width: 15%;
  height: 100%;
}

.audio-left img {
  width: 7vw;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  cursor: pointer;
}

.audio-right {
  float: left;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
}

.audio-length-total {
  font-family: 'MicrosoftYaHeiUI';
  font-size:3.8vw;
  color:#a8bfe2;
  width: 60vw;
}

</style>
