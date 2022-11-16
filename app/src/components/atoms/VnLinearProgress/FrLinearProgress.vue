<template>
  <q-linear-progress
    dark
    stripe
    rounded
    size="40px"
    :value="value.length / 40"
    color="secondary"
    class="fr-linear-progress q-mt-sm"
  />
</template>

<script setup lang="ts">
export interface FrLinearProgressProps {
  value?: string;
}
defineProps<FrLinearProgressProps>();
</script>

<style scoped></style>
