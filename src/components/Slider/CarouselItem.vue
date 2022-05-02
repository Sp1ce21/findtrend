<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <!-- <div class="line" ref="line"></div> -->
      <div class="row">
        <div class="background" v-for="(slide, _index) in slides" :key="_index">
          <img
            :src="require(`../../assets/svgs/companies/brand${_index + 1}.svg`)"
            :alt="'company logo ' + index"
            class="image"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout", "animationLine"],
  props: ["slides", "slide", "currentSlide", "index", "direction", "isAnim"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
  mounted() {
    // this.setAnim();
    // this.$refs.line.style.top = -400 + "px";
    // this.$refs.line.style.left = -650 + "px";
    // if (this.isAnim) {
    //   this.setAnim();
    // }
  },
  // methods: {
  //   setAnim() {
  //     if (this.isAnim) {
  //       setInterval(this.myMove, 6000);
  //     } else {
  //       this.$refs.line.style.display = "none";
  //     }
  //   },
  //   myMove() {
  //     const elem = this.$refs.line;
  //     let pos = -650;
  //     const id = setInterval(frame, 5);
  //     function frame() {
  //       if (pos == 1150) {
  //         clearInterval(id);
  //       } else {
  //         pos += 5;
  //         elem.style.left = pos + "px";
  //       }
  //     }
  //   },
  // },
};
</script>

<style scoped>
.carousel-item {
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
.row {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
.background {
  background: #f5f5f5;
  border-radius: 8px;
  width: 266px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 0 0 266px;
  cursor: pointer;
}
.background:hover {
  background: #a8ff35;
  transition: 0.1s ease;
}
.image {
  object-fit: contain;
  max-width: 80%;
}
.line {
  width: 20px;
  height: 2000px;
  background: rgba(204, 204, 204, 0.293);
  position: absolute;
  transform: rotate(45deg);
  transition: ease;
  pointer-events: none;
}
@media (max-width: 1200px) {
  .row {
    justify-content: center;
  }
}

@media (max-width: 900px) {
  .background {
    width: 102px;
    height: 84px;

    flex: 0 0 35%;
  }
}

@media (max-width: 740px) {
  .row {
    transform: scale(0.9, 0.9);
  }
}

@media (max-width: 675px) {
  .row {
    transform: scale(0.75, 0.75) translate(0, -90px);
  }
}

@media (max-width: 550px) {
  .row {
    transform: scale(0.65, 0.65) translate(0, -220px);
  }
}

@media (max-width: 485px) {
  .row {
    transform: scale(0.55, 0.55) translate(0, -310px);
  }
}

@keyframes animation-line {
  0% {
    top: -1115px;
    left: -230px;
  }
  100% {
    top: 100%;
    left: 100%;
  }
}
</style>
