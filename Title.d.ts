import { FC } from "react";
export interface TitleProps {
    /**
     * Callback for when the user clicks on the title
     */
    onPress?: () => void;
    /**
     * Optional section name, lower font weight
     */
    section?: string;
}
/**
 * Main Title for top left corner
 */
export declare const Title: FC<TitleProps>;
