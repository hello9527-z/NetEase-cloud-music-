<template>
  <div>
    <div class="contital1">
      <h1>{{ copy }}</h1>
      <div class="temmany1">
        <span>更多</span><i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <div class="tem-f">
      <div class="tem-g" v-for="item in sheetlist" :key="item.index">
        <div class="tem-h">
          <img v-lazy="item.picUrl" alt="" @load="imglode" />
          <div class="tem-i">
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
  name: "TemBr",
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
        this.$emit("imageLoad3");
      }
      //   console.log(this.imageLength*2);
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
.temmany1 {
  position: absolute;
  right: 10px;
  top: 0px;
}
.tem-f {
  display: flex;
  width: 1321px;
}
.tem-g {
  flex: 1;
  margin: 0px 20px;
  margin-bottom: 10px;
}
.tem-h {
  height: 200px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 10px #5c5c5c;
  margin-bottom: 10px;
}
.tem-h img {
  height: 250px;
  width: 400px;
}
.tem-i {
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  text-align: center;
  position: absolute;
  left: 180px;
  top: 95px;
  display: none;
}
.tem-i i {
  font-size: 40px;
  color: orange;
}
.tem-h:hover .tem-i {
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
.tem-h:hover {
  transform: translateY(-5px);
}
.temx {
  width: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
