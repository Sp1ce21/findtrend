<template>
  <footer class="footer">
    <div class="container__1280">
      <div class="row">
        <div class="logo__wrapper">
          <img
            src="../assets/svgs/logo__black.svg"
            alt="logo black"
            class="logo"
          />
          <div class="logo__text">Findtrend</div>
        </div>
        <div class="links">
          <div class="link">{{ $t("footer.privacy") }}</div>
          <div class="link">{{ $t("footer.terms") }}</div>
          <div class="link">{{ $t("footer.contact") }}</div>
          <div class="link">{{ $t("footer.careers") }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.footer {
  padding: 30px 0;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo__wrapper {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.logo {
  width: 40px;
  height: 40px;
}
.logo__text {
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
}
.links {
  display: flex;
  gap: 40px;
  align-items: center;
}
.link {
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer{
    padding: 80px 0;
  }
  .row {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .logo__wrapper {
    margin-bottom: 80px;
  }
  .links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
