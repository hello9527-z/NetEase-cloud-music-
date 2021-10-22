<template>
  <div class="scrolldetailalbum">
    <div class="detailalbum4">
      <div class="detailalbum1">
        <img :src="imgurl" alt="" />
      </div>
      <div class="detailalbum2">
        <p class="detailalbum3">{{singname}}</p>
        <p>歌手: {{singername}}</p>
        <div>
          <i class="iconfont icon-bofang"></i>
          <span>全部播放</span>
        </div>
      </div>
    </div>
    <div>
          <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
            <el-tab-pane label="歌曲" name="first">
              <music-nva></music-nva>
              <music-lista
                :songlist='detailalbumlist'
              ></music-lista>
            </el-tab-pane>
            <el-tab-pane label="评论" name="second">
              <comment :hotcomments='hotcomments' :allcomments='allcomments'></comment>
            </el-tab-pane>
            <el-tab-pane label="专辑详情" name="third">{{description}}</el-tab-pane>
          </el-tabs>
    </div>
  </div>
</template>

<script>
import MusicNva from "../../../components/musicitem/musicnav"
import MusicLista from "../../../components/musicitem/musiclista"
import Comment from "../../../components/comment/comment"
export default {
  name: "DetailAlbumTmp",
  components:{
    MusicNva,
    MusicLista,
    Comment
  },
  props: {
      singname:String,
      singername:String,
      imgurl:String,
      detailalbumlist:Array,
      description:String,
      hotcomments:Array,
      allcomments:Array
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(event) {
        // console.log(event.name);
        this.$emit("handleclick",event.name)
      }
  },
};
</script>

<style>
.detailalbum1 {
  width: 200px;
  height: 200px;
  float: left;
  margin: 10px 30px;
}
.detailalbum1 img {
  width: 200px;
  height: 200px;
}
.detailalbum2 {
  margin-top: 10px;
  float: left;
}
.detailalbum3 {
  font-size: 30px;
  margin-bottom: 50px;
}
.detailalbum2 div {
  width: 100px;
  background-color: #dcdcdc;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-top: 50px;
}
.detailalbum2 div:hover {
  background-color: #8c8c8c;
}
.detailalbum4 {
  overflow: hidden;
  margin-left: 30px;
}
.tabs {
  margin-left: 30px;
  margin-top: 20px;
  margin-right: 30px;
}
.scrolldetailalbum{
  width: 100%;
  height: 100%;
}

</style>
