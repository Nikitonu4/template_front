<template>
  <q-input borderless clearable value="value" class="fr-input" />
</template>

<script setup lang="ts">
export interface FrButtonProps {
  label?: string;
  value?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}
withDefaults(defineProps<FrButtonProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  loading: false,
  disabled: false,
});
</script>

<style scoped lang="scss">
.fr-input {
  width: 500px;
  font-size: 20px;
  padding-left: 10px;
  border-radius: 6px 0 0 6px !important;
  height: 60px;
  //color: #fff;
  font-weight: 600;
  border: 3px solid #000000;
}
</style>
