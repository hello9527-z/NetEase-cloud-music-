<template>
  <div class="audioplay" v-bind:class="{ fullwidth: isfullwidth }">
    <div class="audioplay-left" v-if="isfullwidth == true">
      <img :src="img" alt="" />
      <p>{{ musicname }}</p>
      <p v-for="item in singer" :key="item.index">{{ item.name }}</p>
    </div>
    <div class="audioplay-center" :class="{ centerleft: !isfullwidth }">
      <div class="iconfont-type" :class="{ centerleftchange: !isfullwidth }">
        <i
          class="iconfont icon-shunxubofang"
          v-if="PlaybackType == 1"
          @click="changeType"
        ></i>
        <i
          class="iconfont icon-danqubofang"
          v-if="PlaybackType == 2"
          @click="changeType"
        ></i>
        <i
          class="iconfont icon-suijibofang"
          v-if="PlaybackType == 3"
          @click="changeType"
        ></i>
        <i class="iconfont icon-ai10" @click="LastSong"></i>
        <i
          class="iconfont icon-bofang"
          @click="playbutton2"
          v-if="isplay == 1"
        ></i>
        <i
          class="iconfont icon-zhengzaibofang"
          @click="playbutton1"
          v-if="isplay == 2"
        ></i>
        <i class="iconfont icon-ai09" @click="NextSong"></i>
      </div>
      <div class="progress-type" v-if="isfullwidth == true">
        <p>{{ audiocurrenttime }}/{{ duration }}</p>
        <el-slider
          v-model="progress"
          :show-tooltip="false"
          @change="change"
          class="el-slider-progress"
        ></el-slider>
      </div>
    </div>
    <div class="audioplay-right" v-if="isfullwidth == true">
      <div class="audioplay-right-iconfont">
        <i class="iconfont icon-shengyin_shiti"></i>
      </div>
      <el-slider
        v-model="voice"
        class="voice-slider"
        @change="changevoice"
      ></el-slider>
      <div class="audioplay-right-iconfont">
        <i class="iconfont icon-yinleliebiao" @click="isshowplaylist"></i>
      </div>
    </div>
    <div class="switcharrow" @click="allwidth">
      <i class="el-icon-d-arrow-right" v-if="isfullwidth == false"></i>
      <i class="el-icon-d-arrow-left" v-if="isfullwidth == true"></i>
    </div>
    <div class="playlist" v-show="isshow">
      <play-list></play-list>
    </div>
    <audio :src="musicUrl" controls ref="audio" autoplay></audio>
  </div>
</template>

