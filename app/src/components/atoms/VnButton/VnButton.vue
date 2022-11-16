<template>
  <q-btn
    class="vn-button"
    no-caps
    color="primary"
    unelevated
    :ripple="false"
    :outline="style === 'outline'"
    :loading="loading"
    :disable="disabled"
  >
    <div v-if="leftIcon?.name" class="vn-button__icon-left">
      <q-icon :name="leftIcon.name" />
    </div>
    <span class="vn-button__content">
      {{ label }}
    </span>
  </q-btn>
</template>

<script setup lang="ts">
export interface VnButtonProps {
  label?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  mainIcon?: {
    name: string;
  };
  leftIcon?: {
    name: string;
  };
  rightIcon?: {
    name: string;
  };
}

withDefaults(defineProps<VnButtonProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  loading: false,
  disabled: false,
});
</script>

<style scoped lang="scss">
.vn-button {
  width: 126px;
  border-radius: 20px;
  height: 46px;
  font-weight: 700;
}
</style>
