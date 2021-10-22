<template>
  <div>
    <div class="singerdetail">
      <img :src="DetailSinger.img" alt="" />
      <div>{{ DetailSinger.name }}</div>
      <div>
        <span>{{ DetailSinger.imageDesc }}</span>
      </div>
      <div>
        <span>单曲:{{ DetailSinger.musicSize }}</span> <span>专辑:{{ DetailSinger.albumSize }}</span> <span>MV:{{ DetailSinger.mvSize }}</span>
      </div>
      <div class="singerdescribe">{{ DetailSinger.briefDesc }}</div>
    </div>
    <div class="singertags">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="热门歌曲" name="first">
          <music-nav></music-nav>
          <music-lista
            :songlist='singersong'
          ></music-lista>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.total"
            :page-size="50"
            @current-change="handleCurrentChange"
            class="singerpagination"
          ></el-pagination>
        </el-tab-pane>
        <el-tab-pane label="专辑" name="second" class="singeralbum">
          <album-tem
            v-for="item in singeralbum"
            :key="item.index"
            :item="item"
          ></album-tem>
        </el-tab-pane>
        <el-tab-pane label="MV" name="third">
          <tem-mv :sheetlist='singermv'></tem-mv>
        </el-tab-pane>
        <el-tab-pane label="歌手介绍" name="fourth">
          {{DetailSinger.briefDesc}}
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="bottomup"></div>
  </div>
</template>

<script>
import MusicLista from "../../../components/musicitem/musiclista";
import MusicNav from "../../../components/musicitem/musicnav";
import AlbumTem from "../../../components/albumtem/albumtem";
import TemMv from "../../../components/content/temmv"

export default {
  name: "DetailSingerTem",
  components: {
    MusicLista,
    MusicNav,
    AlbumTem,
    TemMv
  },
  props: {
    DetailSinger: Object,
    singersong: Array,
    singeralbum: Array,
    total: Number,
    singermv:Array
  },
  data() {
    return {
      activeName: "first",
    };
  },
  created() {
    // console.log(this.singersong);
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("singerCurrentpage", val);
    },
    handleClick(event){
      this.$emit('singerloadmv',event.name)
    }
  },
};
</script>

<style scoped>
.singerdetail {
  width: 100%;
  height: 460px;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
}
.singerdetail::after {
  content: "";
  background: url("../../../assets/img/c9ddae8ea56b5f73519a47cf74a0e723.jpeg");
  background-size: 100%;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 200px;
  filter: blur(10px);
}
.singerdetail img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 5%;
}
.singerdetail div {
  margin-top: 10px;
}
.singerdescribe {
  width: 800px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 10px auto;
}
.singertags {
  margin-left: 10px;
  margin-right: 10px;
}
.singeralbum {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 90px;
}
.singerpagination{
  margin-left: 400px;
}
.bottomup{
  width: 100%;
  height: 50px;
}
</style>
