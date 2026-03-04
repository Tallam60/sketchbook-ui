import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, ToastContainer, useToast } from './Toast';
import type { ToastPosition } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    showBorder: {
      control: { type: 'boolean' },
    },
    showIcon: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample toast for demonstrations
const sampleToast = {
  id: 'sample-1',
  message: 'This is a sample toast message!',
  variant: 'success' as const,
};

export const Default: Story = {
  args: {
    toast: sampleToast,
    onDismiss: () => { },
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Toast
        {...args}
        toast={{ id: '1', message: 'Operation completed successfully!', variant: 'success' }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '2', message: 'Please check your input and try again.', variant: 'warning' }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '3', message: 'Something went wrong. Please contact support.', variant: 'error' }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '4', message: 'Here is some helpful information for you.', variant: 'info' }}
        onDismiss={() => { }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast supports four variants: success (green), warning (orange), error (red), and info (blue). Each has its own hand-drawn icon and color scheme.',
      },
    },
  },
};

export const WithoutIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Toast
        {...args}
        toast={{ id: '1', message: 'Clean message without icon', variant: 'success' }}
        showIcon={false}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '2', message: 'Simple warning message', variant: 'warning' }}
        showIcon={false}
        onDismiss={() => { }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toasts can be displayed without icons for a cleaner, more minimal appearance.',
      },
    },
  },
};

export const WithoutBorder: Story = {
  args: {
    toast: { id: '1', message: 'Toast without sketchy border', variant: 'info' },
    showBorder: false,
    onDismiss: () => { },
  },
  parameters: {
    docs: {
      description: {
        story: 'Remove the hand-drawn border for a softer appearance while maintaining the paper texture.',
      },
    },
  },
};

export const CustomColors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Toast
        {...args}
        toast={{ id: '1', message: 'Custom purple theme', variant: 'info' }}
        colors={{
          info: { bg: '#f3e8ff', border: '#7c3aed', tape: '#7c3aed' }
        }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '2', message: 'Custom pink theme', variant: 'success' }}
        colors={{
          success: { bg: '#fdf2f8', border: '#ec4899', tape: '#ec4899' }
        }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '3', message: 'Custom teal theme', variant: 'warning' }}
        colors={{
          warning: { bg: '#f0fdfa', border: '#0d9488', tape: '#0d9488' }
        }}
        onDismiss={() => { }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize toast colors to match your brand or design system. Each variant can have custom background, border, and tape colors.',
      },
    },
  },
};

export const CustomTypography: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Toast
        {...args}
        toast={{ id: '1', message: 'Bold and larger text', variant: 'success' }}
        typography={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '2', message: 'Serif font family', variant: 'info' }}
        typography={{ fontFamily: 'serif', fontSize: '1.4rem' }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '3', message: 'Small and light', variant: 'warning' }}
        typography={{ fontSize: '1.1rem', fontWeight: '300' }}
        onDismiss={() => { }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize typography with different font sizes, weights, and families while maintaining the sketchy aesthetic.',
      },
    },
  },
};

// Interactive Toast Hook Demo
const ToastHookDemo = ({ position = 'top-right' }: { position?: ToastPosition }) => {
  const { toasts, showToast, dismissToast } = useToast();

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => showToast('Success! Operation completed.', 'success')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Show Success
        </button>
        <button
          onClick={() => showToast('Warning: Please check your input.', 'warning')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Show Warning
        </button>
        <button
          onClick={() => showToast('Error: Something went wrong.', 'error')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Show Error
        </button>
        <button
          onClick={() => showToast('Info: Here is some helpful information.', 'info')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Show Info
        </button>
      </div>

      <ToastContainer
        toasts={toasts}
        onDismiss={dismissToast}
        position={position}
      />
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: (args) => <ToastHookDemo position={(args as Record<string, unknown>).position as ToastPosition} />,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'],
      description: 'Position of the toast container on screen',
    },
  } as Record<string, unknown>,
  args: {
    position: 'top-right',
  } as Record<string, unknown>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing the useToast hook for managing multiple toasts. Use the position control to change where toasts appear. Toasts auto-dismiss after 5 seconds or can be closed manually.',
      },
    },
  },
};

// Position picker demo
const POSITIONS: ToastPosition[] = [
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right',
];

const ContainerPositionDemo = () => {
  const { toasts, showToast, dismissToast } = useToast();
  const [position, setPosition] = useState<ToastPosition>('top-right');

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2rem', margin: '0 0 8px', color: '#5a5248' }}>Pick a position:</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {POSITIONS.map(p => (
            <button
              key={p}
              onClick={() => setPosition(p)}
              style={{
                padding: '6px 14px',
                border: '2px solid #5a5248',
                borderRadius: '4px',
                backgroundColor: position === p ? '#5a5248' : 'transparent',
                color: position === p ? '#fff' : '#5a5248',
                fontFamily: "'Caveat', cursive",
                fontSize: '1.1rem',
                cursor: 'pointer',
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => showToast(`Showing from ${position}`, 'success')}
        style={{ padding: '8px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}
      >
        Show Toast
      </button>
      <ToastContainer toasts={toasts} onDismiss={dismissToast} position={position} />
    </div>
  );
};

export const ContainerPositions: Story = {
  render: () => <ContainerPositionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'ToastContainer supports six positions: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right. Select a position and fire a toast to see it in action.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Toast
        {...args}
        toast={{ id: '1', message: 'Small toast message', variant: 'success' }}
        size="sm"
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '2', message: 'Medium toast message with a bit more content', variant: 'info' }}
        size="md"
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '3', message: 'Large toast message with even more content to showcase the larger size variant', variant: 'warning' }}
        size="lg"
        onDismiss={() => { }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast supports three size variants: sm (280px), md (340px), and lg (400px) with corresponding typography and icon sizes.',
      },
    },
  },
};

export const CustomDimensions: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Toast
        {...args}
        toast={{ id: '1', message: 'Custom narrow toast', variant: 'info' }}
        width={250}
        height={80}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '2', message: 'Extra wide toast with custom dimensions to fit more content in a single line without wrapping', variant: 'success' }}
        width={500}
        height={100}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{ id: '3', message: 'Tall toast for very long messages that need more vertical space to display properly without cramping the text content into a small area', variant: 'warning' }}
        width={320}
        height={150}
        onDismiss={() => { }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override default dimensions with custom width and height values for specific use cases.',
      },
    },
  },
};

export const LongMessages: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', padding: '2rem' }}>
      <Toast
        {...args}
        toast={{
          id: '1',
          message: 'This is a longer toast message to show text wrapping. Use custom width/height for better control.',
          variant: 'info'
        }}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{
          id: '2',
          message: 'For very long messages, specify custom dimensions for optimal display.',
          variant: 'warning'
        }}
        width={450}
        height={120}
        onDismiss={() => { }}
      />
      <Toast
        {...args}
        toast={{
          id: '3',
          message: 'Short message',
          variant: 'success'
        }}
        onDismiss={() => { }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'For longer messages, use custom width and height props to ensure optimal text display and readability.',
      },
    },
  },
};