<template>
  <div
  >
    <div class="comment-a">
      <el-input type="textarea" :rows="3" placeholder="期待你的评论">
      </el-input>
      <el-button type="primary">提交评论</el-button>
    </div>
    <div v-if="hotcomments">
      <el-divider content-position="left">热门评论</el-divider>
      <commment-tem
        v-for="item in hotcomments"
        :key="item.index"
        :item="item"
      ></commment-tem>
    </div>
    <div>
      <el-divider content-position="left"
        >全部评论</el-divider
      >
      <commment-tem
        v-for="item in allcomments"
        :key="item.index"
        :item="item"
      ></commment-tem>
    </div>
    <p v-if="loading">加载中...</p>
  </div>
</template>

<script>
import CommmentTem from "./commenttem";

export default {
  name: "Comment",
  components: {
    CommmentTem,
  },
  props: {
    allcomments: Array,
    hotcomments: Array,
  },
  data() {
    return {
      allcommentsnumber: 0,
      hotcommentsnumber: 0,
      loading: false,
    };
  },
  computed: {
    disabled() {
      return this.loading;
    },
  },
  methods: {
    commentsnumberall() {
      // return this.allcomments.length;
      // console.log(this.allcomments.length)
    },
    commentsnumberhot() {
      // return this.hotcomments.length;
      // this.hotcommentsnumber=this.hotcomments.length
    },
    // commentloadmore() {
    //   this.$bus.$emit("commentloadmore");
    //   this.loading = true;
    //   setTimeout(() => {
    //     this.loading = false;
    //   }, 2000);
    // },
  },
};
</script>

<style>
.comment-a {
  overflow: hidden;
}
.comment-a button {
  float: right;
  margin-right: 30px;
  margin-top: 10px;
}
</style>
