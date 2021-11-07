<template>
<el-header>南京市xxx监测系统</el-header>
<el-row>
  <el-col :span="4"><leftcol></leftcol></el-col>
  <el-col :span="16"><MMap></MMap></el-col>
  <el-col :span="4"><rtcol></rtcol></el-col>
</el-row>
</template>

<script>
import leftcol from "@/components/leftcol.vue";
import MMap from "@/components/map.vue";
import rtcol from "@/components/rtcol.vue";

export default {
  name: "App",
  components: {
    leftcol,
    MMap,
    rtcol,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
