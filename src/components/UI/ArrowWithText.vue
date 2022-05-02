<template>
  <div class="arrow__block">
    <div class="up__postition">
      <div ref="upArrow" class="up__arrow" v-if="arrow === 'up'">
        <img
          :src="require(`../../assets/svgs/arrow_${color}.svg`)"
          alt="arrow"
        />
      </div>
    </div>
    <div :class="'text' + ' ' + color">{{ animatedLabel }}</div>
    <div class="down__postition">
      <div ref="downArrow" class="down__arrow" v-if="arrow === 'down'">
        <img
          :src="require(`../../assets/svgs/arrow_${color}.svg`)"
          alt="arrow"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from "@vue/runtime-core";

type colorType = "black" | "white";
type arrowType = "up" | "down";

export default defineComponent({
  name: "arrow-with-text",
  props: {
    color: {
      type: String as PropType<colorType>,
      default: "black",
    },
    label: {
      type: String,
      required: true,
    },
    arrow: {
      type: String as PropType<arrowType>,
      default: "down",
    },
  },
  setup(props) {
    const upArrow = ref<any>(null);
    const downArrow = ref<any>(null);
    const isInViewport = (element: any) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    let animatedLabel: any = ref("");
    const writeTextByJS = (text: any, speed: number) => {
      let txt = Array.from(text);
      const timer = speed != undefined ? speed : 100;
      let interval = setInterval(function () {
        if (!txt[0]) {
          return clearInterval(interval);
        }
        animatedLabel.value += txt.shift();
        if (animatedLabel.value.length === text.length) {
          if (downArrow.value) downArrow.value.style.width = 40 + "px";

          if (upArrow.value) {
            upArrow.value.style.transition = " 0.55s opacity, 0.55s visibility";
            upArrow.value.style.opacity = 1;
            upArrow.value.style.visibility = "visible";
          }
        }
      }, timer);
      return false;
    };

    watchEffect(() => {
      if (upArrow.value) {
        upArrow.value.style.opacity = 0;
        upArrow.value.style.visibility = "hidden";

        window.onscroll = () => {
          if (isInViewport(upArrow.value)) {
            window.onscroll = null;
            writeTextByJS(props.label, 50);
          }
        };
      }

      if (downArrow.value) {
        downArrow.value.style.width = 0 + "px";

        // if (isInViewport(downArrow.value)) {
        //   document.onscroll = null;
        //   writeTextByJS(props.label, 50);
        // }

        const showHint = () => {
          if (isInViewport(downArrow.value)) {
            document.removeEventListener("scroll", showHint);
            writeTextByJS(props.label, 50);
          }
        };

        document.addEventListener("scroll", showHint);
      }
    });

    return { animatedLabel, upArrow, downArrow };
  },
});
</script>

<style scoped>
.text {
  font-family: "GoodDogNew";
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  transform: rotate(6deg);
  max-width: 93px;
}
.down__postition {
  transform: rotate(107.94deg);
  position: absolute;
  overflow: hidden;
}
.down__arrow {
  transition: 0.6s ease;
}
.up__postition {
  margin-top: -10px;
  transform: translate(40px, -30px) rotate(-72.06deg);
  overflow: hidden;
}
.up__arrow {
}
.black {
  color: #000;
}
.black svg path {
  fill: #000;
}
.white {
  color: #fff;
}
.white svg path {
  fill: #fff;
}
</style>
