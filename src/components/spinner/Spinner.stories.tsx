import type { Meta, StoryObj } from "@storybook/react";
import { SketchSpinner } from "./Spinner";

const meta: Meta<typeof SketchSpinner> = {
  title: "Components/Spinner",
  component: SketchSpinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A hand-drawn sketch-style spinner / loader with four distinct animation variants: a wobbly circle arc, a spiralling doodle, a flipping hourglass, and bouncing dots.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["circle", "spiral", "hourglass", "dots"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    speed: { control: { type: "range", min: 0.25, max: 3, step: 0.25 } },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof SketchSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Default ─────────────────────────────────────────────────── */

export const Default: Story = {
  args: { size: "lg" },
  parameters: {
    docs: {
      description: { story: "Default circle spinner at large size." },
    },
  },
};

/* ── All four variants side by side ──────────────────────────── */

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
      {(["circle", "spiral", "hourglass", "dots"] as const).map((v) => (
        <div key={v} style={{ textAlign: "center" }}>
          <SketchSpinner variant={v} size="lg" />
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 18,
              marginTop: 8,
              color: "#2a2a2a",
            }}
          >
            {v}
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "All four animation variants: circle (arc rotation), spiral (draw-on doodle), hourglass (flipping sand timer), and dots (pulsing blobs)." },
    },
  },
};

/* ── Sizes ────────────────────────────────────────────────────── */

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      {(["sm", "md", "lg"] as const).map((s) => (
        <div key={s} style={{ textAlign: "center" }}>
          <SketchSpinner size={s} />
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 16,
              marginTop: 6,
              color: "#2a2a2a",
            }}
          >
            {s}
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Three size presets: sm (24 px), md (36 px), and lg (48 px)." },
    },
  },
};

/* ── Custom colour ────────────────────────────────────────────── */

export const CustomColor: Story = {
  args: {
    colors: { stroke: "#e74c3c" },
    size: "lg",
  },
  parameters: {
    docs: {
      description: { story: "Override the stroke colour via the `colors` prop." },
    },
  },
};

/* ── Speed control ────────────────────────────────────────────── */

export const SpeedComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
      {[0.4, 1, 2.5].map((sp) => (
        <div key={sp} style={{ textAlign: "center" }}>
          <SketchSpinner size="lg" speed={sp} />
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 16,
              marginTop: 6,
              color: "#2a2a2a",
            }}
          >
            {sp}×
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "The `speed` prop multiplies animation speed — 0.4× (slow), 1× (default), 2.5× (fast)." },
    },
  },
};

/* ── Disabled ─────────────────────────────────────────────────── */

export const Disabled: Story = {
  args: { disabled: true, size: "lg" },
  parameters: {
    docs: {
      description: { story: "Greyed-out disabled state using `SK_DISABLED` colours." },
    },
  },
};

/* ── Full matrix: every variant × every size ─────────────────── */

export const AllVariantsAllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {(["circle", "spiral", "hourglass", "dots"] as const).map((v) => (
        <div
          key={v}
          style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
        >
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 18,
              width: 90,
              color: "#2a2a2a",
            }}
          >
            {v}
          </span>
          <SketchSpinner variant={v} size="sm" />
          <SketchSpinner variant={v} size="md" />
          <SketchSpinner variant={v} size="lg" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Full matrix of every variant at every size." },
    },
  },
};
