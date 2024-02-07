<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const start = () => {
    const ballList = document.querySelectorAll(".g-ball");
    console.log(ballList);
    ballList.forEach((ball, index) => {
      ball.setAttribute("style", `animation-delay: ${index * 0.2 + 0.1}s;`);
    });
  };
  start();
});
</script>

<template>
  <div>
    <div class="box">
      <div class="g-container">
        <div class="g-first"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
        <div class="g-ball"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  background: #000;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 300px;
  filter: contrast(30);
}

.g-container {
  margin: auto;
  position: relative;
  width: 10vmin;
  height: 10vmin;
  filter: blur(30px);
}

.g-ball,
.g-first {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  transform: translate(-700%, 0);
  opacity: 0;
  // animation: move 3s infinite linear;
}
.g-first {
  animation: scaleMove 3.5s infinite linear;
}
.g-ball {
  animation: move 3.5s infinite linear;
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }
  50% {
    opacity: 1;
    transform: translate(1vw, 0);
  }
  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-10vw, 0);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: translate(1vw, 0) scale(2);
  }
  90%,
  100% {
    opacity: 0;
    transform: translate(1vw, 0) scale(1);
  }
}
</style>
