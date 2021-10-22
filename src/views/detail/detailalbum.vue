<template>
  <div
    class="home-page1"
    v-infinite-scroll="commentloadmore"
    infinite-scroll-immediate="true"
    infinite-scroll-disabled="disabled"
  >
    <detail-album-tmp
      :singname="singname"
      :singername="singername"
      :imgurl="imgurl"
      :detailalbumlist="detailalbumlist"
      :description="description"
      :allcomments="allcomments"
      :hotcomments="hotcomments"
      @handleclick="handleclick"
    ></detail-album-tmp>
  </div>
</template>

<script>
import { getNumberDetails, getCAlbumComment } from "../../network/hswiper";
import DetailAlbumTmp from "./detailtem/detailalbumtem";
export default {
  name: "DetailAlbum",
  components: {
    DetailAlbumTmp,
  },
  data() {
    return {
      id: 0,
      detailalbumlist: [],
      singname: "",
      singername: "",
      imgurl: "",
      description: "",
      allcomments: [],
      hotcomments: [],
      page: 1,
      loading: false,
      handle: "",
      hotload: true,
      disabledload:false
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getNumberDetails(this.id);
    // this.getCAlbumComment(this.id);
  },
  mounted() {
    // this.$bus.$on("commentloadmore", this.getCAlbumComment(this.id));
  },
  watch:{
    handle(){
      this.commentloadmore()
    }
  },
  computed: {
    disabled() {
      return this.loading || this.disabledload
    },
  },
  methods: {
    getNumberDetails(id) {
      getNumberDetails(id).then((response) => {
        console.log(response);
        this.singername = response.album.artist.name;
        this.singname = response.album.name;
        this.imgurl = response.album.picUrl;
        this.detailalbumlist = response.songs;
        this.description = response.album.description;
      });
    },
    getCAlbumComment(id) {
      const offset = (this.page - 1) * 20;
      getCAlbumComment(id, offset).then((response) => {
        if (response.more=='false') {
          this.disabledload=true
        }
        this.page++;
        console.log(response);
        this.allcomments.push(...response.comments);
        if (this.hotload) {
          this.hotcomments = response.hotComments;
          this.hotload = false;
        }
        console.log(this.page);
      });
    },
    commentloadmore() {
      this.loading = true;
      // console.log(this.handle=='second')
      if (this.handle == "second") {
        this.getCAlbumComment(this.id);
      }
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    handleclick(e) {
      // console.log(e)
      this.handle = e;
    },
  },
};
</script>
<style scoped>
.home-page1 {
  position: absolute;
  top: 40px;
  right: 0px;
  /* height: calc(100% - 50px); */
  height: 680px;
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
.home-page1::-webkit-scrollbar {
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

