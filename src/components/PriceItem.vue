<template>
  <div
    class="wrapper"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    ref="wrapper"
  >
    <div class="column">
      <div class="title">{{ card.title }}</div>
      <div class="subtitle">{{ card.subtitle }}</div>
      <div class="line"></div>
      <div class="price__row">
        <div class="price">{{ prices[index] }}</div>
        <div class="time">/{{ card.time }}</div>
      </div>
      <div class="list">
        <div
          class="list__item"
          v-for="(point, index) in card.list"
          :key="index"
        >
          <div class="tick">
            <img src="../assets/svgs/tick.svg" alt="tick" />
          </div>
          <div class="point">{{ point }}</div>
        </div>
      </div>
    </div>
    <div class="button" ref="button">{{ card.button }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    card: {
      type: [Object],
      required: true,
    },
    prices: { type: Array, required: true },
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const wrapper = ref<any>(null);
    const button = ref<any>(null);
    const onMouseEnter = () => {
      if (wrapper.value && button.value) {
        wrapper.value.style.background = "#a8ff35";
        button.value.style.background = "#000000";
        button.value.style.color = "#ffffff";
      }
    };
    const onMouseLeave = () => {
      if (wrapper.value && button.value) {
        wrapper.value.style.background = "#ffffff";
        button.value.style.background = "#a8ff35";
        button.value.style.color = "#000000";
      }
    };
    return { onMouseEnter, onMouseLeave, wrapper, button };
  },
});
</script>

<style scoped>
.wrapper {
  font-size: 18px;
  line-height: 100%;
  background: #fafafa;
  border-radius: 16px;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  transition: 0.3s;
}
.column {
  margin-bottom: 30px;
}
.title {
  font-size: 36px;
  margin-bottom: 13px;
}
.subtitle {
  margin-bottom: 32px;
}
.line {
  opacity: 0.2;
  background: #000;
  height: 1px;
  width: 100%;
  margin-bottom: 32px;
}
.price__row {
  display: flex;
  column-gap: 6px;
  align-items: flex-end;
}
.price {
  font-size: 64px;
}
.time {
  margin-bottom: -15px;
}
.list {
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.list__item {
  display: flex;
  align-items: flex-start;
  column-gap: 10px;
}
.button {
  font-weight: 700;
  line-height: 140%;
  text-align: center;
  background: #a8ff35;
  border-radius: 29px;
  padding: 16px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
  }
  .price {
  font-size: 60px;
}
}
</style>
