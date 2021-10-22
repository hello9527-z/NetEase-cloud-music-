<template>
  <div id="app">
    <leftnav></leftnav>
    <topnav></topnav>
    <audio-play></audio-play>
    <router-view></router-view>
  </div>
</template>

<script>
import Leftnav from "./components/left-nav/left-nav";
import Topnav from "./components/topnav/topnav";
import AudioPlay from "./components/AudioPlay/audioplay"

export default {
  name: "app",
  components: {
    Leftnav,
    Topnav,
    AudioPlay
  },
};
</script>
<style>
</style>
