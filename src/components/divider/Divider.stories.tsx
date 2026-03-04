import type { Meta, StoryObj } from '@storybook/react';
import { SketchDivider } from './Divider';

const meta: Meta<typeof SketchDivider> = {
  title: 'Components/Divider',
  component: SketchDivider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['scribble', 'dashed', 'dots', 'zigzag'],
    },
    color: {
      control: { type: 'color' },
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 6, step: 0.5 },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A hand-drawn sketch-style divider with multiple variants and orientations.',
      },
    },
  },
} satisfies Meta<typeof SketchDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Basic ──────────────────────────────────── */

export const Default: Story = {
  args: {},
};

/* ── Variants ───────────────────────────────── */

export const Scribble: Story = {
  args: { variant: 'scribble' },
};

export const Dashed: Story = {
  args: { variant: 'dashed' },
};

export const Dots: Story = {
  args: { variant: 'dots' },
};

export const Zigzag: Story = {
  args: { variant: 'zigzag' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', width: '100%' }}>
      <div>
        <p style={{ fontFamily: "'Caveat', cursive", marginBottom: '0.5rem' }}>Scribble</p>
        <SketchDivider variant="scribble" />
      </div>
      <div>
        <p style={{ fontFamily: "'Caveat', cursive", marginBottom: '0.5rem' }}>Dashed</p>
        <SketchDivider variant="dashed" />
      </div>
      <div>
        <p style={{ fontFamily: "'Caveat', cursive", marginBottom: '0.5rem' }}>Dots</p>
        <SketchDivider variant="dots" />
      </div>
      <div>
        <p style={{ fontFamily: "'Caveat', cursive", marginBottom: '0.5rem' }}>Zigzag</p>
        <SketchDivider variant="zigzag" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All four divider variants side by side.',
      },
    },
  },
};

/* ── Vertical ───────────────────────────────── */

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem', height: '300px' }}>
      <SketchDivider orientation="vertical" variant="scribble" />
      <SketchDivider orientation="vertical" variant="dashed" />
      <SketchDivider orientation="vertical" variant="dots" />
      <SketchDivider orientation="vertical" variant="zigzag" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical dividers — useful for separating side-by-side content.',
      },
    },
  },
};

/* ── Custom Colors ──────────────────────────── */

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', width: '100%' }}>
      <SketchDivider color="#e74c3c" variant="scribble" />
      <SketchDivider color="#3498db" variant="dashed" />
      <SketchDivider color="#2ecc71" variant="dots" />
      <SketchDivider color="#9b59b6" variant="zigzag" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers with custom stroke/fill colors.',
      },
    },
  },
};

/* ── Stroke Width ───────────────────────────── */

export const StrokeWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', width: '100%' }}>
      <SketchDivider strokeWidth={1} variant="scribble" />
      <SketchDivider strokeWidth={2} variant="scribble" />
      <SketchDivider strokeWidth={4} variant="scribble" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various stroke widths for the scribble variant.',
      },
    },
  },
};
