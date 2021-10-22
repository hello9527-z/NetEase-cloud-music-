<template>
  <div
    class="singer"
    v-infinite-scroll="loadmore"
    infinite-scroll-immediate="true"
    infinite-scroll-disabled="disabled"
  >
    <singer-cat
      @singertype="singertype"
      @singerarea="singerarea"
      @singerinitial="singerinitial"
    ></singer-cat>
    <singer-tem :singerlist="singerlist"></singer-tem>
  </div>
</template>

<script>
import Scroll from "../../../../components/better-scroll/bscroll";
import { getHotSinger } from "../../../../network/hswiper";
import SingerCat from "./singercat/singercat";
import SingerTem from "./singeritem/singeritem";

export default {
  name: "singer",
  components: {
    Scroll,
    SingerCat,
    SingerTem,
  },
  data() {
    return {
      singerlist: [],
      type: -1,
      area: -1,
      initial: -1,
      page: 1,
      loading: false,
    };
  },
  watch: {
    type() {
      this.loadmore();
    },
    area() {
      this.loadmore();
    },
    initial() {
      this.loadmore();
    },
  },
  created() {},
  computed: {
    disabled() {
      return this.loading;
    },
  },
  methods: {
    loadmore() {
      this.loading = true;
      this.getHotSinger(this.type, this.area, this.initial);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    getHotSinger(type, area, initial) {
      const offset = (this.page - 1) * 30;
      getHotSinger(type, area, initial, offset).then((response) => {
        // console.log(response);
        this.singerlist.push(...response.artists);
        this.page++;
        // console.log(this.page);
      });
    },
    singertype(type) {
      this.page=1
      this.singerlist=[]
      console.log(type)
      type = type.trim();
      switch (type) {
        case "全部":
          this.type = -1;
          break;
        case "男歌手":
          this.type = 1;
          break;
        case "女歌手":
          this.type = 2;
          break;
        case "乐队":
          this.type = 3;
          break;
      }
    },
    singerarea(area) {
      this.page=1
      this.singerlist=[]
      console.log(area)
      area = area.trim();
      switch (area) {
        case "全部":
          this.area = -1;
          break;
        case "华语":
          this.area = 17;
          break;
        case "欧美":
          this.area = 96;
          break;
        case "日本":
          this.area = 8;
          break;
        case "韩国":
          this.area = 16;
          break;
        case "其他":
          this.area = 0;
          break;
      }
    },
    singerinitial(initial) {
      this.page=1
      this.singerlist=[]
      // console.log(initial)
      initial = initial.trim();
      switch (initial) {
        case "热门":
          this.initial = -1;
          break;
        case "#":
          this.initial = 0;
          break;
      }
      if (initial<='Z'&&initial>='A') {
        this.initial=initial.toLowerCase()
      }
    },
  },
};
</script>

<style>
.singer {
  width: 100%;
  height: calc(100% - 50px);
  /* height: 700px; */
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  overflow: auto;
}
.singer::-webkit-scrollbar {
    display: none;
}
.singerscroll {
  height: 100%;
  overflow: hidden;
  position: relative;
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
