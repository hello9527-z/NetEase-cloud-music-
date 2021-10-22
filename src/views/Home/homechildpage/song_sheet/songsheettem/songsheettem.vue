<template>
  <div>
    <div class="tem-1">
      <div class="tem-2" v-for="item in allsheetdetail" :key="item.index">
        <div class="tem-3" @click="songsheetdetail(item.id)">
          <img v-lazy="item.coverImgUrl" alt="" @load="imglode" />
          <div class="tem-4" v-if="item.playCount">
            <i class="iconfont icon-headset-full"></i>
            <span>{{ integer(item.playCount) }}万</span>
          </div>
          <div class="tem-5">
            <i class="iconfont icon-bofang"></i>
          </div>
        </div>
        <p class="temy1">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongSheetTem",
  props: {
    allsheetdetail: {
      type: Array,
    },
  },
  data() {
    return {
      fullscreenLoading: false
    };
  },
  methods: {
    imglode() {
      this.$emit("imageLoaddetail");
    },
    integer(num) {
      return parseInt(num / 10000);
    },
    songsheetdetail(e){
      this.$router.push({path:`/detail/${e}`})
    }
  },
};
</script>

<style>
.tem-1 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 10px;
  justify-content: flex-start;

}
.tem-1::after {
  contain: "";
  flex: auto;
}
.tem-2 {
  width: 224px;
  margin: 0px 15px;
  margin-bottom: 10px;
  justify-content: flex-start;
}
.tem-3 {
  height: 200px;
  width: 224px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.tem-3 img {
  height: 200px;
  width: 224px;
}
.tem-4 {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: #DCDCDC;
  opacity: 0.5;
  border-radius: 20px;
}
.tem-5 {
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  text-align: center;
  line-height: 30px;
  position: absolute;
  left: 92px;
  top: 80px;
  display: none;
}
.tem-5 i {
  font-size: 40px;
  color: orange;
}
.tem-3:hover .tem-5 {
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
.tem-3:hover {
  transform: translateY(-5px);
}
.temy1 {
  width: 224px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
