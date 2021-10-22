<template>
  <div class="newalbumtotal">
    <div class="topscroll"></div>
    <el-divider content-position="left">热门新碟</el-divider>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:"NewAlbum",
}
</script>

<style>
.newalbum{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.newalbumtotal{
  margin: 10px 30px 10px 30px;
}
.el-divider__text{
  font-size: 20px;
}
.topscroll{
  height: 10px;
}
</style>
