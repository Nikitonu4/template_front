<template>
  <q-select
    class="fr-select"
    :label="label"
    rounded
    options="options"
    :autocomplete="autocomplete"
    use-input
    @filter="filterFn"
  />
</template>

<script setup lang="ts">
export interface FrSelectProps {
  label?: string;
  options: any;
  autocomplete?: any;
  value?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}
withDefaults(defineProps<FrSelectProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  loading: false,
  disabled: false,
});
</script>

<style scoped lang="scss">
.fr-select {
}
</style>
