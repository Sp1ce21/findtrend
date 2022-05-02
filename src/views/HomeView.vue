<template>
  <div class="home">
    <div class="main__screen">
      <div class="container__1280">
        <header-component />
        <title-component />
      </div>
    </div>
    <instruction-section />
    <companies-section />
    <posts-section />
    <price-component />
    <join-us />
    <footer-component/>
  </div>
</template>

<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import InstructionSection from "@/components/InstructionSection.vue";
import { defineComponent } from "vue";
import CompaniesSection from "@/components/CompaniesSection.vue";
import PostsSection from "@/components/PostsSection.vue";
import PriceComponent from "@/components/PriceComponent.vue";
import JoinUs from "@/components/JoinUs.vue";
import FooterComponent from '@/components/FooterComponent.vue'
export default defineComponent({
  name: "HomeView",
  components: {
    HeaderComponent,
    TitleComponent,
    InstructionSection,
    CompaniesSection,
    PostsSection,
    PriceComponent,
    JoinUs,
    FooterComponent
  },
});
</script>

<style scoped>
.home {
  max-width: 100vw;
  overflow: hidden;
}
.main__screen {
  width: 100vw;
  height: 100vh;
  background: url("../assets/pngs/background.png");
}
</style>
