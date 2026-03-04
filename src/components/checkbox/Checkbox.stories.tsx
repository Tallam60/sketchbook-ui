import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showBorder: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'I agree to the terms',
  },
};

export const Checked: Story = {
  args: {
    label: 'Already checked',
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Checkbox {...args} label="Disabled unchecked" disabled />
      <Checkbox {...args} label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Checkbox {...args} size="sm" label="Small checkbox" />
      <Checkbox {...args} size="md" label="Medium checkbox" />
      <Checkbox {...args} size="lg" label="Large checkbox" />
    </div>
  ),
};

export const Customization: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Checkbox {...args} label="Default" />
        <Checkbox 
          {...args} 
          label="Red Theme" 
          colors={{ 
            bg: "#fee2e2", 
            bgOverlay: "#fecaca", 
            stroke: "#dc2626", 
            text: "#dc2626",
            check: "#dc2626"
          }} 
        />
        <Checkbox 
          {...args} 
          label="Blue Theme" 
          colors={{ 
            bg: "#dbeafe", 
            bgOverlay: "#bfdbfe", 
            stroke: "#2563eb", 
            text: "#2563eb",
            check: "#2563eb"
          }} 
        />
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Checkbox 
          {...args} 
          label="Custom Typography" 
          typography={{ 
            fontFamily: "serif", 
            fontSize: "1.2rem",
            fontWeight: "bold"
          }} 
        />
        <Checkbox 
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
        story: 'Customize colors, typography, and border visibility to match your design needs.',
      },
    },
  },
};

