<template>
  <div class="album">
    <scroll class="albumscroll" ref="scroll">
      <new-album>
        <div class="newalbum">
          <album-tem
            v-for="item in newalbumlist"
            :item="item"
            :key="item.index"
            class="albumtem"
            @imgalbumload="imgalbumload"
          ></album-tem>
        </div>
      </new-album>
      <div>
        <all-album @areaname="areaname">
          <div class="newalbum">
            <album-tem
              v-for="item in allalbum"
              :item="item"
              :key="item.index"
              class="albumtem"
              @imgalbumload="imgalbumload"
            ></album-tem>
          </div>
        </all-album>
        <el-pagination
          background
          :page-size="30"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="this.total"
          class="pagination"
        >
        </el-pagination>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../../components/better-scroll/bscroll";
import {
  getNewAlbumList,
  getNewAlbum,
  getTopAlbum,
  getTopAllAlbum,
} from "../../../../network/hswiper";
import NewAlbum from "./newalbum/newalbum";
import AllAlbum from "./allalbum/allalbum";
import AlbumTem from "../../../../components/albumtem/albumtem";

export default {
  name: "album",
  components: {
    Scroll,
    NewAlbum,
    AllAlbum,
    AlbumTem,
  },
  data() {
    return {
      newalbumlist: [],
      allalbum: [],
      currentpage: 1,
      total: 0,
      area: "",
    };
  },
  watch: {
    currentpage() {
      this.getTopAllAlbum(this.area);
    },
    area() {
      this.getTopAllAlbum(this.area);
    },
  },
  created() {
    this.getNewAlbum(), this.getTopAllAlbum(this.area);
  },
  methods: {
    imgalbumload() {
      this.$refs.scroll.refresh();
    },
    areaname(name) {
      console.log(name);
      name = name.trim();
      this.total = 0,
      this.currentpage = 1;
      switch (name) {
        case '全部':
          this.area = "";
          break;
        case '华语':
          this.area = "ZH";
          break;
        case '欧美':
          this.area = "EA";
          break;
        case '韩国':
          this.area = "KR";
          break;
        case '日本':
          this.area = "JP";
          break;
      }
    },
    getNewAlbum() {
      getNewAlbum().then((response) => {
        // console.log('最新专辑')
        // console.log(response);
        this.newalbumlist = response.albums;
      });
    },
    getTopAllAlbum(area) {
      const offset = (this.currentpage - 1) * 30;
      getTopAllAlbum(area, offset).then((response) => {
        this.allalbum = response.albums;
        this.total = response.total;
      });
    },
    handleCurrentChange(val) {
      this.currentpage = val;
    },
  },
};
</script>

<style>
.album {
  width: 100%;
  height: calc(100% - 50px);
    animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
}
.albumscroll {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.pagination {
  margin: -30px 0px 0px 400px;
}
@keyframes shutter-in-top {
  0%{
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100%{
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}

</style>
