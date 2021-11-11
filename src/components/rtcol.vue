<template>
  <el-card class="Pollution_lvl" shadow="always">
    <template #header>
      <div class="card-header">
        <span class="card-title">污染等级</span>
      </div>
    </template>
    <div>
      <span style="font-size: 17px">{{ pollution_lvl }}</span>
    </div>
  </el-card>

  <el-card class="region_distribute">
    <template #header>
      <div class="card-header">
        <span class="card-title">重点企业</span>
        <el-button class="button" type="text" @click="dialogZoneVisible = true"
          >查看详情</el-button
        >
      </div>
    </template>
    <div>
      <div v-for="o in infoZone" :key="o" class="text item">
        {{ "数据： " + o }}
      </div>
    </div>
  </el-card>

  <el-card class="near_source_distribute">
    <template #header>
      <div class="card-header">
        <span class="card-title">近源贡献</span>
        <el-button
          class="button"
          type="text"
          @click="dialogSourceVisible = true"
          >查看详情
        </el-button>
      </div>
    </template>
    <div>
      <div v-for="o in infoSource" :key="o" class="text item">
        {{ "数据： " + o }}
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
    </div>
  </el-card>

  <el-dialog v-model="dialogSourceVisible" title="污染来源" width="50%">
    <div class="gram">
      <echart :option="SourceData" autoresize="true" ref="pieChart"></echart>
    </div>
    <template #footer>
      <span class="dialog-footer"> </span>
    </template>
  </el-dialog>

  <el-dialog v-model="dialogZoneVisible" title="重点企业" width="50%">
    <div class="gram">
      <echart :option="ZoneData" autoresize="true" ref="pieChart"></echart>
    </div>
    <template #footer>
      <span class="dialog-footer"> </span>
    </template>
  </el-dialog>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import ECharts from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "rt-col",
  setup: () => {
    const dialogSourceVisible = ref(false);
    const dialogZoneVisible = ref(false);

    const SourceData = ref({
      series: [
        {
          type: "pie",
          data: [
            // {
            //   value: 335,
            //   name: "近源污染",
            // },
            {
              value: 100,
              name: "近源1",
            },
            {
              value: 100,
              name: "近源2",
            },
            {
              value: 135,
              name: "近源3",
            },
            {
              value: 234,
              name: "汽车尾气",
            },
            {
              value: 1548,
              name: "大气背景浓度",
            },
          ],
        },
      ],
    });
    const ZoneData = ref({
      series: [
        {
          type: "pie",
          data: [
            {
              value: 335,
              name: "企业1",
            },
            {
              value: 234,
              name: "企业2",
            },
            {
              value: 1548,
              name: "企业3",
            },
          ],
        },
      ],
    });

    return { SourceData, dialogSourceVisible, dialogZoneVisible, ZoneData };
  },
  data() {
    return {
      pollution_lvl: "污染等级5",
      infoZone: ["企业1", "企业2", "企业3"],
      infoSource: ["第一条数据", "第二条数据", "第三条数据"],
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
  width: 50vw;
}

.card-title {
  font-size: 18px;
}
</style>
