<script setup lang="ts">
import { onMounted } from "vue";
const start = () => {
  const fireList = document.querySelectorAll(".g-dot");
  console.log(fireList);
  fireList.forEach((fire) => {
    const bottom = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    const left = Math.floor(Math.random() * 280 - 140);
    const time = (Math.random() * 27 + 7) / 10;
    const delay = (Math.random() * 4) / 10;
    fire.setAttribute(
      "style",
      `bottom: -${bottom}px; left: ${left}px;
      animation-duration: ${time}s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-delay: ${delay}s;
      `
    );
  });
};
onMounted(() => {
  console.log("????");
  start();
});
</script>

<template>
  <div>
    <div class="g-container">
      <div class="g-fire">
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
        <div class="g-dot"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@fireWidth: 115px;
@fireHeight: 200px;
@dotSize: 24px;
@fireColor: #b5932f;
.g-container {
  overflow: hidden;
  position: relative;
  width: 384px;
  height: 300px;
  margin: 0 auto;
  background-color: #000;
}

.g-fire {
  position: absolute;
  width: 0;
  height: 0;
  bottom: 50px;
  left: 50%;
  border-radius: 45%;
  box-sizing: border-box;
  border: 200px solid #000;
  border-bottom: 200px solid transparent;
  transform: translate(-50%, 0) scaleX(0.4);
  background-color: @fireColor;
  filter: blur(20px) contrast(30);
}

.g-dot {
  position: absolute;
  bottom: 0;
  left: 0;
  width: @dotSize;
  height: @dotSize;
  background: #000;
  border-radius: 50%;
  animation-name: move;
}

@keyframes move {
  100% {
    transform: translate3d(0, -300px, 0);
  }
}
</style>
