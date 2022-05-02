<template>
  <div class="radio__row">
    <div :class="leftStyle">{{ leftText }}</div>
    <div class="radio" @click="switchRadio">
      <div :class="radioStyle" ref="circle"></div>
    </div>
    <div :class="rightStyle">{{ rightText }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  name: "custom-radio",
  props: {
    leftText: {
      type: String,
      required: true,
    },
    rightText: {
      type: String,
      required: true,
    },
  },
  setup(_, { emit }) {
    const radio = ref<boolean>(false);
    const circle = ref<any>(null);

    const radioStyle = reactive({
      circle: true,
      right__position: false,
    });

    const leftStyle = {
      item: true,
      grey: false,
    };
    const rightStyle = {
      item: true,
      grey: false,
    };

    watchEffect(() => {
      radioStyle.right__position = radio.value;
      leftStyle.grey = radio.value;
      rightStyle.grey = !radio.value;
    });

    const switchRadio = () => {
      radio.value = !radio.value;
      emit("setRadio", radio.value);
    };

    return { leftStyle, rightStyle, radioStyle, radio, switchRadio, circle };
  },
});
</script>

<style scoped>
.item {
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #fff;
  transition: 0.5s;
}
.radio__row {
  display: flex;
  column-gap: 24px;
  align-items: center;
}
.radio {
  width: 104px;
  height: 52px;
  background: #ffffff;
  border-radius: 99px;
  display: flex;
  cursor: pointer;
}
.circle {
  width: 36px;
  height: 36px;
  background: #a8ff35;
  border-radius: 99px;
  margin: 8px;
  position: relative;
  left: 0px;
  transition: left 0.5s;
}
.right__position {
  left: 50px;
  transition: left 0.5s;
}
.grey {
  color: #f5f5f5;
  opacity: 0.5;
  transition: 0.5s;
}
</style>
