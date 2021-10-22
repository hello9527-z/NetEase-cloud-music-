<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <i class="iconfont icon-fanhui" @click="$router.back(-1)"></i>
    </div>
    <div class="top-nav-center">
      <div>
        <el-autocomplete
          class="inline-input"
          v-model="keywords"
          :fetch-suggestions="querySearch"
          placeholder="请输入搜索内容"
          @keyup.enter.native="submit"
        >
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
            <span class="content">{{ item.content }}</span>
          </template>
        </el-autocomplete>
      </div>
      <div class="inputsearch"></div>
    </div>
    <div class="top-nav-right" v-if="code == 400">
      <div>
        <div @click="loginshow">点击登录</div>
        <i class="iconfont icon-geren"></i>
      </div>
    </div>
    <div v-if="code == 200" class="top-login-success">
      <img :src="img" alt="" class="imghover" />
      <div class="information">
        <div>用户名称: {{ nickname }}</div>
        <div :clase="{ activevip: isvip }"><i>VIP</i></div>
        <div @click="signout">退出登录</div>
      </div>
    </div>
    <div class="top-nav-login" v-show="isshow">
      <div class="close">
        <i class="iconfont icon-xiala" @click="close"></i>
      </div>
      <login @loginsuccess="loginsuccess"></login>
    </div>
  </div>
</template>

<script>
import Login from "../login/login";
import { getSignOut, getSearchHot } from "../../network/hswiper";
export default {
  name: "Topnav",
  components: {
    Login,
  },
  data() {
    return {
      isshow: false,
      code: 400,
      nickname: "",
      img: "",
      viptype: 0,
      isvip: false,
      keywords: "",
      SearchSuggestions: [],
      // nihao:[
      //   { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
      //     { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
      // ]
    };
  },
  created() {
    this.getlocal(), this.getSearchHot();
  },
  methods: {
    goback() {
      this.$router.history.back();
    },
    loginshow() {
      this.isshow = !this.isshow;
    },
    close() {
      this.isshow = false;
    },
    getlocal() {
      this.nickname = localStorage.getItem("名称");
      this.img = localStorage.getItem("头像");
      this.viptype = localStorage.getItem("vip");
      if (this.nickname) {
        this.code = 200;
      }
    },
    loginsuccess() {
      this.getlocal();
      if (this.viptype != 0) {
        this.isvip = true;
      }
      // console.log(this.nickname)
      if (this.nickname) {
        this.code = 200;
      }
      this.isshow = false;
    },
    getSignOut() {
      getSignOut().then((response) => {
        // console.log(response);
      });
    },
    getSearchHot() {
      getSearchHot().then((response) => {
        // console.log(response);
        for (let item of response.data) {
          this.SearchSuggestions.push({ value: item.searchWord,content:item.content });
        }
        // console.log(this.SearchSuggestions);
      });
    },
    signout() {
      this.code = 400;
      this.getSignOut();
      localStorage.removeItem("名称");
      localStorage.removeItem("头像");
      localStorage.removeItem("vip");
      localStorage.removeItem("userid");
    },
    querySearch(queryString, cb) {
      var restaurants = this.SearchSuggestions;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    submit(){
      // console.log(keywords)
      if (this.keywords!='') {
        this.$router.push({path:`/search/${this.keywords}`})
      }
    }
  },
};
</script>

<style>
.top-nav {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 50px;
  width: 1321px;
  text-align: center;
  box-shadow: 1px 0px 3px #dcdcdc;
}
.top-nav-left {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
}
.top-nav-left i {
  display: block;
  margin-top: 15px;
  font-size: 20px;
}
.top-nav-left i:hover {
  color: red;
  font-size: 25px;
}
.top-nav-center {
  text-align: left;
  position: absolute;
  left: 100px;
  top: 0px;
  width: 1021px;
}
.top-nav-center div {
  width: 300px;
  border-radius: 10px;
  margin-top: 2px;
}

.top-nav-right {
  margin-top: 5px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 300px;
}
.top-nav-right i {
  float: right;
  display: block;
  font-size: 35px;
}
.top-nav-right div {
  margin: 0px 40px 0px 10px;
  float: right;
  display: block;
  margin-top: 5px;
}
.top-nav-login {
  position: absolute;
  background-color: #F5F5F5;
  border: 2px solid #dcdcdc;
  z-index: 555;
  width: 400px;
  height: 500px;
  left: 450px;
  top: 100px;
}
.close {
  width: 100%;
  height: 30px;
  text-align: right;
}
.close i {
  font-size: 30px;
}
.top-login-success {
  position: absolute;
  right: 0px;
  top: 0px;
  text-align: left;
  width: 100px;
}
.top-login-success img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.top-login-success:hover .information {
  display: block;
}
.information {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50px;
  right: 0px;
  background-color: #191970;
  /* filter:blur(1px) ; */
  z-index: 444;
  display: none;
}
.information div {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #00FFFF;
  border-bottom: 1px solid #00FFFF;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.information div:hover {
  border-bottom: 1px solid #00FFFF;
  box-shadow: 0px 3px 5px #00FFFF;
}
.activevip {
  color: red;
}
.inputsearch {
  width: 300px;
  height: 500px;
  position: absolute;
  left: 0px;
  top: 50px;
  z-index: 666;
  display: none;
}
.content{
  margin-left: 20px;
  font-size: 12px;
  color: #8c8c8c;
}
.name{
  height: 20px;
}
.el-autocomplete-suggestion li{
  height: 45px;
  line-height: 0px;
}
</style>
