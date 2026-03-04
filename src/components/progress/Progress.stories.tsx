import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SketchProgress } from "./Progress";

const meta: Meta<typeof SketchProgress> = {
  title: "Components/Progress",
  component: SketchProgress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    max: { control: { type: "number" } },
    variant: {
      control: { type: "radio" },
      options: ["scribble", "hatching", "crosshatch", "dots", "solid"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    showPercentage: { control: { type: "boolean" } },
    animated: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    showBorder: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A hand-drawn sketch-style progress bar with five fill variants (scribble, hatching, crosshatch, dots, solid), multiple sizes, and full colour customisation.",
      },
    },
  },
} satisfies Meta<typeof SketchProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Basic ──────────────────────────────────── */

export const Default: Story = {
  args: {
    value: 45,
    label: "Loading…",
  },
};

/* ── Sizes ──────────────────────────────────── */

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", padding: "2rem", maxWidth: 420 }}>
      <SketchProgress size="sm" value={30} label="Small" />
      <SketchProgress size="md" value={55} label="Medium" />
      <SketchProgress size="lg" value={80} label="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Small, medium, and large progress bar sizes." },
    },
  },
};

/* ── Variants ───────────────────────────────── */

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", padding: "2rem", maxWidth: 420 }}>
      <SketchProgress variant="scribble" value={60} label="Scribble" />
      <SketchProgress variant="hatching" value={60} label="Hatching" />
      <SketchProgress variant="crosshatch" value={60} label="Crosshatch" />
      <SketchProgress variant="dots" value={60} label="Dots" />
      <SketchProgress variant="solid" value={60} label="Solid" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "All five fill-pattern variants at the same progress." },
    },
  },
};

/* ── Disabled ───────────────────────────────── */

export const Disabled: Story = {
  args: {
    value: 50,
    label: "Disabled",
    disabled: true,
  },
  parameters: {
    docs: {
      description: { story: "Greyed-out disabled state." },
    },
  },
};

/* ── Custom Colors ──────────────────────────── */

export const CustomColors: Story = {
  args: {
    value: 70,
    label: "Upload",
    colors: {
      bg: "#f0f8ff",
      bgOverlay: "#d6eaff",
      stroke: "#1a6fb5",
      label: "#1a6fb5",
      fill: "#1a6fb5",
    },
  },
  parameters: {
    docs: {
      description: { story: "Fully customised colour palette." },
    },
  },
};

/* ── No Label / No Percentage ───────────────── */

export const BarOnly: Story = {
  args: {
    value: 65,
    showPercentage: false,
  },
  parameters: {
    docs: {
      description: { story: "Progress bar without label or percentage text." },
    },
  },
};

/* ── Animated (interactive) ─────────────────── */

export const Animated: Story = {
  render: function AnimatedStory() {
    const [val, setVal] = useState(10);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem", maxWidth: 420 }}>
        <SketchProgress value={val} label="Transfer" animated />
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button onClick={() => setVal((v) => Math.max(0, v - 15))} style={{ cursor: "pointer" }}>
            − 15
          </button>
          <button onClick={() => setVal((v) => Math.min(100, v + 15))} style={{ cursor: "pointer" }}>
            + 15
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: { story: "Click buttons to see the animated progress transition." },
    },
  },
};
