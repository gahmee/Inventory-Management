import { useRef } from "react"
import { useOnClickOutside } from "../hooks/useOnClickOutside"

const ContextMenu = ({x, y, closeContextMenu}) => {
  const contextMenuRef = useRef(null)
  useOnClickOutside(contextMenuRef, closeContextMenu)
  return (
    <div ref={contextMenuRef} onClick={closeContextMenu}>
      ContextMenu
    </div>
  )
}

export default ContextMenu