import type { Meta, StoryObj } from "@storybook/react";
import { SketchSlider } from "./Slider";

const meta: Meta<typeof SketchSlider> = {
  title: "Components/Slider",
  component: SketchSlider,
  tags: ["autodocs"],
  argTypes: {
    min: { control: { type: "number" } },
    max: { control: { type: "number" } },
    step: { control: { type: "number" } },
    defaultValue: { control: { type: "number" } },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A hand-drawn sketch-style range slider with draggable wobbly thumb, multiple sizes, and full colour customisation.",
      },
    },
  },
} satisfies Meta<typeof SketchSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Basic ──────────────────────────────────── */

export const Default: Story = {
  args: {
    label: "Volume",
    defaultValue: 40,
  },
};

/* ── Sizes ──────────────────────────────────── */

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", padding: "2rem", maxWidth: 420 }}>
      <SketchSlider size="sm" label="Small" defaultValue={25} />
      <SketchSlider size="md" label="Medium" defaultValue={50} />
      <SketchSlider size="lg" label="Large" defaultValue={75} />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Small, medium, and large slider sizes." },
    },
  },
};

/* ── Disabled ───────────────────────────────── */

export const Disabled: Story = {
  args: {
    label: "Locked",
    defaultValue: 60,
    disabled: true,
  },
  parameters: {
    docs: {
      description: { story: "Disabled state with muted colours and `not-allowed` cursor." },
    },
  },
};

/* ── Custom Step ────────────────────────────── */

export const CustomStep: Story = {
  args: {
    label: "Rating",
    min: 0,
    max: 10,
    step: 1,
    defaultValue: 5,
  },
  parameters: {
    docs: {
      description: { story: "Integer-only slider (step = 1, 0–10)." },
    },
  },
};

/* ── Custom Colours ─────────────────────────── */

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem", maxWidth: 420 }}>
      <SketchSlider
        label="Red theme"
        defaultValue={30}
        colors={{ track: "#e74c3c", trackFill: "#e74c3c", thumb: "#e74c3c", text: "#c0392b" }}
      />
      <SketchSlider
        label="Blue theme"
        defaultValue={65}
        colors={{ track: "#3498db", trackFill: "#3498db", thumb: "#3498db", text: "#2980b9" }}
      />
      <SketchSlider
        label="Green theme"
        defaultValue={80}
        colors={{ track: "#2ecc71", trackFill: "#2ecc71", thumb: "#2ecc71", text: "#27ae60" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Sliders with custom colour themes." },
    },
  },
};

/* ── No Label ───────────────────────────────── */

export const NoLabel: Story = {
  args: {
    defaultValue: 50,
  },
  parameters: {
    docs: {
      description: { story: "Slider without a visible label (still has an aria-label)." },
    },
  },
};
