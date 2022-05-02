<template>
  <section class="instruction">
    <div class="container__1280">
      <div class="column">
        <div class="title">{{ $t("instruction.title") }}</div>
        <div class="row">
          <div class="leftHint">
            <arrow-with-text arrow="up" :label="$t('instruction.leftHint')" />
          </div>
          <div class="tab">
            <page-item icon="logo_green" label="Findtrend - Elon Musk" />
          </div>
          <div class="rightHint">
            <arrow-with-text :label="$t('instruction.rightHint')" />
          </div>
        </div>
        <div class="subtitle">{{ $t("instruction.subtitle") }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArrowWithText from "./UI/ArrowWithText.vue";
import PageItem from "./UI/PageItem.vue";

export default defineComponent({
  components: { ArrowWithText, PageItem },
  name: "InstructionSection",
});
</script>

<style scoped>
.instruction {
  background: #a8ff35;
  position: relative;
}
.column {
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 60px;
}
.title {
  font-weight: 700;
  font-size: 72px;
  line-height: 86px;
  text-align: center;
}
.row {
  display: flex;
  column-gap: 560px;
  align-items: center;
  height: 202px;
}

.subtitle {
  line-height: 150%;
  text-align: center;
  color: #000000;
  max-width: 666px;
}
.tab {
  padding: 60px 80px;
  background: #f5f5f5;
  border-radius: 16px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.leftHint {
  margin-top: -40px;
}
.rightHint {
  margin-top: -80px;
}
@media (max-width: 768px) {
  .title {
    font-size: 36px;
    line-height: 112%;
  }
  .leftHint {
    display: none;
  }
  .rightHint {
    display: none;
  }
  .column {
    padding: 80px 0;
    row-gap: 30px;
  }
  .tab {
    padding: 24px;
    border-radius: 14px;
  }
  .subtitle {
    font-size: 14px;
    line-height: 150%;
  }
}
</style>
