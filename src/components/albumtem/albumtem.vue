<template>
  <div @click="albumdetail(item.id)" class="album5">
    <div class="album1">
      <img v-lazy="item.picUrl" alt=""/>
      <div class="album2"><i class="iconfont icon-bofang"></i></div>
    </div>
    <div class="album3">{{ item.name }}</div>
    <div class="album4">{{ item.artist.name }}</div>
  </div>
</template>

<script>
export default {
  name: "AlbumTem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    albumdetail(id) {
      this.$router.push({path:`/detailalbum/${id}`})
    },
    imgalbumload() {
      this.$emit("imgalbumload");
    },
  },
};
</script>

<style>
.album1 {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 30px;
  box-shadow: 3px 3px 5px #8c8c8c;
}
.album1:hover {
  transform: translateY(-5px);
}
.album1 img {
  width: 150px;
  height: 150px;
}
.album1:hover .album2 {
  display: block;
}
.album2 {
  position: absolute;
  left: 55px;
  top: 55px;
  display: none;
  animation: bounce-in-fwd 1.1s both;
}
.album2 i {
  font-size: 40px;
  color: orange;
}
.album3 {
  margin-left: 30px;
  margin-top: -10px;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.album4 {
  margin-left: 30px;
  font-size: 12px;
  color: #8c8c8c;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

@keyframes bounce-in-fwd {
  0% {
    transform: scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(0.7);
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(0.84);
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
</style>
