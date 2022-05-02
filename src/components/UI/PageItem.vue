<template>
  <div ref="ball" class="tab__block">
    <div class="row">
      <div class="icon__wrapper">
        <img
          :src="require(`../../assets/svgs/${icon}.svg`)"
          alt="favicon"
          class="icon"
        />
      </div>
      <marquee direction="left" class="label">{{ label }}</marquee>
      <div class="cross__wrapper">
        <img
          src="../../assets/svgs/white_cross.svg"
          alt="cross"
          class="cross"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "page-item",
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    deg: {
      type: [String, Number],
      default: 0,
    },
    coordinates: [Object],
    isMainScreen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any) {
    const ball = ref<any>(null);

    onMounted(() => {
      if (ball.value && props.isMainScreen) {
        const screenWidth = window.screen.width;
        const screenHeigth = window.screen.height;

        const {
          top = 0,
          right = 0,
          bottom = 0,
          left = 0,
          defaultLeft = 0,
        } = props.coordinates;

        ball.value.style.position = "absolute";
        ball.value.style.top = 0;
        ball.value.style.left = `${defaultLeft}px`;

        ball.value.style.transform = "rotate(0deg)";

        setTimeout(() => {
          ball.value.style.transform = `rotate(${props.deg}deg)`;
          ball.value.style.top = `${top}px`;
          ball.value.style.bottom = `${bottom}px`;
          ball.value.style.left = `${left}px`;
          ball.value.style.right = `${right}px`;
        }, 1000);

        ball.value.onmousedown = function (e: any) {
          ball.value.style.transition = "none";
          var coords = getCoords(ball.value);
          var shiftX = e.pageX - coords.left;
          var shiftY = e.pageY - coords.top;

          ball.value.style.position = "absolute";
          document.body.appendChild(ball.value);

          const moveAt = (e: any) => {
            if (e.pageX - shiftX > 1 && e.pageX - shiftX <= screenWidth / 1.3) {
              if (
                e.pageY - shiftY >= screenHeigth / 1.66 &&
                e.pageY - shiftY < screenHeigth / 1.4
              ) {
                ball.value.style.left = e.pageX - shiftX + "px";
                ball.value.style.top = e.pageY - shiftY + "px";
              }
            }
          };

          moveAt(e);

          ball.value.style.zIndex = 1000;

          document.onmousemove = function (e) {
            moveAt(e);
          };

          ball.value.onmouseup = function () {
            document.onmousemove = null;
            ball.value.onmouseup = null;
          };
        };

        ball.value.ondragstart = function () {
          return false;
        };

        const getCoords = (elem: any) => {
          var box = elem.getBoundingClientRect();

          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
          };
        };
      }
    });
    return { ball };
  },
});
</script>

<style scoped>
.cross__wrapper {
  cursor: pointer;
}
.tab__block {
  background: #181818;
  -webkit-box-shadow: 6px 6px 11px -4px rgb(0, 0, 0);
  -moz-box-shadow: 6px 6px 11px -4px rgb(0, 0, 0);
  box-shadow: 6px 6px 11px -4px rgb(0, 0, 0);
  transition: 0.5s;
  height: 82px;
  width: 348px;
}
.row {
  padding: 0 21px 0 40px;
  display: flex;
  align-items: center;
  height: 82px;
  column-gap: 15px;
}
.label {
  font-family: "Roboto";
  font-size: 23.8064px;
  line-height: 28px;
  color: #ffffff;
  max-width: 202px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  margin-top: -4px;
  display: block;
  width: 100%;
}
.label::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    #181818 100%
  );
}
</style>
