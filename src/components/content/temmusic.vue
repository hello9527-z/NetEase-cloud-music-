<template>
  <div>
    <div class="contital">
      <h1>{{ copy }}</h1>
      <div class="temmany">
        <span>更多</span><i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <div class="tem-a">
      <div class="tem-b" v-for="item in sheetlist" :key="item.index">
        <div class="tem-c">
          <img v-lazy="item.picUrl" alt="" @load="imglode" />
          <div class="tem-d" v-if="item.playCount">
            <i class="iconfont icon-headset-full"></i>
            <span>{{ integer(item.playCount) }}万</span>
          </div>
          <div class="tem-e">
            <i class="iconfont icon-bofang"></i>
          </div>
        </div>
        <p class="temy">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemMusic",
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
      this.imagel();
      // 判断,所有的图片都加载完成了.那么进行一次回调
      if (this.counter === this.imageLength) {
        this.$emit("imageLoad2");
      }
      // console.log(this.imageLength*2);
      // console.log(this.counter);
      // console.log(this.sheetlist.length);
    },
    imagel() {
      if (this.isactive) {
        this.isactive = false;
        for (let i = 0; i < this.sheetlist.length; i++) {
          this.imageLength++;
        }
      }
    },
    integer(num) {
      return parseInt(num / 10000);
    },
  },
};
</script>

<style>
.contital {
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
.temmany {
  position: absolute;
  right: 10px;
  top: 0px;
}
.tem-a {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.tem-b {
  flex: 1;
  margin: 0px 20px;
  margin-bottom: 10px;
}
.tem-c {
  height: 200px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.tem-c img {
  height: 200px;
  width: 224px;
}
.tem-d {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: #DCDCDC;
  opacity: 0.5;
  border-radius: 20px;
}
.tem-e {
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  text-align: center;
  line-height: 30px;
  position: absolute;
  left: 92px;
  top: 80px;
  display: none;
}
.tem-e i {
  font-size: 40px;
  color: orange;
}
.tem-c:hover .tem-e {
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
.tem-c:hover {
  transform: translateY(-5px);
}
.temy {
  width: 224px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
