<template>
  <div class="allalbumtotal">
    <el-divider content-position="left">全部新碟
      <span @click="area($event)">全部</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="area($event)">华语</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="area($event)">欧美</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="area($event)">韩国</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="area($event)">日本</span>
    </el-divider>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AllAlbum",
  methods:{
    area(e){
      this.$emit('areaname',e.currentTarget.innerHTML)
      // console.log(e.currentTarget.innerHTML)
    }
  }
};
</script>

<style>
.newalbum {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.allalbumtotal {
  margin: 50px 30px;
}
.el-divider__text {
  font-size: 20px;
}
.el-divider__text span{
  font-size: 12px;
  margin-left: 5px;
}
</style>
