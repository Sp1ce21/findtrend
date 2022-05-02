<template>
  <section class="posts">
    <div class="container__1280">
      <div class="column">
        <div class="title">{{ $t("posts.title") }}</div>
        <div class="row">
          <list-item
            v-for="(route, index) in routes"
            :key="route.path"
            :route="route"
            :index="index"
          ></list-item>
        </div>

        <div class="posts__list">
          <router-view></router-view>
        </div>
        <div class="button">{{ $t("posts.button") }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routes } from "@/router/index";
import ListItem from "./ListItem.vue";
export default defineComponent({
  name: "PostsSection",
  components: { ListItem },
  setup() {
    return { routes };
  },
});
</script>

<style scoped>
.posts {
  background: #fafafa;
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
  margin-bottom: 80px;
}
.row {
  display: flex;
  gap: 24px;
  margin-bottom: 77px;

  overflow-x: scroll;
  max-width: 100%;
}
.item {
  width: 124px;
  height: 124px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 124px;
}
.image {
  object-fit: contain;
}
.active {
  background: #a8ff35;
}
.button {
  margin-top: 80px;
  background: #000000;
  border-radius: 40px;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  padding: 16px 32px;
  cursor: pointer;
}
.row::-webkit-scrollbar {
  width: 0;
}
@media (max-width: 1024px) {
  .row {
    align-self: flex-start;
  }
}
@media (max-width: 768px) {
  .title {
    margin-bottom: 32px;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
  }
}
</style>
