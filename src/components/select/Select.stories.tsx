import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose a fruit...',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: sampleOptions,
    defaultValue: 'banana',
    placeholder: 'Choose a fruit...',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Select {...args} size="sm" placeholder="Small Select" />
      <Select {...args} size="md" placeholder="Medium Select" />
      <Select {...args} size="lg" placeholder="Large Select" />
    </div>
  ),
  args: {
    options: sampleOptions,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: 'Disabled select...',
  },
};

export const Customization: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
        <Select {...args} placeholder="Default" />
        <Select 
          {...args} 
          colors={{ bg: "#fee2e2", bgOverlay: "#fecaca", stroke: "#dc2626", text: "#dc2626", hoverBg: "#fef2f2" }}
          placeholder="Red Theme"
        />
        <Select 
          {...args} 
          colors={{ bg: "#dbeafe", bgOverlay: "#bfdbfe", stroke: "#2563eb", text: "#2563eb", hoverBg: "#eff6ff" }}
          placeholder="Blue Theme"
        />
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
        <Select 
          {...args} 
          typography={{ fontSize: "1.1rem", fontWeight: "bold" }}
          placeholder="Bold Text"
        />
        <Select 
          {...args} 
          typography={{ fontFamily: "serif", fontSize: "1.2rem" }}
          placeholder="Serif Font"
        />
        <Select 
          {...args} 
          showBorder={false}
          placeholder="No Border"
        />
      </div>
    </div>
  ),
  args: {
    options: sampleOptions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize colors, typography, and border visibility to match your design needs.',
      },
    },
  },
};