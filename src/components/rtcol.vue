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
        <el-button class="button" type="text" @click="dialogVisible = true"
          >查看详情</el-button
        >
      </div>
    </template>
    <div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </div>
  </el-card>

  <el-dialog
    v-model="dialogVisible"
    title="详细指标"
    width="50%"
    @open="open()"
  >
    <span>图</span>
    <div style="height: 50vh">
      <chart
        auto-resize
        :options="chartPieData"
        ref="chartPie"
        :style="{ width: '100%' }"
      ></chart>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>

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
    </div>
  </el-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";

export default defineComponent({
  name: "rt-col",
  setup() {
    const dialogVisible = ref(false);

    return {
      dialogVisible,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawline();
    });
  },
  data() {
    return {
      pollution_lvl: "污染等级5",
      chartPieData: {
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 1548,
                name: "搜索引擎",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    open() {
      this.$ECharts.init(this.$refs.chartPie).setOption(this.option1);
    },
  },
  components: {
    chart: ECharts,
  },
});
</script>