<template>
  <div class="column">
    <div class="title">{{ $t("mainScreen.title") }}</div>
    <div class="subtitle">{{ $t("mainScreen.subtitle") }}</div>
    <div class="button__row">
      <custom-button :label="$t('mainScreen.button')" />
      <arrow-with-text
        color="white"
        :label="$t('mainScreen.description')"
        class="description"
      />
    </div>
    <div class="pages__row">
      <page-item
        v-for="{ label, icon, deg, coordinates, id } in pages"
        :key="id"
        :label="label"
        :icon="icon"
        :deg="deg"
        :coordinates="coordinates"
        :id="id"
        :isMainScreen="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "./UI/CustomButton.vue";
import PageItem from "./UI/PageItem.vue";
export default defineComponent({
  components: { CustomButton, PageItem },
  setup() {
    const pages = [
      {
        icon: "twitter",
        label: "Cryptopunk - Search",
        deg: -4,
        coordinates: {
          defaultLeft: -700,
          top: 30,
          right: 0,
          bottom: 0,
          left: -550,
        },
        id: "1",
      },
      {
        icon: "pinterest",
        label: "Popular Design - Search",
        deg: 2,
        coordinates: {
          defaultLeft: -352,
          top: 65,
          right: 0,
          bottom: 0,
          left: -352,
        },
        id: "2",
      },
      {
        icon: "facebook",
        label: "Product Design - Search",
        deg: -2,
        coordinates: {
          defaultLeft: -4,
          top: 15,
          right: 0,
          bottom: 0,
          left: -100,
        },
        id: "3",
      },
      {
        icon: "ball",
        label: "Elon Mask - Search",
        deg: 4,
        coordinates: {
          defaultLeft: 344,
          top: 80,
          right: 0,
          bottom: 0,
          left: 164,
        },
        id: "4",
      },
    ].reverse();

    return { pages };
  },
});
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.7%;
}
.title {
  font-weight: 900;
  font-size: 72px;
  line-height: 112%;
  text-align: center;
  color: #ffffff;
  max-width: 700px;
  margin-bottom: 24px;
}
.subtitle {
  line-height: 150%;
  text-align: center;
  color: #8b8b8b;
  max-width: 620px;
  margin-bottom: 40px;
}
.button__row {
  position: relative;
}
.description {
  position: absolute;
  top: -10px;
  right: -111px;
}
.pages__row {
  margin-top: 15px;
  display: flex;
  position: relative;
}
@media (max-width: 768px) {
  .title {
    font-size: 36px;
    line-height: 112%;
  }
  .subtitle {
    font-size: 14px;
    line-height: 150%;
  }
  .button__row {
    max-width: 139px;
  }
  .description {
    display: none;
  }
  .column {
    margin-top: 20%;
  }
}
@media (max-width: 1024px) {
  .pages__row {
    display: none;
  }
}
</style>
