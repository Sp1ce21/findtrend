<template>
  <!-- in vue 2.x you need wrap these buttons in a div -->
  <button class="carousel-control left" @click="$emit('prev')">Prev</button>
  <button class="carousel-control right" @click="$emit('next')">Next</button>
</template>

<script>
export default {
  emits: ["prev", "next"], // vue v3
};
</script>
<style scoped>
.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}

@media (max-width: 1200px) {
  .left {
    left: 200px;
    top: 910px;
  }
  .right {
    right: 200px;
    top: 910px;
  }
}

@media (max-width: 900px) {
  .left {
    top: 940px;
  }
  .right {
    top: 940px;
  }
}

@media (max-width: 740px) {
  .left,
  .right {
    top: 880px;
  }
}
@media (max-width: 675px) {
  .left,
  .right {
    top: 748px;
  }
  .right {
    right: 230px;
  }
  .left {
    left: 230px;
  }
}
@media (max-width: 550px) {
  .left,
  .right {
    top: 610px;
  }
  .right {
    right: 270px;
  }
  .left {
    left: 270px;
  }
}
@media (max-width: 485px) {
  .left,
  .right {
    top: 555px;
  }
  .right {
    right: 300px;
  }
  .left {
    left: 300px;
  }
}
</style>
