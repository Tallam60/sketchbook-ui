import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    iconOnly: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
      <Button {...args} size="sm">Small Sketch</Button>
      <Button {...args} size="md">Medium Sketch</Button>
      <Button {...args} size="lg">Large Sketch</Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '2rem' }}>
      <Button {...args} iconOnly size="sm">^</Button>
      <Button {...args} iconOnly size="md">{">"}</Button>
      <Button {...args} iconOnly size="lg">+</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact square buttons perfect for icons, arrows, or single characters.',
      },
    },
  },
};

export const DisabledStates: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Button {...args}>Normal Button</Button>
        <Button {...args} disabled>Disabled Button</Button>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Button {...args} iconOnly>{">"}</Button>
        <Button {...args} iconOnly disabled>{">"}</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons have faded colors, reduced opacity, and no hover effects.',
      },
    },
  },
};

export const Customization: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Button {...args}>Default</Button>
        <Button {...args} colors={{ bg: "#fee2e2", bgOverlay: "#fecaca", stroke: "#dc2626", text: "#dc2626" }}>Red Theme</Button>
        <Button {...args} colors={{ bg: "#dbeafe", bgOverlay: "#bfdbfe", stroke: "#2563eb", text: "#2563eb" }}>Blue Theme</Button>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Button {...args} typography={{ textTransform: "uppercase", fontWeight: "bold" }}>BOLD CAPS</Button>
        <Button {...args} typography={{ fontSize: "1.2rem", fontFamily: "serif" }}>Custom Font</Button>
        <Button {...args} showBorder={false}>No Border</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize colors, typography, and border visibility to match your design needs.',
      },
    },
  },
};

