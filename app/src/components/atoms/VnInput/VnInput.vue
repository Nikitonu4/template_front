<template>
  <q-input label-color="white" borderless clearable :label="label" :value="value" class="vn-input" />
</template>

<script setup lang="ts">
export interface VnInputProps {
  label?: string;
  value?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}
withDefaults(defineProps<VnInputProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  loading: false,
  disabled: false,
});
</script>

<style scoped lang="scss">
.vn-input {
  width: 100%;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 24px !important;
  //height: 60px;
  color: #fff;
  font-weight: 600;
  border: 3px solid #000000;
}
</style>
