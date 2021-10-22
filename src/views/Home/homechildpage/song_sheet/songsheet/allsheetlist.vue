<template>
  <div class="songsheet">
    <button class="button" @click="button">{{currentselect}}</button>
    <div class="allselect" v-show="isshow">
      <div @click="all($event)" class="all">全部歌单</div>
      <div>语种</div>
      <div class="theme1">
        <span
          v-for="item in allsheetlist"
          :key="item.index"
          class="span1"
          v-if="item.category == 0"
          @click="SelectType1($event)"
        >
        {{item.name}}
        </span>
      </div>
      <div>风格</div>
      <div class="theme2">
        <span
          v-for="item in allsheetlist"
          :key="item.index"
          class="span1"
          v-if="item.category == 1"
          @click="SelectType1($event)"
        >
        {{item.name}}
        </span>
      </div>
      <div>场景</div>
      <div class="theme3">
        <span
          v-for="item in allsheetlist"
          :key="item.index"
          class="span1"
          v-if="item.category == 2"
          @click="SelectType1($event)"
        >
        {{item.name}}
        </span>
      </div>
      <div>情感</div>
      <div class="theme4">
        <span
          v-for="item in allsheetlist"
          :key="item.index"
          class="span1"
          v-if="item.category == 3"
          @click="SelectType1($event)"
        >
        {{item.name}}
        </span>
      </div>
      <div>主题</div>
      <div class="theme5">
        <span
          v-for="item in allsheetlist"
          :key="item.index"
          class="span1"
          v-if="item.category == 4"
          @click="SelectType1($event)"
        >
        {{item.name}}
        </span>
      </div>
    </div>
    <div class="allsheet">
      <div>
        <li
          v-for="(item, index) in hotsheetlist"
          :key="item.name"
          @click="SelectType(index, $event)"
          v-bind:class="{ active: isactive == index }"
        >
        {{item.name}}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllSheetList",
  props: {
    allsheetlist: {
      type: Array,
      default() {
        return [];
      },
    },
    hotsheetlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isshow: false,
      iselse: false,
      isactive: -1,
      currentselect:'全部歌单',
    };
  },
  methods: {
    SelectType(index, event) {
      this.isactive = index;
      // console.log(event.currentTarget.innerHTML);
      this.$emit("hotsel", event.currentTarget.innerHTML);
    },
    SelectType1(event) {
      this.currentselect=event.currentTarget.innerHTML;
      this.isshow = false;
      // this.isactive = index;
      // console.log(event.currentTarget.innerHTML);
      this.$emit("allsel", event.currentTarget.innerHTML);
    },
    all(event){
      this.currentselect=event.currentTarget.innerHTML;
      this.isshow = false;
      this.$emit('all',event.currentTarget.innerHTML)
    },
    button() {
      this.isshow = !this.isshow;
    },
  },
};
</script>

<style>
.button {
  margin: 20px 20px;
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px;
  background-color: white;
  float: left;
}
.all{
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;
}
.all:hover{
  color: orange;
}
.songsheet {
  position: relative;
}
.allsheet {
  float: left;
  text-align: center;
  height: 82.5px;
  width: 88.6%;
  color: #808080;
}
.allsheet div {
  float: right;
}
.allsheet li {
  margin: 30px 25px 30px 0px;
  padding: 5px;
  float: left;
}
.active {
  background-color: #dcdcdc;
  border-radius: 5px;
  color: #FF4500;
}
.allselect {
  height: 534px;
  width: 400px;
  position: absolute;
  left: 921px;
  top: 82.5px;
  background-color: #8c8c8c;
  z-index: 999;
  border: 2px #8c8c8c solid;
  border-radius: 10px;
  animation: bounce-in-right 1.1s both;
}
.theme1 {
  height: 40px;
  width: 100%;
  color: white;
}
.theme2 {
  height: 100px;
  width: 100%;
  color: white;
}
.theme3 {
  height: 70px;
  width: 100%;
  color: white;
}
.theme4 {
  height: 70px;
  width: 100%;
  color: white;
}
.theme5 {
  height: 70px;
  width: 100%;
  color: white;
}
.span1 {
  float: left;
  margin: 3px;
  padding: 3px;
}
.span1:hover {
  color: orange;
}
@keyframes bounce-in-right {
  0% {
    transform: translateX(600px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(68px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(32px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
}

</style>
