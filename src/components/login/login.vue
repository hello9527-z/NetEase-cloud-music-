<template>
  <div class="login">
    <div class="user"><i class="iconfont icon-geren"></i></div>
    <div class="account">
    <el-input placeholder="请输入手机号" v-model="account" clearable> </el-input>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    </div>
    <el-button :plain="true" @click="login">登录</el-button>
  </div>
</template>

<script>
import { getLogin } from "../../network/hswiper";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      code: 0,
    };
  },
  watch: {},
  methods: {
    getLogin(account, password) {
      getLogin(account, password).then((response) => {
        // console.log(response)
        if (response.code == 200) {
          localStorage.setItem("头像", response.profile.avatarUrl);
          localStorage.setItem("名称", response.profile.nickname);
          localStorage.setItem("userid", response.profile.userId);
          localStorage.setItem("vip", response.profile.vipType);
        }
        this.code = response.code;
      });
    },
    login() {
      this.getLogin(this.account, this.password);
      if (this.code == 400) {
        this.$message.error("账号或密码错误");
      }
      if (this.code == 200) {
        this.$message({
          message: "登录成功",
          type: "success",
        });
        (this.account = ""), (this.password = ""), this.$emit("loginsuccess");
      }
    },
  },
};
</script>
<style scoped>
.login {
  width: 400px;
  margin: 40px auto;
}
.user i {
  font-size: 200px;
  color: red;
}
.account {
  margin: 10px 50px;
}

button {
  background-color: #00BFFF;
}
</style>
