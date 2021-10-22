<template>
  <div class="song">
    <scroll class="scrollsheet" ref="scroll">
      <all-sheet-list
        :allsheetlist="allsheetlist"
        :hotsheetlist="hotsheetlist"
        @hotsel="hotsel"
        @allsel="allsel"
        @all="all"
      ></all-sheet-list>
      <song-sheet-tem
        :allsheetdetail="allsheetdetail"
        @imageLoaddetail="imageLoaddetail"
      ></song-sheet-tem>
      <el-pagination
        background
        :page-size="30"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="this.total"
        class="fenye"
      >
      </el-pagination>
      <div class="bottomup"></div>
    </scroll>
  </div>
</template>

<script>
import {
  getAllSheet,
  getHotSheet,
  getAllSheetDetail,
} from "../../../../network/hswiper";
import Scroll from "../../../../components/better-scroll/bscroll";
import AllSheetList from "./songsheet/allsheetlist";
import SongSheetTem from "./songsheettem/songsheettem";

export default {
  name: "songsheet",
  components: {
    Scroll,
    AllSheetList,
    SongSheetTem,
  },
  data() {
    return {
      allsheetlist: [],
      hotsheetlist: [],
      allsheetdetail: [],
      type: "",
      currentpage: 1,
      total: 0,
      isactive: true,
      isLoading:true,
    };
  },
  watch: {
    currentpage() {
      this.getAllSheetDetail(this.type);
    },
    type() {
      this.getAllSheetDetail(this.type);
    },
  },
  created() {
    this.getAllSheet(), this.getHotSheet(), this.getAllSheetDetail(this.type);
  },
  methods: {
    imageLoaddetail() {
      this.$refs.scroll.refresh();
      // console.log('shoudao1')
    },
    handleCurrentChange(val) {
      // this.allsheetdetail=[]
      // console.log(this.allsheetdetail)
      this.currentpage = val;
    },
    hotsel(e) {
      this.total = 0, this.currentpage = 1, this.type = e.trim();
    },
    allsel(e) {
      this.total = 0, this.currentpage = 1, this.type = e.trim();
    },
    all(e){
      this.total=0,this.currentpage = 1 ,this.type = e.trim();
    },
    getAllSheet() {
      getAllSheet().then((response) => {
        this.allsheetlist = response.sub;
      });
    },
    getHotSheet() {
      getHotSheet().then((response) => {
        this.hotsheetlist = response.tags;
      });
    },
    getAllSheetDetail(type) {
      const offset = (this.currentpage - 1) * 30;
      getAllSheetDetail(type, offset).then((response) => {
        // console.log(response);
        this.allsheetdetail = response.playlists;
        // console.log(this.allsheetdetail)
        this.total = response.total;
      });
    },
  },
}
</script>

<style>
.song {
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
.scrollsheet {
  height: 100%;
  overflow: hidden;
  position: relative;
  /* margin-left: 10px; */
}
.fenye {
  margin-left: 400px;
}
.bottomup {
  width: 100%;
  height: 100px;
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
