<template>
  <div>
    <li
      v-for="item in songlist"
      :key="item.index"
      :class="{ playcolor: musicid == item.id }"
      class="musiclist-top"
    >
      <div class="musiclist-a">
        <p>
          <span>{{ item.name }}</span>
          <i class="iconfont icon-yinleyule" v-if="item.fee == 1"></i>
          <i class="iconfont icon-shipin" v-if="item.mvid != 0"></i>
        </p>
        <div class="icon">
          <i
            class="iconfont icon-bofang"
            v-if="isplay == 1 || musicid != item.id"
            @click="chnageplay(item.id,item)"
          ></i>
          <i
            class="iconfont icon-zhengzaibofang"
            v-if="isplay == 2 && musicid == item.id"
            @click="changeplay1"
          ></i>
          <i class="iconfont icon-xiai love"></i>
          <i class="iconfont icon-shoucang" @click="addto(item)"></i>
          <i class="iconfont icon-fenxiang"></i>
        </div>
      </div>
      <div class="musiclist-b" v-if="item.artists">
        <span v-for="i in item.artists" :key="i.index">{{ i.name }}</span>
      </div>
      <div class="musiclist-c" v-if="item.album.name">
        {{ item.album.name }}
      </div>
      <div class="musiclist-d" v-if="item.duration">
        {{ formatSongTime(item.duration) }}
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  props: {
    songlist: Array,
  },
  data() {
    return {

    };
  },
  computed: {
    isplay() {
      return this.$store.state.playButton;
    },
    musicid() {
      return this.$store.state.musicid;
    },
    playlist() {
      return this.$store.state.playlist;
    },
  },
  created() {},
  mounted() {},
  methods: {
    chnageplay(id,item) {
      this.$store.commit("changeplayButton", 1);
      this.$store.commit("changeMusicId", id);
      this.$store.commit("changeplayButton", 2);
      const findid1=this.playlist.indexOf(item.id)
      if (findid1==-1) {
        const songinformation1=item.id
        this.$store.commit("increment", songinformation1);
      }
    },
    changeplay1() {
      this.$store.commit("changeplayButton", 1);
    },
    addto(item) {
      const findid=this.playlist.indexOf(item.id)
      if (findid==-1) {
        const songinformation=item.id
        this.$store.commit("increment", songinformation);
        const msg1=this.$message({
          message: '添加成功',
          type: 'success',
          duration:1000,
          showClose:true
        });
      }
      else{
        const msg2=this.$message({
          message: '歌曲以存在播放列表',
          type: 'warning',
          duration:1000,
          showClose:true
        });
      }
    },
    formatSongTime(duration) {
      duration = duration / 1000;
      const m = (Math.floor(duration / 60) + "").padStart(2, "0");
      const s = (Math.floor(duration % 60) + "").padStart(2, "0");
      return `${m}:${s}`;
    },
  },
};
</script>

<style>
.musiclist-top {
  margin-left: 20px;
  padding: 5px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 2px;
  color: #5d5d5d;
}
.musiclist-top:hover {
  background-color: #dcdcdc;
  opacity: 0.7;
}
.musiclist-top:hover .icon i {
  display: block;
}
.musiclist-a {
  width: 45%;
  float: left;
  overflow: hidden;
  flex-wrap: wrap;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.musiclist-a p {
  width: 30%;
  float: left;
  overflow: hidden;
  flex-wrap: wrap;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.musiclist-a div {
  float: right;
}
.icon i {
  margin-right: 10px;
  display: none;
  float: left;
  font-size: 20px;
}
.musiclist-b {
  width: 22%;
  float: left;
  overflow: hidden;
  flex-wrap: wrap;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.musiclist-c {
  width: 22%;
  float: left;
  overflow: hidden;
  flex-wrap: wrap;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.musiclist-d {
  width: 11%;
  float: left;
}
.playcolor {
  color: #40E0D0 !important;
}
</style>
