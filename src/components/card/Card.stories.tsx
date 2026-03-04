import type { Meta, StoryObj } from "@storybook/react";
import { SketchCard } from "./Card";
import { Button } from "../button";

const meta = {
  title: "Components/Card",
  component: SketchCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["paper", "notebook", "sticky"],
    },
    showBorder: { control: "boolean" },
  },
} satisfies Meta<typeof SketchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Default ──────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    children: (
      <p style={{ lineHeight: 1.6 }}>
        This is a sketch-style card component. It shares the same hand-drawn
        look as the modal, but renders inline without any overlay behaviour.
      </p>
    ),
    style: { width: 480 },
  },
};

/* ── Variants ─────────────────────────────────────────────── */

export const Variants: Story = {
  args: { children: "" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {(["paper", "notebook", "sticky"] as const).map((v) => (
        <SketchCard key={v} variant={v} style={{ width: 420 }}>
          <p style={{ margin: 0, textTransform: "capitalize" }}>{v} variant</p>
        </SketchCard>
      ))}
    </div>
  ),
};



/* ── Custom Colours ───────────────────────────────────────── */

export const CustomColors: Story = {
  args: {
    variant: "paper",
    colors: { bg: "#e8f5e9", bgOverlay: "#c8e6c9", stroke: "#2e7d32", text: "#1b5e20" },
    children: <p>Operation completed successfully.</p>,
    style: { width: 420 },
  },
};

/* ── No Border ────────────────────────────────────────────── */

export const NoBorder: Story = {
  args: {
    showBorder: false,
    children: <p>This card has the border decoration disabled.</p>,
    style: { width: 420 },
  },
};

/* ── Card Grid ────────────────────────────────────────────── */

export const CardGrid: Story = {
  args: { children: "" },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 260px)",
        gap: 24,
      }}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <SketchCard
          key={i}
          variant={(["paper", "notebook", "sticky"] as const)[i % 3]}
        >
          <h3 style={{ margin: "0 0 8px" }}>Card {i + 1}</h3>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>
            A quick note or snippet of information.
          </p>
        </SketchCard>
      ))}
    </div>
  ),
};

/* ── Product Card ─────────────────────────────────────────── */

export const ProductCard: Story = {
  args: { children: "" },
  render: () => (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
      {(["paper", "notebook"] as const).map((v) => (
        <SketchCard key={v} variant={v} style={{ width: 320 }}>
          {/* Placeholder image */}
          <div
            style={{
              width: "100%",
              height: 180,
              background: "#e8e4db",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              fontSize: "1rem",
              color: "#8c8577",
              fontFamily: "'Caveat', cursive",
            }}
          >
            320 × 180
          </div>

          {/* Text */}
          <h3 style={{ margin: "0 0 8px" }}>Sketch Notebook ({v})</h3>
          <p style={{ margin: "0 0 16px", fontSize: "1.1rem", lineHeight: 1.5, opacity: 0.8 }}>
            A beautifully hand-drawn notebook for your daily sketches and notes.
          </p>

          {/* Button */}
          <Button size="sm">Add to cart</Button>
        </SketchCard>
      ))}
    </div>
  ),
};

/* ── Sizes ────────────────────────────────────────────────── */

export const Sizes: Story = {
  args: { children: "" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start" }}>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        {[320, 480, 640].map((w) => (
          <SketchCard key={w} style={{ width: w }}>
            <p style={{ margin: 0 }}>Width: {w}px</p>
          </SketchCard>
        ))}
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        {[200, 300, 400].map((h) => (
          <SketchCard key={h} style={{ width: 320, height: h }}>
            <p style={{ margin: 0 }}>Height: {h}px</p>
          </SketchCard>
        ))}
      </div>
    </div>
  ),
};
