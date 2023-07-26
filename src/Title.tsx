import { FC } from "react"
import logo from "./assets/logo.svg"
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
  return (
    <div onClick={() => onPress?.()} className="polinetwork-title">
      <img draggable={false} src={logo} />
      <span style={{ fontWeight: 700 }}>PoliNetwork</span>
      {section && <span style={{ fontWeight: 500 }}>{section}</span>}
    </div>
  )
}
