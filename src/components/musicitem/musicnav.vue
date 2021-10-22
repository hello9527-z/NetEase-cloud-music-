<template>
  <div class="musicnav-top">
    <li class="musicnav-a">歌曲</li>
    <li class="musicnav-b">歌手</li>
    <li class="musicnav-c">专辑</li>
    <li class="musicnav-d">时长</li>
  </div>
</template>

<script>
export default {
  name:"MusicNva",
}
</script>

<style>
.musicnav-top{
  margin-top: 20px;
  margin-left: 20px;
  padding-left: 10px;
  clear: both;
  height: 50px;
  border-top: 3px solid orange;
  border-bottom: 3px solid #dcdcdc;
  line-height: 50px;
}
.musicnav-a{
  width: 45%;
  float: left;
  margin-left: 0px;

}
.musicnav-b{
  width: 22%;
  float: left;
}
.musicnav-c{
  width: 22%;
  float: left;
}
.musicnav-d{
  width: 11%;
  float: left;
}
</style>
