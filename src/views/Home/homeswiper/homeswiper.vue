<template>
  <el-carousel :interval="3000" type="card" height="250px">
    <el-carousel-item v-for="item in banners" :key="item.index">
      <h3 class="medium"><img :src='item.imageUrl' @load="imgload1"></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
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
    imgload1() {
      this.counter++;
      this.imagel();
      // 判断,所有的图片都加载完成了.那么进行一次回调
      if (++this.counter === this.imageLength*2) {
        this.$emit("swiperload");
      }
      // console.log(this.imageLength*2);
      // console.log(this.counter);
      // console.log(this.banners.length);
    },
    imagel() {
      if (this.isactive) {
        this.isactive = false;
        for (let i = 0; i < this.banners.length; i++) {
          this.imageLength++;
        }
      }
    }
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0px;
}
.el-carousel__item img{
  height: 250px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item{
border-radius: 20px;
height: 250px;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel{
  height:300px;
  margin: 0px 10px;
}
</style>
