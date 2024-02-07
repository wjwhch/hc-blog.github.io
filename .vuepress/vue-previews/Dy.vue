<script setup lang="ts"></script>

<template>
  <div>
    mix-blend-mode: lighten; filter: contrast(150%) brightness(110%);
    <div class="box">
      <div class="j"></div>
      <div class="j"></div>
    </div>

    <div class="box2">
      <div class="in">
        <div class="j jj"></div>
        <div class="j jj"></div>
        <div class="white"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  background-color: black;
  height: 500px;
  position: relative;
  filter: contrast(150%) brightness(110%);
  overflow: hidden;
}

.j {
  width: 47px;
  height: 218px;
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(0, -50%);
  background-color: #24f6f0;
  &::before,
  &::after {
    content: "";
    position: absolute;
    box-sizing: content-box;
  }
  &::before {
    width: 140px;
    height: 140px;
    border: 40px solid #24f6f0;
    border-radius: 100%;
    border-right-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
    top: -110px;
    left: 7px;
  }
  &::after {
    width: 100px;
    height: 100px;
    border: 47px solid #24f6f0;
    border-radius: 50%;
    border-top-color: transparent;
    transform: rotate(45deg);
    top: 119px;
    left: -147px;
  }
}

.j:nth-child(2) {
  mix-blend-mode: lighten;
  left: 80%;
  background-color: #fe2d52;
  transform: translate(0, calc(-50% + 7px));
  animation: move 3s linear 0s infinite;
  &::before {
    border-bottom-color: #fe2d52;
  }
  &::after {
    border-color: #fe2d52;
    border-top-color: transparent;
  }
}

@keyframes move {
  50% {
    left: calc(30% + 7px);
  }
  100% {
    left: calc(30% + 7px);
  }
}

.box2 {
  position: relative;
  height: 500px;
  background-color: #000;
  filter: contrast(200%);
}
.in {
  position: absolute;
  left: 50%;
  top: 80px;
  width: 47px;
  height: 300px;
}

.j.jj {
  left: 0;
  top: 0;
  transform: none;
  animation: shake 0.95s infinite;
}
.j.jj:nth-child(2) {
  left: 1px;
  // animation: none;
  animation: shake 0.95s infinite 0.2s;
}

.white {
  position: absolute;
  left: -147px;
  width: 270px;
  height: 1px;
  background: #000;
  z-index: 4;
  animation: whiteMove 10s ease-out infinite;
}
@keyframes whiteMove {
  9% {
    top: 30%;
  }
  14% {
    top: 8%;
  }
  18% {
    top: 40%;
  }
  22% {
    top: 1%;
  }
  32% {
    top: 80%;
  }
  34% {
    top: 12%;
  }
  40% {
    top: 90%;
  }
  43% {
    top: 7%;
  }
  99% {
    top: 90%;
  }
}

@keyframes shake {
  10% {
    top: -2.5px;
    left: -2.2px;
  }
  20% {
    top: 2.4px;
    left: -1.3px;
  }
  30% {
    left: 1.6px;
  }
  40% {
    top: -2.4px;
    left: -1.8px;
  }
  50% {
    left: 1.3px;
  }
  60% {
    top: 2.9px;
    left: -2.3px;
  }
  70% {
    top: -2.1px;
    left: 1.2px;
  }
  80% {
    top: -2.5px;
    left: -2px;
  }
  90% {
    left: 2.3px;
  }
  100% {
    left: -2.3px;
  }
}
</style>
