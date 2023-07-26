import { Meta, StoryObj } from "@storybook/react"

import { Header } from "../Header"

const meta = {
  title: "PoliNetwork/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    section: { control: "text" },
  },
} as Meta<typeof Header>

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
