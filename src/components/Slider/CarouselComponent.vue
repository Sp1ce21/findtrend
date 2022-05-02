<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-indicators
        v-if="indicators"
        :total="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      ></carousel-indicators>
      <div class="overflow__hidden">
        <carousel-item
          v-for="(slide, index) in slides"
          :slide="slide"
          :slides="slides"
          :key="`item-${index}`"
          :current-slide="currentSlide"
          :index="index"
          :direction="direction"
          :isAnim="isAnim"
          @mouseenter="stopSlideTimer"
          @mouseout="startSlideTimer"
        ></carousel-item>
      </div>
      <carousel-controls
        v-if="controls"
        @prev="prev"
        @next="next"
      ></carousel-controls>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";

export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
    controls: {
      type: Boolean,
      default: false,
    },
    indicators: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 5000000000,
    },
  },
  components: { CarouselItem, CarouselControls, CarouselIndicators },
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
    isAnim: true,
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, this.interval);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
}
.overflow__hidden {
  overflow: hidden;
  width: 1160px;
  height: 576px;
  position: relative;
}

@media (max-width: 1200px) {
  .overflow__hidden {
    width: 980px;
    height: 900px;
  }
}

@media (max-width: 900px) {
  .overflow__hidden {
    height: 930px;
  }
}
</style>
