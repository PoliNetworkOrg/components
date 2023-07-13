import { FC } from "react"
import logo from "./assets/logo.svg"
import "./Title.scss"

interface TitleProps {
  onPress?: () => void
  section?: string
}

export const Title: FC<TitleProps> = ({ section, onPress }) => {
  return (
    <div onClick={() => onPress?.()} className="polinetwork-title">
      <img src={logo} />
      <span style={{ fontWeight: 700 }}>PoliNetwork</span>
      {section && <span style={{ fontWeight: 500 }}>{section}</span>}
    </div>
  )
}
