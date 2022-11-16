<template>
  <q-btn-dropdown
    no-caps
    class="vn-dropbox"
    unelevated
    :ripple="false"
    :menu-offset="menuOffset"
    :padding="paddingBtn"
    content-class="vn-dropbox__content"
  >
    <template #label>
      <div class="vn-dropbox__label">
        {{ label }}
      </div>
    </template>
    <slot> </slot>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
interface VnDropboxProps {
  label?: string;
  size?: 'S' | 'M' | 'L';
  style?: 'primary' | 'secondary' | 'outline';
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
  menuOffset?: [number, number];
  paddingBtn?: string;
}

withDefaults(defineProps<VnDropboxProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  disabled: false,
  paddingBtn: '0 0',
});
</script>

<style lang="scss">
.vn-dropbox {
  &__label {
    font-weight: 400;
  }
}
</style>
