<template>
  <div
    class="home-page2"
    v-infinite-scroll="mvloadmore"
    infinite-scroll-immediate="true"
    infinite-scroll-disabled="disabled"
  >
    <detail-singer-tem
      :DetailSinger="DetailSinger"
      :singersong="singersong"
      :singeralbum="singeralbum"
      @singerCurrentpage="singerCurrentpage"
      :total="total"
      @singerloadmv="singerloadmv"
      :singermv='singermv'
    ></detail-singer-tem>
  </div>
</template>

<script>
import {
  getDetailSinger,
  getAlbumSinger,
  getMvSinger,
  getAllSongSinger,
} from "../../network/hswiper";
import DetailSingerTem from "./detailtem/detailsingertem";
export default {
  name: "DetailSinger",
  components: {
    DetailSingerTem,
  },
  data() {
    return {
      id: 0,
      singersong: [],
      singeralbum: [],
      singermv: [],
      page: 1,
      total: 0,
      loadmvname:'',
      loading: false,
      disabledload:false,
      mvpage:1,
      DetailSinger: {
        img: "",
        name: "",
        briefDesc: "",
        albumSize: "",
        musicSize: "",
        mvSize: "",
        imageDesc: "",
      },
    };
  },
  watch: {
    page() {
      this.getAllSongSinger(this.id);
    },
    loadmvname(){
      this.mvloadmore();
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetailSinger(this.id);
    // this.getSongSinger(this.id);
    this.getAlbumSinger(this.id);
    this.getAllSongSinger(this.id);
    // this.getMvSinger(this.id);
  },
  computed: {
    disabled() {
      return this.loading || this.disabledload
    },
  },
  methods: {
    getDetailSinger(id) {
      getDetailSinger(id).then((response) => {
        // console.log(response)
        this.DetailSinger.img = response.data.artist.cover;
        this.DetailSinger.name = response.data.artist.name;
        this.DetailSinger.briefDesc = response.data.artist.briefDesc;
        this.DetailSinger.albumSize = response.data.artist.albumSize;
        this.DetailSinger.musicSize = response.data.artist.musicSize;
        this.DetailSinger.mvSize = response.data.artist.mvSize;
        this.DetailSinger.imageDesc = response.data.identify.imageDesc;
      });
    },
    // getSongSinger(id){
    //   getSongSinger(id).then((response)=>{
    //     // console.log(response)
    //     this.singersong=response.hotSongs
    //     // console.log(this.singersong)
    //   })
    // },
    getAlbumSinger(id) {
      getAlbumSinger(id).then((response) => {
        // console.log(response)
        this.singeralbum = response.hotAlbums;
      });
    },
    getMvSinger(id) {
      const offset=(this.mvpage-1)*20
      getMvSinger(id,offset).then((response) => {
        if (response.hasMore=='false') {
          this.disabledload=true
        }
        console.log(response);
        this.singermv.push(...response.mvs)
        this.mvpage++
      });
    },
    getAllSongSinger(id) {
      const offset = (this.page - 1) * 50;
      getAllSongSinger(id, offset).then((response) => {
        // console.log(response)
        this.singersong = response.songs;
        this.total = response.total;
      });
    },
    singerCurrentpage(val) {
      // console.log(val);
      this.singersong = [];
      this.page = val;
    },
    singerloadmv(name) {
      console.log(name)
      this.loadmvname=name
    },
    mvloadmore(){
      console.log('111')
      this.loading = true;
      console.log(this.loadmvname=='second')
      if (this.loadmvname == "third") {
        console.log('222')
        this.getMvSinger(this.id);
      }
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
};
</script>

<style scoped>
.home-page2 {
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
.home-page2::-webkit-scrollbar {
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
</style>
