<template>
  <div :class="buttonStyle">
    <div class="label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "vue";

export default defineComponent({
  name: "custom-button",
  props: {
    label: String,
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const buttonStyle = reactive({
      button__wrapper: true,
      reverse: false,
    });
    watchEffect(() => {
      if (props.isReverse) {
        buttonStyle.reverse = true;
      }
    });
    return { buttonStyle };
  },
});
</script>

<style scoped>
.button__wrapper {
  background: #a8ff35;
  border-radius: 40px;
  padding: 16px 32px;
  min-width: 180px;
  cursor: pointer;
}
.label {
  font-weight: 700;
  line-height: 140%;
  text-align: center;
}
.reverse {
  color: #fff;
  background: #000;
}

@media (max-width: 768px) {
  .button__wrapper {
    padding: 12px 24px;
  }
  .label {
    font-size: 14px;
    line-height: 140%;
  }
}
</style>
