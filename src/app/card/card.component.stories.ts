import { Story, Meta } from "@storybook/angular/types-6-0";
import { CardComponent } from "./card.component";

export default {
  title: "Card",
  component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  title: "card Title",
  heading: "Card heading",
  content: "  Getting a new business off the ground is a lot of hard work.",
};
