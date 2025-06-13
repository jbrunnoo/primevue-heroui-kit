import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '@primeui/vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    isIconOnly: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'Button',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    default: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    default: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    default: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    default: 'Warning Button',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    default: 'Danger Button',
  },
};

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="solid">Solid</Button>
        <Button variant="bordered">Bordered</Button>
        <Button variant="light">Light</Button>
        <Button variant="flat">Flat</Button>
        <Button variant="faded">Faded</Button>
        <Button variant="shadow">Shadow</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    isLoading: true,
    default: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    default: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    default: 'Full Width Button',
  },
};

export const Radius: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button radius="none">None</Button>
        <Button radius="sm">Small</Button>
        <Button radius="md">Medium</Button>
        <Button radius="lg">Large</Button>
        <Button radius="full">Full</Button>
      </div>
    `,
  }),
};
