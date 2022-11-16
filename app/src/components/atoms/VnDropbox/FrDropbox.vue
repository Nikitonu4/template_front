<template>
  <q-btn-dropdown
    no-caps
    class="fr-dropbox"
    unelevated
    :ripple="false"
    :menu-offset="menuOffset"
    :padding="paddingBtn"
    content-class="fr-dropbox__content"
  >
    <template #label>
      <div class="fr-dropbox__label">
        {{ label }}
      </div>
    </template>
    <slot> </slot>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
interface FrDropboxProps {
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

withDefaults(defineProps<FrDropboxProps>(), {
  label: '',
  size: 'M',
  style: 'primary',
  disabled: false,
  paddingBtn: '0 0',
});
</script>

<style lang="scss">
.fr-dropbox {
  &__label {
    font-weight: 400;
  }
}
</style>
