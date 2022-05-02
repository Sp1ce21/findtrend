<template>
  <section class="join__us">
    <div class="container__1280">
      <div class="column">
        <div class="titles">
          <div class="black__title">{{ $t("joinUs.black__title") }}</div>
          <div class="grey__title">{{ $t("joinUs.grey__title") }}</div>
        </div>
        <custom-button
          class="button"
          :label="$t('joinUs.button')"
          :isReverse="true"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "JoinUs",
});
</script>

<style scoped>
.join__us {
  background: #a8ff35;
}
.column {
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titles {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  font-weight: 900;
  font-size: 72px;
  line-height: 112%;
  text-align: center;
}
.black__title {
}
.grey__title {
  color: #87d322;
}
.button {
}

@media (max-width: 768px) {
  .column {
    padding: 80px 0;
  }
  .titles {
    font-size: 36px;
  }
}
</style>
