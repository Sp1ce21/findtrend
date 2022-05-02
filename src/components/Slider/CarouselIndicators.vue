<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: -45px;
  z-index: 2;
}
.carousel-indicator-item {
  width: 15px;
  height: 15px;
  border: none;
  background: #ccc;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}
.active {
  opacity: 1;
}

@media (max-width: 740px) {
  .carousel-indicators {
    bottom: 14px;
  }
}
@media (max-width: 675px) {
  .carousel-indicators {
    bottom: 145px;
  }
}
@media (max-width: 550px) {
  .carousel-indicators {
    bottom: 280px;
    transform: scale(0.8, 0.8) translate(-60%, 0);
  }
}
@media (max-width: 485px) {
  .carousel-indicators {
    bottom: 340px;
    transform: scale(0.6, 0.6) translate(-80%, 0);
  }
}
</style>
