<template>
  <div class="price">
    <div class="container__1280">
      <div class="column">
        <div class="title">{{ $t("price.title") }}</div>
        <div class="radio__wrapper">
          <custom-radio
            :leftText="$t('price.radio__monthly')"
            :rightText="$t('price.radio__yearly')"
            @setRadio="setRadio"
          />
          <arrow-with-text
            color="white"
            :label="$t('price.hint')"
            class="hint"
          />
        </div>
        <div class="row">
          <price-item
            class="item"
            v-for="(item, index) in cardsInfo"
            :key="index"
            :card="item"
            :prices="prices"
            :index="index"
          ></price-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from "vue";
import ArrowWithText from "./UI/ArrowWithText.vue";
import { i18n } from "@/translation/translation";
import PriceItem from "@/components/PriceItem.vue";
export default defineComponent({
  components: {
    ArrowWithText,
    PriceItem,
  },
  setup() {
    const currentRadio = ref<boolean>(false);
    const prices = ref<any>([0, 0, 0]);
    const cardsInfo = reactive<any>(
      JSON.parse(JSON.stringify(i18n.global.messages))[i18n.global.locale].price
        .cards
    );

    const setRadio = (value: boolean) => {
      currentRadio.value = value;
    };

    watchEffect(() => {
      if (currentRadio.value) {
        prices.value = [6, 16, 40];
      } else {
        prices.value = [8, 20, 48];
      }
    });

    return { cardsInfo, setRadio, currentRadio, prices };
  },
});
</script>

<style scoped>
.price {
  background: #000;
}
.column {
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
}
.radio__wrapper {
  position: relative;
  margin-bottom: 40px;
}
.hint {
  position: absolute;
  right: -110px;
  top: 6px;
}
.row {
  display: flex;
  gap: 42px;
  justify-content: center;
}
.item {
  flex: 0 0 360px;
}

@media (max-width: 1200px) {
  .row {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .radio__wrapper {
    margin-bottom: 80px;
  }
  .hint {
    display: none;
  }
  .title {
    font-size: 36px;
    line-height: 43px;
  }
  .column {
    padding: 80px 0;
  }
}
</style>
