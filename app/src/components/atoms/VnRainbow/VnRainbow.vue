<template>
  <ul class="vn-rainbow">
    <li v-for="color in colors" :key="color" :style="`color: ${color}`" :class="['vn-rainbow__layer']">
      {{ word }}
    </li>
  </ul>
</template>

<script setup lang="ts">
export interface VnRainbowProps {
  word: string;
  colors?: string[];
}
withDefaults(defineProps<VnRainbowProps>(), {
  colors: () => ['#fff', '#DEBF40', '#5ACB3C', '#44A3F7', '#CF52EB', '#D14B3D', '#D49C3D'],
});
</script>

<style lang="scss">
:root {
  --color-background: #31037d;
  --axis-x: 1px;
  --axis-y: 1rem;
  --delay: 10;
  --color-black: #000;
  --font-name: Roboto;
}

body {
  background-color: var(--color-background);
}

.vn-rainbow {
  counter-reset: rainbow;
  position: relative;
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;

  &__layer {
    counter-increment: rainbow;
    font-size: 5rem;
    color: var(--text-color);
    text-shadow: -1px -1px 0 var(--color-black), 1px -1px 0 var(--color-black), -1px 1px 0 var(--color-black),
      1px 1px 0 var(--color-black), 4px 4px 0 rgba(0, 0, 0, 0.2);
    animation: rainbow 1.5s ease-in-out infinite;

    @for $i from 1 through 7 {
      &:nth-child(#{$i}) {
        animation-delay: calc(#{$i} / var(--delay) * 1s);
        left: calc(var(--axis-x) * #{$i});
        z-index: -#{$i * 10};
      }
    }

    &:not(:first-child) {
      position: absolute;
      top: 0;
    }
  }
}

@keyframes rainbow {
  0%,
  100% {
    transform: translatey(var(--axis-y));
  }
  50% {
    transform: translatey(calc(var(--axis-y) * -1));
  }
}
</style>
