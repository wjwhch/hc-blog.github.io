<script setup lang="ts">
</script>

<template>
  <div>
    <div class="blend">
      <span class="text">HELLO WORLD</span>
    </div>
  </div>
</template>

<style lang="less" scoped>

.blend {
  height: 200px;
  filter: contrast(50);
  background-color: #000;
  // font-family: LickiestGuy;
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    color: #fff;
    animation: blend 2s linear 0s infinite alternate;
  }
}

@keyframes blend {
  from {
    letter-spacing: -50px;
    filter: blur(10px);
  }
  to {
    letter-spacing: inherit;
    filter: blur(0);
  }
}
</style>
