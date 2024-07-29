import { Meta, StoryObj } from '@storybook/react';
import { Title } from '../Title';

declare const meta: Meta<typeof Title>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const plain: Story;
export declare const rankings: {
    args: {
        section: string;
    };
};
