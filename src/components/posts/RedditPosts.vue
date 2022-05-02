<template>
  <iframe
    id="reddit-embed"
    src="https://www.redditmedia.com/r/poland/comments/ubhhko/true_size_and_latitude_of_poland_vs_north_america/?ref_source=embed&amp;ref=share&amp;embed=true"
    sandbox="allow-scripts allow-same-origin allow-popups"
    style="border: none"
    height="498"
    width="640"
    scrolling="no"
    class="reddit"
  ></iframe>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.reddit{
  max-width: 100%;
}
</style>