<template>
  <el-card class="Pollution_lvl" shadow="always">
    <template #header>
      <div class="card-header">
        <span>污染等级</span>
      </div>
    </template>
    <div>
      <span style="font-size: 17px">{{ pollution_lvl }}</span>
    </div>
  </el-card>
  <el-card class="region_distribute">
    <template #header>
      <div class="card-header">
        <span>区域贡献</span>
        <el-button class="button" type="text">查看详情</el-button>
      </div>
    </template>
    <div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </div>
  </el-card>
  <el-card class="near_source_distribute">
    <template #header>
      <div class="card-header">
        <span>近源贡献</span>
        <el-button class="button" type="text">查看详情</el-button>
      </div>
    </template>
    <div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </div>
  </el-card>
  <el-card class="suggestions">
    <template #header>
      <div class="card-header">
        <span>决策</span>
      </div>
    </template>
    <div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </div></el-card
  >
</template>

<script>
export default {
  name: "rt-col",
  data() {
    return {
      pollution_lvl: "污染等级5",
    };
  },
};
</script>

<style scoped>
</style>