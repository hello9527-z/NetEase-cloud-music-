<template>
  <div class="newmusic" >
      <new-music-list @newmusicsel="newmusicsel">
        <music-nva slot="slot-a"></music-nva>
        <music-list
          slot="slot-b"
          :songlist='newmusiclist'
        ></music-list>
      </new-music-list>
  </div>
</template>

<script>
import { getNewMusic } from "../../../../network/hswiper";
import NewMusicList from "./newmusiclist/newmusiclist";
import MusicNva from "../../../../components/musicitem/musicnav";
import MusicList from "../../../../components/musicitem/musiclist";

export default {
  name: "newmusic",
  components: {
    NewMusicList,
    MusicNva,
    MusicList,
  },
  data() {
    return {
      newmusiclist: [],
      type: 0,
    };
  },
  watch:{
    type(){
      this.getNewMusic(this.type);
    }
  },
  created() {
    this.getNewMusic(this.type);
  },
  methods: {
    getNewMusic(type) {
      getNewMusic(type).then((response) => {
        // console.log(response);
        this.newmusiclist = response.data;
      });
    },
    newmusicsel(type) {
      type = type.trim();
      this.newmusiclist=[]
      switch (type) {
        case "全部":
          this.type = 0;
          break;
        case "华语":
          this.type = 7;
          break;
        case "欧美":
          this.type = 96;
          break;
        case "韩国":
          this.type = 16;
          break;
        case "日本":
          this.type = 8;
          break;
      }
    },
  },
};
</script>

<style>
.newmusic {
  width: 100%;
  height: 620px;
  overflow: auto;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
}
.newmusic::-webkit-scrollbar {
  display: none;
}
@keyframes shutter-in-top {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}
</style>
