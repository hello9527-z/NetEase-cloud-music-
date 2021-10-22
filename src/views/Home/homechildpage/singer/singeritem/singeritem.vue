<template>
  <div class="singertem">
      <li
        v-for="item in singerlist"
        :key="item.index"
        @click="singerdetail(item.id)"
        class="singertem-a"
      >
        <div><img v-lazy="item.picUrl" alt=""/></div>
        <p>{{ item.name }}</p>
      </li>
  </div>
</template>

<script>
export default {
  name: "SingerTem",
  props: {
    singerlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    singerdetail(id){
      this.$router.push({path:`/detailsinger/${id}`})
    }
  }
}
</script>

<style>
.singertem {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 1261px;
  margin: 0 auto;
}
.singertem-a {
  margin: 0px 0px 20px 45px;
  width: 200px;
  height: 200px;
  background-color: #dcdcdc;
  text-align: center;
}
.singertem-a div {
  margin-top: 20px;
  margin-left: 25px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}
.singertem-a img {
  width: 150px;
  height: 150px;
}

.singertem-a:hover {
  background-color: #8c8c8c;
}
</style>
