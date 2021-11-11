<template>
  <el-header>
    <span class="title">{{ title }}</span>
  </el-header>
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
  data() {
    return {
      title: "污染预警预报决策沙盘",
    };
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

.title {
  font-family: PingFang SC;
  font-size: 30px;
}
</style>
