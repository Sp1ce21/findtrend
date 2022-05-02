<template>
  <router-link :class="itemStyle" :to="route.path">
    <img
      :src="require(`../assets/svgs/posts/socialmedia${index + 1}.svg`)"
      alt="logo"
      class="image"
    />
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      itemStyle: {
        item: true,
        active: false,
      },
    };
  },
  props: {
    route: [Object],
    index: [Number],
  },
  mounted() {
    if (this.$route.path === this.route.path) this.itemStyle.active = true;
    else this.itemStyle.active = false;
  },
  watch: {
    "$route.path"() {
      if (this.$route.path === this.route.path) this.itemStyle.active = true;
      else this.itemStyle.active = false;
    },
  },
};
</script>

<style scoped>
.item {
  width: 124px;
  height: 124px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  object-fit: contain;
}
.active {
  background: #a8ff35;
}
</style>
