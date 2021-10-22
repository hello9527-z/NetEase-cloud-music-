<template>
  <div>
    <div class="singer1">
      <li v-for="(i,index) in type" :key="index" v-on:click="singertype(index,$event)" :class="{active:istypeactive==index}">{{i}}</li>
    </div>
    <div class="singer2">
      <li v-for="(i,index) in area" :key="index" v-on:click="singerarea(index,$event)" :class="{active:isareaactive==index}">{{i}}</li>
    </div>
    <div class="singer3">
      <li v-for="(i,index) in initial" :key="index" v-on:click="singerinitial(index,$event)" :class="{active:isinitialactive==index}">{{i}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name:"SingerCat",
  data(){
    return{
      type:['全部','男歌手','女歌手','乐队'],
      area:['全部','华语','欧美','韩国','日本','其他'],
      initial:['热门','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
      istypeactive: 0,
      isareaactive: 0,
      isinitialactive: 0,
    }
  },
  methods:{
    singertype(index,event){
      this.istypeactive=index
      // console.log(event.currentTarget.innerHTML)
      this.$emit('singertype',event.currentTarget.innerHTML)
    },
    singerarea(index,event){
      this.isareaactive=index
      // console.log(event.currentTarget.innerHTML)
      this.$emit('singerarea',event.currentTarget.innerHTML)
    },
    singerinitial(index,event){
      this.isinitialactive=index
      // console.log(event.currentTarget.innerHTML)
      this.$emit('singerinitial',event.currentTarget.innerHTML)
    },
  }
}
</script>

<style>
.singer1 {
  overflow: hidden;
  margin-left: 30px;
  margin-bottom: 10px;
}
.singer2 {
  overflow: hidden;
  margin-left: 30px;
  margin-bottom: 10px;
}
.singer3 {
  overflow: hidden;
  margin-left: 30px;
  margin-bottom: 10px;
}
.singer1 li {
  float: left;
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid #8c8c8c;
  border-radius: 20px;
}
.singer2 li {
  float: left;
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid #8c8c8c;
  border-radius: 20px;
}
.singer3 li {
  float: left;
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid #8c8c8c;
  border-radius: 20px;

}
.active{
  background-color: #20B2AA;
  color: aliceblue;
}
</style>
