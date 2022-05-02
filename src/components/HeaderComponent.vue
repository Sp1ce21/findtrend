<template>
  <header class="header">
    <div class="logo_wrapper">
      <img src="../assets/svgs/logo_green.svg" alt="logo" class="logo" />
      <div class="label">Findtrend</div>
    </div>
    <nav class="navigation">
      <ul class="list">
        <li
          class="list_item"
          v-for="{ link, label } in HeaderNavigation"
          :key="link"
        >
          <a href="#" class="link">{{ label }}</a>
        </li>
      </ul>
    </nav>
    <div class="authorization">
      <div class="login">{{ $t("header.login") }}</div>
      <div class="register">{{ $t("header.register") }}</div>
    </div>
    <div class="burger__button" @click="isBurger = true"><span /><span /></div>
    <menu-burger
      :HeaderNavigation="HeaderNavigation"
      :style="`right: ${isBurger ? 0 : -110}%`"
      class="menu__burger"
      @closeMenu="closeMenu"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TranslateResult } from "vue-i18n";
import { i18n } from "@/translation/translation";
import MenuBurger from "@/components/MenuBurger.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    MenuBurger,
  },
  setup() {
    const navigationLabels = JSON.parse(JSON.stringify(i18n.global.messages))[
      i18n.global.locale
    ].header;
    interface IHeaderNavigation {
      label: string | TranslateResult;
      link: string;
    }

    const HeaderNavigation: IHeaderNavigation[] = [
      {
        label: navigationLabels.about,
        link: "/about",
      },
      {
        label: navigationLabels.howitworks,
        link: "/howitworks",
      },
      {
        label: navigationLabels.pricing,
        link: "/pricing",
      },
      {
        label: navigationLabels.solution,
        link: "/solution",
      },
      {
        label: navigationLabels.features,
        link: "/features",
      },
    ];

    const isBurger = ref<boolean>(false);
    const closeMenu = () => {
      isBurger.value = false;
    };
    return { HeaderNavigation, isBurger, closeMenu };
  },
});
</script>

<style scoped>
.header {
  height: 99px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo_wrapper {
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  width: 214px;
}
.logo {
  background: #000000;
}
.label {
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #ffffff;
}
.navigation {
}
.list {
  display: flex;
  align-items: center;
  column-gap: 40px;
}
.list_item {
}
.link {
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;
}
.authorization {
  display: flex;
  align-items: center;
  column-gap: 40px;
  width: 214px;
}
.login {
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
.burger__button {
  display: none;
}

@media (max-width: 1024px) {
  .navigation {
    display: none;
  }
  .authorization {
    display: none;
  }
  .label {
    display: none;
  }
  .burger__button {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 6px;
    cursor: pointer;
  }
  .burger__button span {
    width: 18px;
    height: 2px;
    background: #fff;
  }
  .menu__burger {
    transition: 0.5s;
  }
}
</style>
