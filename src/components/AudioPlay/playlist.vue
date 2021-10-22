<template>
  <div class="playlistTem">
    <div class="playlistTital">
      <h1>播放列表</h1>
      <p>{{allmusic}}收音乐</p>
    </div>
    <div class="playlistCenter">
      <li class="playlistCenter-Template" v-for="item in songplaylist" :key="item.index"
      :class="{ playcolor: musicid == item.id }"
      >
        <div class="playlistCenter-left">
          <h2>{{item.name}}</h2>
          <p><span  v-for="k in item.ar" :key="k.index">{{k.name}} </span></p>
        </div>
        <div class="playlistCenter-icon">
          <i class="iconfont icon-bofang"
            v-if="isplay == 1 || musicid != item.id"
            @click="chnageplay(item.id)"></i>
          <i class="iconfont icon-zhengzaibofang"
            v-if="isplay == 2 && musicid == item.id"
            @click="changeplay1"
            ></i>
        </div>
        <div class="playlistCenter-right">{{formatSongTime(item.dt)}}</div>
        <div class='playlistCenter-icon'><i class="iconfont icon-xiala"></i></div>
      </li>
    </div>
  </div>
</template>

<script>
import {getSong} from "../../network/hswiper"
export default {
  name:'PlayList',
  data(){
    return{
      songplaylist:[],
    }
  },
  watch:{
    playlist(){
      this.getSong()
    }
  },
  computed:{
    playlist(){
      return this.$store.state.playlist
    },
    isplay() {
      return this.$store.state.playButton;
    },
    musicid() {
      return this.$store.state.musicid;
    },
    allmusic(){
      return this.songplaylist.length
    }
  },
  methods:{
    getSong(){
      this.songplaylist=[]
      this.playlist.forEach(ids => {
        getSong(ids).then((response)=>{
          // console.log(response)
          this.songplaylist.push(response.songs[0])
        })
      });
    },
    chnageplay(id) {
      this.$store.commit("changeplayButton", 1);
      this.$store.commit("changeMusicId", id);
      this.$store.commit("changeplayButton", 2);
    },
    changeplay1() {
      this.$store.commit("changeplayButton", 1);
    },
    formatSongTime(duration) {
      duration = duration / 1000;
      const m = (Math.floor(duration / 60) + "").padStart(2, "0");
      const s = (Math.floor(duration % 60) + "").padStart(2, "0");
      return `${m}:${s}`;
    },
  }
}
</script>

<style>
.playlistTem{
  margin: 10px;
  text-align: left;
}
.playlistTital h1{
  font-size: 25px;
}
.playlistTital p{
  font-size: 12px;
}
.playlistCenter{
  margin-top: 20px;
}
.playlistCenter li{
  width: 100%;
  height: 60px;
}
.playlistCenter li:hover{
  background-color: rgb(252, 236, 206);
}
.playlistCenter-left{
  width: 60%;
  float: left;
}
.playlistCenter-left h2{
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.playlistCenter-left p{
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #8c8c8c ;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.playlistCenter-Template:hover .playlistCenter-icon i{
  display: block;
}
.playlistCenter-icon{
  float: left;
  width: 10%;
  height: 60px;
  line-height: 60px;
}
.playlistCenter-icon i{
  float: left;
  display: none;
}
.playlistCenter-right{
  float: left;
  width: 20%;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.playcolor {
  color: #40E0D0 !important;
}
</style>
