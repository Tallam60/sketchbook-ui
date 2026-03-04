import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    showBorder: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle me',
  },
};

export const Checked: Story = {
  args: {
    label: 'I am checked',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled & checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Switch {...args} size="sm" label="Small Switch" />
      <Switch {...args} size="md" label="Medium Switch" />
      <Switch {...args} size="lg" label="Large Switch" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switch components in different sizes: small, medium, and large.',
      },
    },
  },
};

export const WithoutLabel: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '2rem' }}>
      <Switch {...args} showLabel={false} size="sm" />
      <Switch {...args} showLabel={false} size="md" />
      <Switch {...args} showLabel={false} size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switch components without labels, useful when the context is clear.',
      },
    },
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Switch {...args} label="Normal Off" />
        <Switch {...args} label="Normal On" defaultChecked />
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Switch {...args} label="Disabled Off" disabled />
        <Switch {...args} label="Disabled On" disabled defaultChecked />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All possible states of the switch component: normal and disabled, both on and off.',
      },
    },
  },
};

export const Customization: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Switch {...args} label="Default" />
        <Switch 
          {...args} 
          label="Red Theme" 
          colors={{ 
            track: "#fee2e2", 
            trackChecked: "#fecaca", 
            stroke: "#dc2626", 
            strokeChecked: "#dc2626",
            text: "#dc2626" 
          }} 
        />
        <Switch 
          {...args} 
          label="Green Theme" 
          colors={{ 
            track: "#dcfce7", 
            trackChecked: "#bbf7d0", 
            stroke: "#16a34a", 
            strokeChecked: "#16a34a",
            text: "#16a34a" 
          }} 
        />
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Switch 
          {...args} 
          label="BOLD CAPS" 
          typography={{ textTransform: "uppercase", fontWeight: "bold" }} 
        />
        <Switch 
          {...args} 
          label="Custom Font" 
          typography={{ fontSize: "1.2rem", fontFamily: "serif" }} 
        />
        <Switch 
          {...args} 
          label="No Border"
          showBorder={false}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize colors and typography to match your design needs.',
      },
    },
  },
};