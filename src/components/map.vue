<template>
<div>
  <img
    id="map"
    draggable="true"
    :src="mapsrc"
    alt="map"
    @mousedown="start($event)"
    @mouseup="stop"
    @mousemove="move($event)"
    :style="style"
    class="mapping"
  />
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      mapsrc: require("@/assets/map.jpg"),
      canDrag: false,
      x0: 0,
      y0: 0,
      x1: 0,
      y1: 0,
      style: null,
    };
  },
  methods: {
    start: function (e) {
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
      e.cancelBubble = true;
      e.returnValue = false;

      //鼠标左键点击
      if (e.button == 0) {
        this.canDrag = true;
        //记录鼠标指针位置
        this.x0 = e.clientX;
        this.y0 = e.clientY;
      }
    },
    stop: function () {
      this.canDrag = false;
    },
    move: function (e) {
      if (this.canDrag == true) {
        this.x1 = e.clientX;
        this.y1 = e.clientY;

        let x = this.x1 - this.x0;
        let y = this.y1 - this.y0;

        let img = document.querySelector("#map");
        this.style = `left:${img.offsetLeft + x}px;top:${img.offsetTop + y}px`;
        this.x0 = this.x1;
        this.y0 = this.y1;
        console.log(this.style);
      }
    },
  },
};
</script>

<style scoped>
.mapping {
    height:100%;
    width: 100%;
    left: 0;
    top: 0;
    /* padding: 100%; */
}
</style>
