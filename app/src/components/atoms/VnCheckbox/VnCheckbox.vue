<template>
  <q-checkbox class="vn-checkbox" :val="value" :label="label" />
</template>

<script setup lang="ts">
interface VnCheckboxProps {
  label?: string;
  value: never;
}

withDefaults(defineProps<VnCheckboxProps>(), {
  label: '',
});
</script>

<style scoped lang="scss">
.vn-checkbox {
  :deep(.q-checkbox__inner::before) {
    display: none;
  }
}
</style>
