<template>
  <section class="ring-loader-container" :style="`height: ${height}; width: ${width}`">
    <div :style="`border-color: ${color} transparent transparent transparent;border-width: ${thickness}; height: ${height}; width: ${width}`" />
    <div :style="`border-color: ${color} transparent transparent transparent;border-width: ${thickness}; height: ${height}; width: ${width}`" />
    <div :style="`border-color: ${color} transparent transparent transparent;border-width: ${thickness}; height: ${height}; width: ${width}`" />
    <div :style="`border-color: ${color} transparent transparent transparent;border-width: ${thickness}; height: ${height}; width: ${width}`" />
  </section>
</template>

<script>
export default {
  name: 'RingLoader',
  props: {
    color: {
      type: String,
      default: '#fff',
    },
    thickness: {
      type: String,
      default: '3px',
    },
    width: {
      type: String,
      default: '25px',
    },
    height: {
      type: String,
      default: '25px',
    },
  },
};
</script>

<style>
.ring-loader-container {
  display: inline-block;
  width: 25px;
  height: 25px;
}
.ring-loader-container div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: ring-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.ring-loader-container div:nth-child(1) {
  animation-delay: -0.45s;
}
.ring-loader-container div:nth-child(2) {
  animation-delay: -0.3s;
}
.ring-loader-container div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes ring-loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.button .ring-loader-container {
  visibility: invisible;
  position: absolute;
  animation: natural;
  transition-duration: 0.15;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
