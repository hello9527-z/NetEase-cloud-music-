<template>
  <div class="ranklist">
    <div v-for="item in AllRankList" :key="item.index" class="rank5">
      <div class="rank1" @click="rankdetail(item.id)">
        <div>
          <img v-lazy="item.coverImgUrl" alt="" @load="imgload2" />
        </div>
        <div class="rank2">
          <i class="iconfont icon-headset-full"></i>
          <span>{{ integer(item.playCount) }}万</span>
        </div>
        <div class="rank3">
          <i class="iconfont icon-bofang"></i>
        </div>
      </div>
      <div class="rank4">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankTem",
  props: {
    AllRankList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      counter: 0,
      isactive: true,
      imageLength: 0,
    };
  },
  methods: {
    imgload2() {
      this.counter++;
      this.image2();
      // 判断,所有的图片都加载完成了.那么进行一次回调
      if (this.counter === this.imageLength) {
        this.$emit("rankload");
      }
    },
    image2() {
      if (this.isactive) {
        this.isactive = false;
        for (let i = 0; i < this.AllRankList.length; i++) {
          this.imageLength++;
        }
      }
    },
    integer(num) {
      return parseInt(num / 10000);
    },
    rankdetail(e) {
      this.$router.push({path:`/detail/${e}`})
    },
  },
};
</script>

<style>
.ranklist {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 55px;
}
.rank1 {
  position: relative;
  box-shadow: 3px 3px 5px #8c8c8c;
  border-radius: 10px;
  overflow: hidden;
  margin: 30px 20px 0px 20px;
  width: 200px;
  height: 200px;
}

.rank1:hover {
  transform: translateY(-5px);
}
.rank1 img {
  width: 200px;
  height: 200px;
}
.rank2 {
  position: absolute;
  background-color: #dcdcdc;
  border-radius: 5px;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
}
.rank1:hover .rank3 {
  display: block;
}
.rank3 {
  position: absolute;
  left: 70px;
  top: 70px;
  display: none;
  animation: bounce-in-fwd 1.1s both;
}
.rank3 i {
  font-size: 60px;
  color: orange;
}
.rank4 {
}
@keyframes bounce-in-fwd {
  0% {
    transform: scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(0.7);
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(0.84);
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
</style>
