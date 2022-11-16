import 'src/css/quasar.variables.scss';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import '../src/css/app.scss';
import { app } from '@storybook/vue3';
import { Quasar } from 'quasar';
import { setCssVar } from 'quasar';

setCssVar('primary', '#E92C42');
setCssVar('secondary', '#ff4c4c');
setCssVar('accent', '#00a300');
setCssVar('positive', '#45ff70');
setCssVar('negative', '#ba4553');
setCssVar('info', '#00d4ff');
setCssVar('warning', '#f2c037');

app.use(Quasar, {});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
