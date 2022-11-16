<template>
  <q-pagination
    v-model="current"
    color="black"
    :ripple="false"
    unelevated
    :max="10"
    :max-pages="6"
    :boundary-numbers="false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const current = ref(5);
</script>

<style scoped></style>