<script>
import { getSong } from "../../network/hswiper";
import PlayList from "./playlist";
export default {
  name: "AudioPlay",
  components: {
    PlayList,
  },
  data() {
    return {
      isshow: false,
      isfullwidth: false,
      progress: 0,
      voice: 100,
      PlaybackType: 1,
      audiopaly: "",
      audiocurrenttime: "00:00",
      duration: "00:00",
      img: "",
      musicname: "",
      singer: "",
      endplay: true,
    };
  },
  watch: {
    isplay() {
      if (this.isplay == 1) {
        this.audiopaly = this.$refs.audio;
        this.playbutton1();
      } else {
        this.audiopaly = this.$refs.audio;
        this.playbutton2();
      }
      immediate: true;
    },
    ids() {
      this.getSong(this.ids);
    },
  },
  created() {},
  mounted() {
    this.setAudioInterval();
  },
  computed: {
    isplay() {
      return this.$store.state.playButton;
    },
    musicUrl() {
      if (this.$store.state.musicid) {
        return `http://music.163.com/song/media/outer/url?id=${this.$store.state.musicid}.mp3`;
      }
    },
    ids() {
      return this.$store.state.musicid;
    },
    playlist() {
      return this.$store.state.playlist;
    },
  },
  methods: {
    getSong(ids) {
      getSong(ids).then((response) => {
        // console.log(response);
        this.img = response.songs[0].al.picUrl;
        this.musicname = response.songs[0].name;
        this.singer = response.songs[0].ar;
      });
    },
    allwidth() {
      // console.log(111)
      this.isfullwidth = !this.isfullwidth;
    },
    changeType() {
      this.PlaybackType++;
      if (this.PlaybackType > 3) {
        this.PlaybackType = 1;
      }
    },
    //点击暂停
    playbutton1() {
      this.audiopaly = this.$refs.audio;
      this.$store.commit("changeplayButton", 1);
      this.audiopaly.pause();
    },
    //点击播放
    playbutton2() {
      this.audiopaly = this.$refs.audio;
      if (this.$store.state.musicid != 0) {
        this.$store.commit("changeplayButton", 2);
        this.getAudioCurrentTime();
        this.setAudioInterval();
        this.audiopaly.play();
      }
    },
    //定时检测
    setAudioInterval() {
      // console.log(this.progress)
      const AudioInterval = setInterval(() => {
        this.getAudioCurrentTime();
        this.audiopaly = this.$refs.audio;
        // if (this.isplay == 1) {
        //   this.playbutton1();
        // } else {
        //   this.playbutton2();
        // }
        if (this.audiopaly.ended) {
          clearInterval(AudioInterval);
          this.playbutton2();
          let currentId2 = this.playlist.indexOf(this.ids);
          let currentIdIndex2 = currentId2 + 1;
          if (currentIdIndex2 > this.playlist - 1) {
            currentIdIndex2 = 0;
          }
          if (this.PlaybackType == 1) {
            this.$store.commit("changeMusicId", this.playlist[currentIdIndex2]);
          }
          if (this.PlaybackType == 2) {
            this.$store.commit("changeMusicId", this.playlist[currentIdIndex2]);
          }
          if (this.PlaybackType == 3) {
            let randomnumber = Math.floor(Math.random() * this.playlist.length);
            this.$store.commit("changeMusicId", this.playlist[randomnumber]);
          }
        }
      }, 500);
    },
    getAudioCurrentTime() {
      this.audiopaly = this.$refs.audio;
      this.duration = FormatTime(this.audiopaly.duration);
      this.audiocurrenttime = FormatTime(this.audiopaly.currentTime);
      this.progress = parseInt(
        (this.audiopaly.currentTime * 100) / this.audiopaly.duration
      );
    },
    change(val) {
      this.audiopaly = this.$refs.audio;
      this.audiocurrenttime = FormatTime((this.audiopaly.duration * val) / 100);
      this.audiopaly.currentTime = parseInt(
        (this.audiopaly.duration * val) / 100
      );
    },
    changevoice(val) {
      this.audiopaly = this.$refs.audio;
      this.audiopaly.volume = val / 100;
    },
    isshowplaylist() {
      this.isshow = !this.isshow;
    },
    LastSong() {
      let currentId1 = this.playlist.indexOf(this.ids);
      let currentIdIndex1 = currentId1 - 1;
      // console.log(currentIdIndex1)
      if (currentIdIndex1 < 0) {
        currentIdIndex1 = this.playlist.length - 1;
      }
      this.$store.commit("changeplayButton", 1);
      this.playbutton2();
      if (this.PlaybackType == 1) {
        this.$store.commit("changeMusicId", this.playlist[currentIdIndex1]);
      }
      if (this.PlaybackType == 2) {
        this.$store.commit("changeMusicId", this.playlist[currentIdIndex1]);
      }
      if (this.PlaybackType == 3) {
        let randomnumber = Math.floor(Math.random() * this.playlist.length);
        this.$store.commit("changeMusicId", this.playlist[randomnumber]);
      }
    },
    NextSong() {
      let currentId = this.playlist.indexOf(this.ids);
      let currentIdIndex = currentId + 1;
      console.log(currentIdIndex);
      if (currentIdIndex > this.playlist - 1) {
        currentIdIndex = 0;
      }
      this.$store.commit("changeplayButton", 1);
      this.playbutton2();
      if (this.PlaybackType == 1) {
        this.$store.commit("changeMusicId", this.playlist[currentIdIndex]);
      }
      if (this.PlaybackType == 2) {
        this.$store.commit("changeMusicId", this.playlist[currentIdIndex]);
      }
      if (this.PlaybackType == 3) {
        let randomnumber = Math.floor(Math.random() * this.playlist.length);
        this.$store.commit("changeMusicId", this.playlist[randomnumber]);
      }
    },
  },
};
function FormatTime(time) {
  if (time) {
    time = parseInt(time);
    let mimute = Math.floor(time / 60);
    let second = time - mimute * 60;
    return ("0" + mimute).slice(-2) + ":" + ("0" + second).slice(-2);
  } else {
    return "00:00";
  }
}
</script>

<style>
.audioplay {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 14%;
  height: 60px;
  z-index: 999;
  box-shadow: 0px -1px 2px #8c8c8c;
  background-color: #708090;
}
.audioplay-left {
  float: left;
  width: 16.5%;
  height: 60px;
}
.audioplay-left p {
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.audioplay-left img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  float: left;
  margin: 5px 20px 0px 20px;
}
.audioplay-center {
  float: left;
  width: 67%;
  height: 60px;
}
.iconfont-type {
  width: 20%;
  float: left;
  height: 60px;
  text-align: right;
  line-height: 60px;
}
.iconfont-type i {
  font-size: 20px;
  margin: 0px 5px;
}
.progress-type {
  width: 80%;
  height: 60px;
  float: left;
  text-align: center;
  line-height: 60px;
}
.progress-type p {
  width: 15%;
  height: 60px;
  float: left;
}
.el-slider-progress {
  float: left;
  width: 75%;
  margin-top: 11px;
}
.audioplay-right {
  float: left;
  height: 60px;
  width: 14.5%;
  height: 60px;
}
.audioplay-right-iconfont {
  width: 20%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  float: left;
}
.audioplay-right-iconfont i {
  font-size: 25px;
}
.voice-slider {
  width: 55%;
  margin-top: 11px;
  float: left;
  margin-right: 10px !important;
}
.switcharrow {
  float: right;
  width: 30px;
  height: 60px;
}
.switcharrow i {
  float: right;
  margin-top: 15px;
  font-size: 30px;
  color: #8c8c8c;
}
.fullwidth {
  width: 100%;
  animation: scale-up-hor-left 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.audioplay-center i:hover {
  color: red;
}
.centerleft {
  width: 80%;
}
.centerleftchange {
  width: 100%;
}
.playlist {
  position: absolute;
  right: 0px;
  bottom: 60px;
  background-color: #F0FFFF;
  width: 400px;
  height: 610px;
  animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes scale-in-ver-bottom {
  0% {
    transform: scaleY(0);
    transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 100%;
    opacity: 1;
  }
}

audio {
  position: absolute;
  left: 0px;
  bottom: 200px;
  /* display: none; */
}
@keyframes scale-up-hor-left {
  0% {
    transform: scaleX(0.4);
    transform-origin: 0% 0%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
}
</style>
