<template>
  <div>
    <div class="contital1">
      <h1>{{ copy }}</h1>
    </div>
    <div class="temmv-f">
      <div class="temmv-g" v-for="item in sheetlist" :key="item.index">
        <div class="temmv-h">
          <img v-lazy="item.picUrl" alt="" @load="imglode" v-if="item.picUrl"/>
          <img v-lazy="item.imgurl" alt="" v-if="item.imgurl">
          <img v-lazy="item.cover" alt="" v-if="item.cover">
          <div class="temmv-i">
            <i class="iconfont icon-bofang"></i>
          </div>
        </div>
        <p class="temx">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemMv",
  props: {
    sheetlist: {
      type: Array,
      default() {
        return [];
      },
    },
    copy: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      counter: 0,
      imageLength: 0,
      isactive: true,
    };
  },
  methods: {
    imglode() {
      this.counter++;
      this.imagel(); // 判断,所有的图片都加载完成了.那么进行一次回调
      if (this.counter === this.imageLength) {
        this.$emit("imageLoad");
      }
      // console.log(this.imageLength);
    },
    imagel() {
      if (this.isactive) {
        this.isactive = false;
        for (let i = 0; i < this.sheetlist.length; i++) {
          this.imageLength++;
        }
      }
    },
  },
};
</script>

<style>
.contital1 {
  position: relative;
  height: 30px;
  line-height: 30px;
  color: #5c5c5c;
  margin-bottom: 10px;
}
h1 {
  font-size: 20px;
  margin-left: 30px;
}
.temmv-f {
  display: flex;
  width: 1321px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 40px;
}
.temmv-g {
  width: 270px;
  margin: 0px 20px;
  margin-bottom: 10px;
}
.temmv-h {
  height: 200px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 10px #5c5c5c;
  margin-bottom: 10px;
}
.temmv-h img {
  height: 250px;
  width: 270px;
}
.temmv-i {
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  text-align: center;
  position: absolute;
  left: 115px;
  top: 75px;
  display: none;
}
.temmv-i i {
  font-size: 40px;
  color: orange;
}
.temmv-h:hover .temmv-i {
  display: block;
}
@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.temmv-h:hover {
  transform: translateY(-5px);
}
.temx {
  width: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
