<template>
  <q-linear-progress
    dark
    stripe
    rounded
    size="40px"
    :value="value.length / 40"
    color="secondary"
    class="vn-linear-progress q-mt-sm"
  />
</template>

<script setup lang="ts">
export interface VnLinearProgressProps {
  value?: string;
}
defineProps<VnLinearProgressProps>();
</script>

<style scoped></style>
