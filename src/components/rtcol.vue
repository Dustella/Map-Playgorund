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
  <!-- v-model="dialogVisible" -->
  <el-dialog
    v-model="dialogVisible"
    title="详细指标"
    width="50%"
    @opened="opens"
  >
    <span>图</span>
    <div class="gram">
      <echart :option="chartPieData" autoresize="true" ref="pieChart"></echart>
      </div>
    <template #footer>
      <span class="dialog-footer"> </span>
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
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import ECharts from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  name: "rt-col",
  setup: () => {
    const dialogVisible = ref(false);

    const chartPieData = ref({
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
    });

    return { chartPieData, dialogVisible };
  },
  data() {
    return {
      pollution_lvl: "污染等级5",
      // chartPieData: {
      //   series: [
      //     {
      //       type: "pie",
      //       data: [
      //         {
      //           value: 335,
      //           name: "直接访问",
      //         },
      //         {
      //           value: 234,
      //           name: "联盟广告",
      //         },
      //         {
      //           value: 1548,
      //           name: "搜索引擎",
      //         },
      //       ],
      //     },
      //   ],
      // },
    };
  },

  components: {
    echart: ECharts,
  },
});
</script>

<style scoped>
.gram {
  position: relative;
  margin: 0 auto;
  padding: auto;
  height: 50vh;
  width:50vw;
}
</style>