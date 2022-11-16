<template>
  <q-checkbox class="fr-checkbox" :val="value" :label="label" />
</template>

<script setup lang="ts">
interface FrCheckboxProps {
  label?: string;
  value: never;
}

withDefaults(defineProps<FrCheckboxProps>(), {
  label: '',
});
</script>

<style scoped lang="scss">
.fr-checkbox {
  :deep(.q-checkbox__inner::before) {
    display: none;
  }
}
</style>
