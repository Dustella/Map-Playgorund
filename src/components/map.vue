<template>
  <div id="container" style="height: 100%; width: 100%"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "Map",
  data() {},
  methods: {},
  mounted() {
    AMapLoader.load({
      key: "1b6f01b040e207443a367497bca8b7dd", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: "1.1", // AMapUI 缺省 1.1
        plugins: [], // 需要加载的 AMapUI ui插件
      },
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: "1.3.2", // Loca 版本，缺省 1.3.2
      },
    })
      .then((AMap) => {
        var map = new AMap.Map("container", {
          zoom: 11, //级别
          center: [118.770068, 32.046573], //中心点坐标
          viewMode: "3D", //使用3D视图
        });
        // map.addControl(new AMap.Scale());
        var marker1 = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [118.760963, 32.066454],
        });
        var marker2 = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [118.760693, 32.056464],
        });
        var marker3 = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [118.766093, 32.065644],
        });
        var marker4 = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [118.766093, 32.065644],
        });
        var marker5 = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [118.766093, 32.065644],
        });
        var marker6 = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [118.766093, 32.065644],
        });

        map.add(marker1);
        map.add(marker2);
        map.add(marker3);
        map.add(marker4);
        map.add(marker5);
        map.add(marker6);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
.mapping {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  /* padding: 100%; */
}
</style>
