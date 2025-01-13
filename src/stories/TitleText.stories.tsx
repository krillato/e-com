import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ViewTitleText from "@/components/Label/TittleText/View";

const meta: Meta<typeof ViewTitleText> = {
  title: "Components/ViewTitleText", // Organize the story under "Components" in Storybook
  component: ViewTitleText,
  tags: ["autodocs"], // Enable auto-documentation
  argTypes: {
    Title: {
      control: "text", // Allows editing the Title prop via a text input in Storybook
      description: "The title text to display",
    },
  },
};

export default meta;

// Template for the story
const Template: StoryFn<typeof ViewTitleText> = (args) => (
  <ViewTitleText {...args} />
);

// Default story
export const Default = Template.bind({});
Default.args = {
  Title: "Sample Title",
};
