<template>
  <div class="ranking">
    <scroll class="rankscroll" ref="scroll"><rank-tem :AllRankList="AllRankList" @rankload="rankload"></rank-tem></scroll>
  </div>
</template>

<script>
import { getAllRank, getAllRankDetail } from "../../../../network/hswiper";
import Scroll from "../../../../components/better-scroll/bscroll";
import RankTem from "./RankTem/RankTem";

export default {
  name: "RankingList",
  components: {
    Scroll,
    RankTem,
  },
  data() {
    return {
      AllRankList: [],
    };
  },
  created() {
    this.getAllRank();
  },
  methods: {
    //请求所有榜单---------------------
    getAllRank() {
      getAllRank().then((response) => {
        // console.log(response.list);
        this.AllRankList = response.list;
      });
    },
    rankload(){
      this.$refs.scroll.refresh()
    }
  },
};
</script>

<style>
.ranking {
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
.rankscroll {
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
