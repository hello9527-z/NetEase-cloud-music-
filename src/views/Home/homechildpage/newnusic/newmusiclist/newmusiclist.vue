<template>
  <div class="music-nav">
    <div class="top-top"></div>
    <span @click="selecenav($event)" :class="{ active1: isactive == '全部' }"
      >全部</span
    >
    <span @click="selecenav($event)" :class="{ active1: isactive == '华语' }"
      >华语</span
    >
    <span @click="selecenav($event)" :class="{ active1: isactive == '欧美' }"
      >欧美</span
    >
    <span @click="selecenav($event)" :class="{ active1: isactive == '韩国' }"
      >韩国</span
    >
    <span @click="selecenav($event)" :class="{ active1: isactive == '日本' }"
      >日本</span
    >
    <div><slot name="slot-a"></slot></div>
    <div><slot name="slot-b"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NewMusicList",
  data() {
    return {
      isactive: "全部",
    };
  },
  methods: {
    selecenav(e) {
      this.isactive = e.currentTarget.innerHTML;
      this.$emit('newmusicsel',e.currentTarget.innerHTML)
    },
  },
};
</script>

<style scoped>
.music-nav span {
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid #8c8c8c;
  border-radius: 20px;
}
.top-top{
  height: 8px;
}
.music-nav {
  margin: 20px 0px 20px 30px;
}
.active1 {
  background-color: #20B2AA;
}
</style>
