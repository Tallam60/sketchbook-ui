import type { Meta, StoryObj } from "@storybook/react";
import { SketchTextarea } from "./Textarea";

const meta: Meta<typeof SketchTextarea> = {
  title: "Components/Textarea",
  component: SketchTextarea,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: { type: "boolean" } },
    showLines: { control: { type: "boolean" } },
    showMargin: { control: { type: "boolean" } },
    showBorder: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A hand-drawn sketch-style multi-line text input that looks like torn notebook paper, complete with ruling lines and a red margin.",
      },
    },
  },
} satisfies Meta<typeof SketchTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Basic ──────────────────────────────────── */

export const Default: Story = {
  args: {
    label: "Notes",
    placeholder: "Write your thoughts here...",
  },
};

/* ── Sizes ──────────────────────────────────── */

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem", maxWidth: 500 }}>
      <SketchTextarea size="sm" label="Small" placeholder="Quick note..." />
      <SketchTextarea size="md" label="Medium" placeholder="Write something..." />
      <SketchTextarea size="lg" label="Large" placeholder="Tell us everything..." />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Small, medium, and large textarea sizes with proportional ruling height." },
    },
  },
};

/* ── Disabled ───────────────────────────────── */

export const Disabled: Story = {
  args: {
    label: "Locked",
    defaultValue: "This content cannot be edited.",
    disabled: true,
  },
};

/* ── No Lines / No Margin ───────────────────── */

export const NoLinesNoMargin: Story = {
  args: {
    label: "Plain paper",
    showLines: false,
    showMargin: false,
    placeholder: "No ruling or margin...",
  },
  parameters: {
    docs: {
      description: { story: "Textarea without notebook lines or the red margin line." },
    },
  },
};

/* ── Custom Colours ─────────────────────────── */

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem", maxWidth: 500 }}>
      <SketchTextarea
        label="Blue theme"
        placeholder="Write with blue ink..."
        colors={{
          stroke: "#3498db",
          text: "#2980b9",
          label: "#2980b9",
          lineColor: "#bcd4e6",
          marginColor: "#7ec8e3",
        }}
      />
      <SketchTextarea
        label="Sepia theme"
        placeholder="Old journal style..."
        colors={{
          bg: "#f5e6c8",
          bgOverlay: "#ecd9b0",
          stroke: "#6b4226",
          text: "#5a3620",
          label: "#6b4226",
          lineColor: "#c4a57b",
          marginColor: "#b07456",
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Textareas with custom colour themes." },
    },
  },
};

/* ── With Pre-filled Content ────────────────── */

export const PreFilled: Story = {
  args: {
    label: "Journal Entry",
    defaultValue:
      "Today I learned about sketch-style UI components.\nThey look like hand-drawn notebook pages.\nPretty neat, right?",
  },
};
