import type { Meta, StoryObj } from "@storybook/react";
import { SketchSkeleton, SketchSkeletonText, SketchSkeletonCard } from "./Skeleton";

/* ═══════════════════════════════════════════════════════════════════════ */
/*  SketchSkeleton                                                        */
/* ═══════════════════════════════════════════════════════════════════════ */

const meta: Meta<typeof SketchSkeleton> = {
  title: "Components/Skeleton",
  component: SketchSkeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["text", "rectangle", "circle", "avatar"],
    },
    animated: { control: { type: "boolean" } },
    width: { control: { type: "text" } },
    height: { control: { type: "number" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A hand-drawn sketch-style skeleton placeholder with shimmer animation, four shape variants, and convenience composites for text blocks and cards.",
      },
    },
  },
} satisfies Meta<typeof SketchSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Default ────────────────────────────────── */

export const Default: Story = {
  args: {
    variant: "text",
    width: "100%",
  },
};

/* ── All Variants ───────────────────────────── */

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem", maxWidth: 420 }}>
      <div>
        <p style={{ fontFamily: "'Caveat', cursive", marginBottom: 4 }}>text</p>
        <SketchSkeleton variant="text" />
      </div>
      <div>
        <p style={{ fontFamily: "'Caveat', cursive", marginBottom: 4 }}>rectangle</p>
        <SketchSkeleton variant="rectangle" height={120} />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <p style={{ fontFamily: "'Caveat', cursive", marginBottom: 4 }}>circle</p>
          <SketchSkeleton variant="circle" />
        </div>
        <div>
          <p style={{ fontFamily: "'Caveat', cursive", marginBottom: 4 }}>avatar</p>
          <SketchSkeleton variant="avatar" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "All four shape variants: text, rectangle, circle, and avatar (with face doodle)." },
    },
  },
};

/* ── Static (no animation) ──────────────────── */

export const Static: Story = {
  args: {
    variant: "rectangle",
    height: 100,
    animated: false,
  },
  parameters: {
    docs: {
      description: { story: "Shimmer animation disabled." },
    },
  },
};

/* ── Custom Colors ──────────────────────────── */

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem", maxWidth: 360 }}>
      <SketchSkeleton
        variant="rectangle"
        height={80}
        colors={{ fill: "#d6eaff", fillAlt: "#b3d4f7", stroke: "#6ba3d6" }}
      />
      <SketchSkeleton
        variant="circle"
        height={60}
        colors={{ fill: "#ffe0e0", fillAlt: "#f5c2c2", stroke: "#c97878" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Fully customised shimmer and border colours." },
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════ */
/*  SketchSkeletonText                                                    */
/* ═══════════════════════════════════════════════════════════════════════ */

export const TextBlock: Story = {
  render: () => (
    <div style={{ padding: "2rem", maxWidth: 400 }}>
      <SketchSkeletonText lines={4} />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Multi-line text skeleton (last line shorter for realism)." },
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════ */
/*  SketchSkeletonCard                                                    */
/* ═══════════════════════════════════════════════════════════════════════ */

export const Card: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <SketchSkeletonCard />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Card skeleton with image placeholder and text lines." },
    },
  },
};

export const CardWithAvatar: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <SketchSkeletonCard showAvatar />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Card skeleton with avatar row between image and text." },
    },
  },
};
