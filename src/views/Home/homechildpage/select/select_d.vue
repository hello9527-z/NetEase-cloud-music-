<template>
  <div class="selectd">
    <scroll class="scrollcontent" ref="scroll" >
      <div>
        <home-swiper :banners="banners" @swiperload="swiperload"/>
        <tem-content :sheetlist="sheetlist" copy='热门歌单' @imageLoad1="imageLoad1"></tem-content>
        <tem-music :sheetlist="musiclist" copy='热门歌曲' @imageLoad2="imageLoad2"></tem-music>
        <tem-mv :sheetlist="mvlist" copy='热门mv' @imageLoad="imageLoad"></tem-mv>
        <tem-br :sheetlist="broadcastlist" copy='独家放送' @imageLoad3="imageLoad3"></tem-br>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getHomeSwiper,getMvList,getSheetList,getMusicList,getBroadcastList } from "../../../../network/hswiper";
import HomeSwiper from "../../homeswiper/homeswiper";
import Scroll from "../../../../components/better-scroll/bscroll";
import TemContent from "../../../../components/content/temcontent";
import TemMv from "../../../../components/content/temmv";
import TemBr from "../../../../components/content/tembr";
import TemMusic from "../../../../components/content/temmusic";

export default {
  name: "select_d",
  components: {
    HomeSwiper,
    Scroll,
    TemContent,
    TemMv,
    TemBr,
    TemMusic
  },
  data() {
    return {
      banners: [],
      mvlist:[],
      sheetlist:[],
      musiclist:[],
      broadcastlist:[]
    };
  },
  created() {
    this.getHomeSwiper();
    this.getMvList();
    this.getSheetList();
    this.getMusicList();
    this.getBroadcastList();
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
      // console.log('shoudao')
    },
    imageLoad1(){
      this.$refs.scroll.refresh()
      // console.log('shoudao1')
    },
    imageLoad2(){
      this.$refs.scroll.refresh()
      // console.log('shoudao2')
    },
    imageLoad3(){
      this.$refs.scroll.refresh()
      // console.log('shoudao3')
    },
    swiperload(){
      this.$refs.scroll.refresh()
      // console.log('swiperload')
    },
    getHomeSwiper() {
      getHomeSwiper().then((response) => {
        // console.log(response)
        this.banners = response.banners; // 保存数据
      });
    },
    getMvList() {
      getMvList().then((response) => {
        // console.log(response.result); // this.result = response.data
        this.mvlist = response.result; // 保存数据
      });
    },
    getSheetList() {
      getSheetList().then((response) => {
        // console.log(response); // this.result = response.data
        this.sheetlist = response.result // 保存数据
      });
    },
    getMusicList() {
      getMusicList().then((response) => {
        // console.log(response); // this.result = response.data
        this.musiclist = response.result; // 保存数据
      });
    },
    getBroadcastList() {
      getBroadcastList().then((response) => {
        // console.log(response); // this.result = response.data
        this.broadcastlist = response.result; // 保存数据
      });
    },
  },
};
</script>

<style>
.selectd {
  width: 100%;
  height: calc(100% - 50px);
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
}
.scrollcontent {
  height: 100%;
  overflow: hidden;
  position: relative;
}
@keyframes shutter-in-top {
  0%{
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100%{
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}

</style>
