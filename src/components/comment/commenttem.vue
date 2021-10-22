<template>
  <div class="commenttem">
    <div class="comment-tital">
      <img :src="item.user.avatarUrl" alt="" />
      <span>{{ item.user.nickname }}</span>
    </div>
    <div class="comment-content">{{ item.content }}</div>
    <div class="comment-footer">
      <span>{{dateFormat(item.time, "YYYY-MM-DD HH:MM:SS") }}</span>
      <span class="comment-right">
        <span>点赞{{ item.likedCount }}</span>
        <span>回复</span>
      </span>
    </div>
    <hr />
  </div>
</template>

<script>
import dateFormat from "../../utils/format";
export default {
  name: "CommentTem",
  props: {
    item: Object,
  },
  methods: {
    dateFormat(str,type){
      return dateFormat(str,type)
    }
  },
};
</script>

<style>
.commenttem {
  font-size: 12px;
}
.comment-tital {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 5px;
}
.comment-tital img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  float: left;
}
.comment-content {
  width: 100%;
  margin-bottom: 5px;
  margin-left: 50px;
}
.comment-footer {
  width: 100%;
  height: 20px;
  line-height: 20px;
}
.comment-right {
  float: right;
}
.comment-right span {
  float: left;
  margin-right: 10px;
}
hr{
  opacity: 0.2;
}
</style>
