<template>
  <div class="scrolldetailalbum">
    <div class="detailalbum4">
      <div class="detailalbum1">
        <img :src="imgurl" alt="" />
      </div>
      <div class="detailalbum2">
        <p class="detailalbum3">{{singname}}</p>
        <li>
        <img :src="creatorimg" alt="">
        <p>{{singername}}</p>
        <p>{{dateFormat(createTime,"YYYY-MM-DD HH:MM:SS")}}</p>
        </li>
        <div>
          <i class="iconfont icon-bofang"></i>
          <span>全部播放</span>
        </div>
        <p class='tags'>标签:
          <span v-for="i in tags" :key="i.index">{{i}}</span>
        </p>
      </div>
    </div>
    <div>
          <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
            <el-tab-pane label="歌曲" name="first">
              <music-nva></music-nva>
              <music-lista
                :songlist='detaillist'
              ></music-lista>
            </el-tab-pane>
            <el-tab-pane label="评论" name="second">
              <comment :allcomments='allcomments'></comment>
            </el-tab-pane>
            <el-tab-pane label="歌单详情" name="third">{{description}}</el-tab-pane>
          </el-tabs>
    </div>
  </div>
</template>

<script>
import MusicNva from "../../../components/musicitem/musicnav"
import MusicLista from "../../../components/musicitem/musiclista"
import Comment from "../../../components/comment/comment"
import dateFormat from '../../../utils/format'
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
      detaillist:Array,
      description:String,
      allcomments:Array,
      createTime:Number,
      creatorimg:String,
      tags:Array
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
      },
    dateFormat(str,type){
      return dateFormat(str,type)
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
  margin-bottom: 10px;
}
.detailalbum2 img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 5px;
}
.detailalbum2 li{
  height: 40px;
  line-height: 40px;
  display: flex;
}
.detailalbum2 li p{
  margin-left: 10px;
}
.detailalbum2 div {
  width: 100px;
  background-color: #dcdcdc;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
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
.tags{
  margin-top: 10px;
}
.tags span{
  margin-left: 10px;
}
</style>
