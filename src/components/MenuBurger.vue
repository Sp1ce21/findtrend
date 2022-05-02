<template>
  <div class="menu__burger">
    <div class="row">
      <img src="../assets/svgs/logo_green.svg" alt="logo" class="logo" />
      <div class="cross" @click="$emit('closeMenu')"><span /><span /></div>
    </div>
    <div class="column">
      <nav class="navigation">
        <ul class="list">
          <li
            class="list_item"
            v-for="{ link, label } in HeaderNavigation"
            :key="link"
          >
            <a href="#" class="link">{{ label }}</a>
          </li>
          <div class="link">{{ $t("header.login") }}</div>
          <div class="register">{{ $t("header.register") }}</div>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    HeaderNavigation: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.menu__burger {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  background: #000;
  z-index: 5;
  overflow: hidden;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 24px 104px;
}
.cross {
  position: relative;
  cursor: pointer;
}
.cross span {
  width: 18px;
  height: 2px;
  background: #fff;
  display: flex;
}
.cross span:first-child {
  position: absolute;
  top: 0;
  left: -10px;
  transform: rotate(45deg);
}
.cross span:last-child {
  position: absolute;
  top: 0;
  left: -10px;
  transform: rotate(-45deg);
}
.link {
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
}
.register {
  background: #ffffff;
  border-radius: 40px;
  line-height: 100%;
  color: #000000;
  padding: 12px 32px;
  cursor: pointer;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  margin-bottom: 40px;
}
</style>
