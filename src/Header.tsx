import { FC } from "react"
import { Title, TitleProps } from "./Title"
import ThemeIcon from "./assets/theme.svg"
import "./Header.scss"

/**
 * Header component for the upper bar with title and theme selector
 */
export const Header: FC<TitleProps> = props => {
  return (
    <div className="polinetwork-header">
      <Title onPress={props.onPress} section={props.section} />
      <ThemeIcon />
    </div>
  )
}
