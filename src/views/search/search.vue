<template>
  <div class="search-page">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="searchtabs">
      <el-tab-pane label="单曲" name="first">
        <music-nav></music-nav>
        <music-lista
          :songlist='searchmusic'
        ></music-lista>
        <div class="searchpagination" v-if="this.songCount>30">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.songCount"
            :page-size="30"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="second" class="searchalbum">
        <album-tem
          v-for="item in searchalbum"
          :key="item.index"
          :item="item"
        ></album-tem>
        <div class="searchpagination" v-if="this.albumCount>30">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.albumCount"
            :page-size="30"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="third">
        <song-sheet-tem :allsheetdetail="searchplaylist"></song-sheet-tem>
        <div class="searchpagination" v-if="this.playlistCount>30">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.playlistCount"
            :page-size="30"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="fourth">
        <singer-tem :singerlist="searchartists"></singer-tem>
        <div class="searchpagination" v-if="this.artistCount>30">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.artistCount"
            :page-size="30"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="five">
        <tem-mv :sheetlist='searchmvs'></tem-mv>
        <div class="searchpagination" v-if="this.mvCount>30">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.mvCount"
            :page-size="30"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getSearchResult } from "../../network/hswiper";
import MusicNav from "../../components/musicitem/musicnav";
import MusicLista from "../../components/musicitem/musiclista";
import AlbumTem from "../../components/albumtem/albumtem";
import SongSheetTem from "../Home/homechildpage/song_sheet/songsheettem/songsheettem";
import SingerTem from "../Home/homechildpage/singer/singeritem/singeritem";
import TemMv from "../../components/content/temmv"

export default {
  name: "Search",
  components: {
    MusicNav,
    MusicLista,
    AlbumTem,
    SongSheetTem,
    SingerTem,
    TemMv
  },
  data() {
    return {
      activeName: "first",
      keywords: "",
      type: 1,
      page: 1,
      songCount: 0,
      albumCount: 0,
      artistCount: 0,
      playlistCount: 0,
      mvCount:0,
      searchmusic: [],
      searchalbum: [],
      searchplaylist: [],
      searchartists: [],
      searchmvs: [],
    };
  },
  watch: {
    page() {
      this.getSearchResult(this.keywords, this.type);
    },
    type() {
      this.getSearchResult(this.keywords, this.type);
    },
  },
  created() {
    this.keywords = this.$route.params.keywords;
    this.getSearchResult(this.keywords, this.type);
  },
  methods: {
    handleClick(event) {
      this.page = 1;
      switch (event.name) {
        case "first":
          this.type = 1;
          break;
        case "second":
          this.type = 10;
          break;
        case "third":
          this.type = 1000;
          break;
        case "fourth":
          this.type = 100;
          break;
        case "five":
          this.type = 1004;
          break;
      }
    },
    getSearchResult(keywords, type) {
      const offset = (this.page - 1) * 30;
      getSearchResult(keywords, type, offset).then((response) => {
        // console.log(response);
        this.songCount = response.result.songCount;
        this.searchmusic = response.result.songs;
        this.albumCount = response.result.albumCount;
        this.searchalbum = response.result.albums;
        this.playlistCount = response.result.playlistCount;
        this.searchplaylist = response.result.playlists;
        this.artistCount = response.result.artistCount;
        this.searchartists = response.result.artists;
        this.mvCount = response.result.mvCount;
        this.searchmvs = response.result.mvs;
      });
    },
    handleCurrentChange(val) {
      this.page = val;
    },
  },
};
</script>

<style lang="less" scoped>
.search-page {
  position: absolute;
  top: 50px;
  right: 0px;
  /* height: calc(100% - 50px); */
  height: 670px;
  width: 1321px;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  overflow: auto;
}
.search-page::-webkit-scrollbar {
  display: none;
}
@keyframes shutter-in-top {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}
.searchtabs {
  margin: 0px 20px;
}
</style>

<style>
.searchpagination {
  width: 1321px;
  text-align: center;
}
.searchalbum {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
