<template>
  <div class="Home">
    <div class="home-page">
      <home-nav/>
      <router-view/>
    </div>
  </div>
</template>

<script>

import HomeNav from "./homenav/HomeNav"
export default {
  name: "Home",
  components: {
    HomeNav,
  }
};
</script>

<style scoped>
.home-page {
  position: absolute;
  top: 50px;
  right: 0px;
  height: 670px;
  width: 1321px;
}
</style>
