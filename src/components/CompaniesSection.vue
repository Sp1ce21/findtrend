<template>
  <div class="container__1280">
    <div class="column">
      <div class="title">
        {{ $t("companies.title") }}
        <span class="colorized__title">{{ $t("companies.span") }}</span>
      </div>
      <div class="slider__wrapper">
        <div class="label">{{ $t("companies.label") }}</div>
        <div class="slider">
          <carousel-component :slides="slides" controls indicators />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarouselComponent from "./Slider/CarouselComponent.vue";
export default defineComponent({
  components: { CarouselComponent },
  setup() {
    const slides = [
      "../../assets/svgs/companies/brand1.svg",
      "@/assets/svgs/companies/brand2",
      "@/assets/svgs/companies/brand3",
      "@/assets/svgs/companies/brand4",
      "@/assets/svgs/companies/brand5",
      "@/assets/svgs/companies/brand6",
      "@/assets/svgs/companies/brand7",
      "@/assets/svgs/companies/brand8",
      "@/assets/svgs/companies/brand9",
      "@/assets/svgs/companies/brand10",
      "@/assets/svgs/companies/brand11",
      "@/assets/svgs/companies/brand12",
      "@/assets/svgs/companies/brand13",
      "@/assets/svgs/companies/brand14",
      "@/assets/svgs/companies/brand15",
      "@/assets/svgs/companies/brand16",
    ];
    return { slides };
  },
});
</script>

<style scoped>
.column {
  padding: 140px 0;
}
.title {
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  margin-bottom: 280px;
}
.colorized__title {
  color: #adadad;
}
.slider__wrapper {
}
.label {
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  text-align: center;
  margin-bottom: 80px;
}
.slider {
}
@media (max-width: 768px) {
  .title {
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 160px;
  }
  .label {
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 32px;
  }
  .column {
    padding: 80px 0 0;
    max-height: 1400px;
  }
}
</style>
