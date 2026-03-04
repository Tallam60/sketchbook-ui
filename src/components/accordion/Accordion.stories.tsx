import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="Getting Started" number={1}>
        Welcome to our sketchy component library! This accordion component mimics the feel of a hand-drawn notebook with wobbly lines and paper textures.
      </AccordionItem>
      <AccordionItem title="Installation Guide" number={2}>
        To install this component library, simply run npm install and import the components you need. Each component is designed with customization in mind.
      </AccordionItem>
      <AccordionItem title="Advanced Features" number={3} defaultOpen>
        You can customize colors, typography, borders, and even toggle the lined paper effect. The accordion supports smooth animations and maintains the sketchy aesthetic throughout.
      </AccordionItem>
    </Accordion>
  ),
};

export const WithoutNumbers: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="Design Philosophy" showNumber={false}>
        Our design philosophy focuses on bringing the warmth and authenticity of hand-drawn sketches to digital interfaces.
      </AccordionItem>
      <AccordionItem title="User Experience" showNumber={false}>
        Every interaction feels natural and organic, with subtle animations that mimic real-world paper behavior.
      </AccordionItem>
      <AccordionItem title="Technical Details" showNumber={false} defaultOpen>
        Built with React, TypeScript, and SVG for crisp rendering at any scale while maintaining the sketchy aesthetic.
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyling: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem 
        title="Custom Colors" 
        number={1}
        colors={{
          bg: "#fee2e2",
          bgOverlay: "#fecaca", 
          stroke: "#dc2626",
          text: "#dc2626",
          numberColor: "#991b1b",
          lineColor: "#f87171"
        }}
      >
        This accordion item uses a red color theme with custom background and text colors.
      </AccordionItem>
      <AccordionItem 
        title="Custom Typography" 
        number={2}
        typography={{
          titleSize: "1.8rem",
          titleWeight: "bold",
          contentSize: "1.1rem"
        }}
      >
        This item demonstrates custom typography with larger title and smaller content text.
      </AccordionItem>
      <AccordionItem 
        title="No Lines or Border" 
        number={3}
        showBorder={false}
        showLines={false}
        colors={{
          bg: "#faf7f0",
          bgOverlay: "#f5f1e8",
          stroke: "#2a2a2a",
          text: "#2a2a2a"
        }}
      >
        This item has no border or lined paper effect, showing a cleaner look while maintaining the sketchy shape and notebook colors.
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize colors, typography, borders, and paper effects to match your design needs.',
      },
    },
  },
};

export const SingleItem: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem 
        title="Standalone Accordion Item" 
        defaultOpen
        showNumber={false}
        typography={{
          titleSize: "1.6rem",
          contentSize: "1.3rem"
        }}
      >
        This is a single accordion item that starts open. Perfect for FAQ sections or detailed explanations that need to be prominently displayed.
        
        You can include multiple paragraphs, lists, or any other content within the accordion body.
      </AccordionItem>
    </Accordion>
  ),
};

export const LongContent: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="Short Content" number={1}>
        Brief explanation here.
      </AccordionItem>
      <AccordionItem title="Medium Content" number={2}>
        This accordion item contains a moderate amount of content to demonstrate how the component handles different content lengths. The paper texture and lined background adapt automatically.
      </AccordionItem>
      <AccordionItem title="Long Content" number={3} defaultOpen>
        This accordion item contains extensive content to show how the component handles longer text. 
        
        The beauty of this design is that it maintains the notebook aesthetic regardless of content length. The wobbly lines, paper texture, and hand-drawn borders all scale appropriately.
        
        Notice how the lined paper effect creates the feeling of writing in a real notebook, with the left margin line and horizontal guidelines. The content area has proper padding to respect the margin, just like you would when writing on real paper.
        
        The SVG-based design ensures crisp rendering at any zoom level while maintaining the organic, hand-drawn quality that makes this component library unique.
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The accordion adapts to different content lengths while maintaining the sketchy aesthetic.',
      },
    },
  },
};