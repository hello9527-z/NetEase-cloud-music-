<template>
  <div class="homenav-z">
    <div class="homenav">
      <router-link :to="{ name: 'select_d' }" tag="li"><p>精选</p></router-link>
      <router-link :to="{ name: 'songsheet' }" tag="li"><p>歌单</p></router-link>
      <router-link :to="{ name: 'rankinglist' }" tag="li"><p>排行榜</p></router-link>
      <router-link :to="{ name: 'album' }" tag="li"><p>数字专辑</p></router-link>
      <router-link :to="{ name: 'singer' }" tag="li"><p>歌手</p></router-link>
      <router-link :to="{ name: 'newmusic' }" tag="li"><p>新品歌曲</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
};
</script>

<style>
.homenav-z{
  height: 50px;
}
.homenav {
  margin-left:30px;
  width: 600px;
  height: 50px;
  display: flex;
  position: absolute;
  text-align: center;
  line-height: 50px;
}
.homenav li {
  flex: 1;
}
.homenav li:hover{
  color: #FFA500;
}
.router-link-active p{
  color: #FFA500;
  border-bottom: #FFA500 2px solid;
  font-size: 18px;
}
</style>
