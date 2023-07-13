import { Meta, StoryObj } from "@storybook/react"

import { Title } from "../Title"

const meta = {
  title: "PoliNetwork/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    section: { control: "text" },
  },
} as Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const plain: Story = {
  args: {},
}

export const rankings = {
  args: {
    section: "Rankings",
  },
}
