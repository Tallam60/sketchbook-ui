import type { Meta, StoryObj } from "@storybook/react";
import { SketchTooltip } from "./Tooltip";
import { Button } from "../button/Button";

const meta: Meta<typeof SketchTooltip> = {
  title: "Components/Tooltip",
  component: SketchTooltip,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
    },
    disabled: { control: { type: "boolean" } },
    showBorder: { control: { type: "boolean" } },
    openDelay: { control: { type: "number" } },
    closeDelay: { control: { type: "number" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A hand-drawn sketch-style tooltip that appears as a speech bubble with a wobbly tail. Supports four placements, open/close delays, controlled mode, and full colour customisation.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "6rem", display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SketchTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Default ────────────────────────────────── */

export const Default: Story = {
  args: {
    content: "Hey, I'm a tooltip!",
    placement: "top",
    children: <Button size="sm">Hover me</Button>,
  },
};

/* ── Placements ─────────────────────────────── */

export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <SketchTooltip content="Top bubble" placement="top">
        <Button size="sm">Top</Button>
      </SketchTooltip>
      <SketchTooltip content="Bottom bubble" placement="bottom">
        <Button size="sm">Bottom</Button>
      </SketchTooltip>
      <SketchTooltip content="Left note" placement="left">
        <Button size="sm">Left</Button>
      </SketchTooltip>
      <SketchTooltip content="Right note" placement="right">
        <Button size="sm">Right</Button>
      </SketchTooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "All four placement directions." },
    },
  },
};

/* ── Custom Colors ──────────────────────────── */

export const CustomColors: Story = {
  args: {
    content: "Blue pencil note",
    placement: "top",
    colors: {
      bg: "#e8f4fd",
      bgOverlay: "#d1e8fa",
      stroke: "#1a6fb5",
      text: "#1a6fb5",
    },
    children: <Button size="sm" colors={{ bg: "#e8f4fd", bgOverlay: "#d1e8fa", stroke: "#1a6fb5", text: "#1a6fb5" }}>Hover</Button>,
  },
  parameters: {
    docs: {
      description: { story: "Fully customised colour palette." },
    },
  },
};

/* ── Always Open (controlled) ───────────────── */

export const AlwaysOpen: Story = {
  args: {
    content: "Pinned open!",
    placement: "top",
    open: true,
    children: <Button size="sm">Always visible</Button>,
  },
  parameters: {
    docs: {
      description: { story: "Controlled mode with `open={true}` — always visible." },
    },
  },
};

/* ── Disabled ───────────────────────────────── */

export const Disabled: Story = {
  args: {
    content: "You won't see me",
    disabled: true,
    children: <Button size="sm">Disabled tooltip</Button>,
  },
  parameters: {
    docs: {
      description: { story: "Tooltip disabled — never appears." },
    },
  },
};

/* ── On plain text ──────────────────────────── */

export const OnText: Story = {
  render: () => (
    <p style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}>
      Hover over the{" "}
      <SketchTooltip content="Surprise!" placement="top">
        <span style={{ textDecoration: "underline wavy", cursor: "help" }}>
          underlined word
        </span>
      </SketchTooltip>{" "}
      to see the tooltip.
    </p>
  ),
  parameters: {
    docs: {
      description: { story: "Tooltip attached to an inline text span." },
    },
  },
};

/* ── Long Content ───────────────────────────── */

export const LongContent: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        alignItems: "center",
      }}
    >
      <SketchTooltip
        content="This is a much longer tooltip message to show how the bubble expands!"
        placement="top"
      >
        <Button size="sm">Long top</Button>
      </SketchTooltip>
      <SketchTooltip
        content="Another lengthy pencil note that keeps on going and going"
        placement="bottom"
      >
        <Button size="sm">Long bottom</Button>
      </SketchTooltip>
      <SketchTooltip
        content="Expanded sideways tooltip"
        placement="right"
      >
        <Button size="sm">Long right</Button>
      </SketchTooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Longer content to demonstrate how the speech bubble grows to fit." },
    },
  },
};
