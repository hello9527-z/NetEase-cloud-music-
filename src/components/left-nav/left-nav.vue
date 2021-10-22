<template>
  <div class="left-nav">
    <div class="left-logo">
      <i class="iconfont icon-wangyiyunyinle"></i><span>网易云音乐</span>
    </div>
    <div class="left-nav-nav">
      <h5>在线音乐</h5>
      <router-link to="/home/select_d" tag="li">
        <div><i class="iconfont icon-yinleyule"></i> <span>音乐馆</span></div>
      </router-link>
      <br />
      <router-link to="/video" tag="li">
        <div><i class="iconfont icon-shipin"></i> <span>视频</span></div>
      </router-link>
      <h5>我的音乐</h5>
      <router-link to="/mylove" tag="li">
        <div><i class="iconfont icon-xiai"></i> <span>我的喜爱</span></div>
      </router-link>
      <br />
      <router-link to="/music" tag="li">
        <div><i class="iconfont icon-diannao"></i> <span>本地音乐</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Leftnav",
};
</script>

<style>
.left-nav {
  width: 200px;
  height: 700px;
  background-color: #F5F5F5;
  padding-left: 15px;
  padding-top: 20px;
  color: #5c5c5c;
  border-right: 2px solid #dcdcdc;
  box-shadow: 1px 0px 3px #dcdcdc;
}
.left-logo {
  font-size: 25px;
  margin-bottom: 20px;
}
.left-logo i {
  color: red;
  font-size: 25px;
}
.left-logo span {
  margin-left: 5px;
}
.left-nav-nav i {
  margin: 20px 10px 20px 20px;
}
.left-nav-nav div{
  margin-top: 10px 0px;
  padding: 10px 20px;
}
.left-nav h5{
  margin: 20px 0px;
}
a div:hover{
  background-color: silver;
  border-radius: 10px;
}
.router-link-active div{
  background:	#00FA9A;
  border-radius: 10px;
}
</style>
