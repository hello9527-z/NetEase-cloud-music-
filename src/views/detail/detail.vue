<template>
  <div
    class="home-page2"
    v-infinite-scroll="commentloadmore"
    infinite-scroll-immediate="true"
    infinite-scroll-disabled="disabled"
  >
    <detail-tmp
      :singname="singname"
      :singername="singername"
      :imgurl="imgurl"
      :detaillist="detaillist"
      :description="description"
      :allcomments="allcomments"
      @handleclick="handleclick"
      :creatorimg='creatorimg'
      :createTime='createTime'
      :tags='tags'
    ></detail-tmp>
  </div>
</template>

<script>
import {getSheetDetails ,getSheetComment} from "../../network/hswiper";
import DetailTmp from "./detailtem/detailtem";
export default {
  name: "DetailTem",
  components: {
    DetailTmp,
  },
  data() {
    return {
      id: 0,
      detaillist: [],
      singname: "",
      singername: "",
      imgurl: "",
      description: "",
      allcomments: [],
      page: 1,
      loading: false,
      handle: "",
      disabledload:false,
      creatorimg:'',
      createTime:0,
      tags:[]
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getSheetDetails(this.id);
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
    getSheetDetails(id) {
      getSheetDetails(id).then((response) => {
        // console.log(response);
        this.singername = response.playlist.creator.nickname;
        this.singname = response.playlist.name;
        this.imgurl = response.playlist.coverImgUrl;
        this.detaillist = response.playlist.tracks;
        this.description = response.playlist.description;
        this.creatorimg= response.playlist.creator.avatarUrl,
        this.createTime = response.playlist.createTime,
        this.tags= response.playlist.tags
      });
    },
    getSheetComment(id) {
      const offset = (this.page - 1) * 20;
      getSheetComment(id, offset).then((response) => {
        if (response.more=='false') {
          this.disabledload=true
        }
        this.page++;
        console.log(response);
        this.allcomments.push(...response.comments);
      });
    },
    commentloadmore() {
      this.loading = true;
      // console.log(this.handle=='second')
      if (this.handle == "second") {
        this.getSheetComment(this.id);
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
.home-page2 {
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

