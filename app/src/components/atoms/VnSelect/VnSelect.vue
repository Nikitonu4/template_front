<template>
  <q-select
    class="vm-select"
    :label="label"
    rounded
    options="options"
    :autocomplete="autocomplete"
    use-input
    @filter="filterFn"
  />
</template>

<script setup lang="ts">
export interface VnSelectProps {
  label?: string;
  options: any;
  autocomplete?: any;
  value?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}
withDefaults(defineProps<VnSelectProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  loading: false,
  disabled: false,
});
</script>

<style scoped lang="scss">
.vn-select {
}
</style>
