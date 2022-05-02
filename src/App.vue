<template>
    <home-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "./views/HomeView.vue";
export default defineComponent({
  name: "App",
  components: { HomeView },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Effra;
  font-size: 18px;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
.container__1280 {
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;
}
@font-face {
  font-family: "Effra";
  src: url("~@/assets/fonts/Effra.ttf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Effra";
  src: url("~@/assets/fonts/Effra-Medium.ttf");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Effra";
  src: url("~@/assets/fonts/Effra-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Effra";
  src: url("~@/assets/fonts/Effra-Heavy.ttf");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "GoodDogNew";
  src: url("~@/assets/fonts/GoodDogNew.ttf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Inter";
  src: url("~@/assets/fonts/Inter-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Inter";
  src: url("~@/assets/fonts/Inter-Medium.ttf");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Inter";
  src: url("~@/assets/fonts/Inter-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("~@/assets/fonts/Poppins-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("~@/assets/fonts/Poppins-SemiBold.ttf");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("~@/assets/fonts/Poppins-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: url("~@/assets/fonts/Roboto-Regular.ttf");
  font-weight: 4defineComponent (00);
  font-style: normal;
}
</style>
