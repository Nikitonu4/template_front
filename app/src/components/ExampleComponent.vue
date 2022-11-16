<template>
  <div>
    <div class="flex">
      <fr-input v-model="value" :value="value" />
      <fr-button
        :label="'Искать'"
        :left-icon="{
          name: 'search',
        }"
      />
    </div>
    <fr-linear-progress :value="value" />
    <fr-dropbox />
    <div class="q-pa-lg flex flex-center">
      <fr-pagination />
    </div>
    <q-skeleton type="linear-progress" />
    <fr-toggle />
  </div>
</template>

<script setup lang="ts">
import FrButton from 'components/atoms/VnButton/FrButton.vue';
import FrInput from 'components/atoms/VnInput/FrInput.vue';
import FrPagination from 'components/atoms/VnPagination/FrPagination.vue';
import FrDropbox from 'components/atoms/VnDropbox/FrDropbox.vue';
import FrLinearProgress from 'components/atoms/VnLinearProgress/FrLinearProgress.vue';
import { ref } from 'vue';
import FrToggle from 'components/atoms/VnToggle/FrToggle.vue';
const value = ref('');
</script>
