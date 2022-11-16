import VnPagination from './VnPagination.vue';
import { VnPaginationProps } from './VnPagination.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnPagination',
  component: VnPagination,
  parameters: {},
  argTypes: {

  },
};

const Template: Story<VnPaginationProps> = (args: VnPaginationProps) => ({
  components: { VnPagination },
  setup() {
    return { args };
  },
  template: '<VnPagination v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {

};
