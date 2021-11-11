<template>
  <el-card class="CQI_RP" shadow="always">
    <div class="text item" shadow="always">AQI预报</div>
  </el-card>
  <el-card class="null-card">数据1</el-card>
  <el-card class="null-card">数据2</el-card>
  <el-card class="null-card">数据3</el-card>
</template>

<script>
export default {
  name: "leftcol",
  data() {},
};
</script>

<style scoped>
.CQI_RP {
  height: 15vh;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.null-card {
  height: 15vh;
}
</style>
