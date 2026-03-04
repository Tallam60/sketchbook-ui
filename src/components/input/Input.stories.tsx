import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Enter your name...',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Search something...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    placeholder: 'Cannot type here',
    disabled: true,
    defaultValue: 'Read only content',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Input {...args} size="sm" label="Small Input" placeholder="Small size..." />
      <Input {...args} size="md" label="Medium Input" placeholder="Medium size..." />
      <Input {...args} size="lg" label="Large Input" placeholder="Large size..." />
    </div>
  ),
};

export const Customization: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
        <Input {...args} label="Default" placeholder="Default styling..." />
        <Input 
          {...args} 
          label="Red Theme" 
          placeholder="Custom red theme..." 
          colors={{ 
            bg: "#fee2e2", 
            bgOverlay: "#fecaca", 
            stroke: "#dc2626", 
            text: "#dc2626",
            label: "#dc2626"
          }} 
        />
        <Input 
          {...args} 
          label="Blue Theme" 
          placeholder="Custom blue theme..." 
          colors={{ 
            bg: "#dbeafe", 
            bgOverlay: "#bfdbfe", 
            stroke: "#2563eb", 
            text: "#2563eb",
            label: "#2563eb"
          }} 
        />
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
        <Input 
          {...args} 
          label="Custom Typography" 
          placeholder="Different font..." 
          typography={{ 
            fontFamily: "serif", 
            fontSize: "1.1rem",
            fontWeight: "bold",
            labelSize: "1.3rem"
          }} 
        />
        <Input 
          {...args} 
          label="No Border" 
          placeholder="Clean look..." 
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


export const FormExample: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start', padding: '2rem', maxWidth: '400px' }}>
      <Input {...args} label="First Name" placeholder="Enter your first name..." />
      <Input {...args} label="Last Name" placeholder="Enter your last name..." />
      <Input {...args} label="Email" type="email" placeholder="your.email@example.com" />
      <Input {...args} label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
      <Input {...args} label="Message" placeholder="Tell us about yourself..." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple inputs in a form layout.',
      },
    },
  },
};