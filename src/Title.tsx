import { FC } from "react"
import { ReactComponent as Logo } from "./assets/logo.svg"
import "./Title.scss"

export interface TitleProps {
  /**
   * Callback for when the user clicks on the title
   */
  onPress?: () => void
  /**
   * Optional section name, lower font weight
   */
  section?: string
}

/**
 * Main Title for top left corner
 */
export const Title: FC<TitleProps> = ({ section, onPress }) => {
  console.log(typeof Logo)
  return (
    <div onClick={() => onPress?.()} className="polinetwork-title">
      <Logo />
      <span style={{ fontWeight: 700 }}>PoliNetwork</span>
      {section && <span style={{ fontWeight: 500 }}>{section}</span>}
    </div>
  )
}
