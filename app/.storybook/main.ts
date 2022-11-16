import { InlineConfig, mergeConfig } from 'vite';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);
const config = {
  stories: ['../src/**/*.stories.ts', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, options) {
    const cfg: InlineConfig = {
      resolve: {
        alias: {
          src: resolve(projectRootDir, '/src'),
          components: resolve(projectRootDir, '/src/components'),
        },
      },
      build: {
        sourcemap: 'inline',
      },
      server: {},
    };
    return mergeConfig(config, cfg);
  },
};

export default config;
