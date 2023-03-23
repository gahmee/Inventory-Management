import { useRef } from "react"
import { useOnClickOutside } from "../hooks/useOnClickOutside"

const ContextMenu = ({x, y, product, handleCancelClick, handleSubmit, handleDelete, closeContextMenu}) => {
  const contextMenuRef = useRef(null)
  useOnClickOutside(contextMenuRef, closeContextMenu)
  return (
    <div id='context-menu'style={{position: 'absolute', top: `${y}px`, left: `${x}px`}} ref={contextMenuRef} onClick={closeContextMenu}>
      <button onClick={(event) => handleCancelClick(event)}>Cancel</button>
      <button onClick={(event) => handleSubmit(event, product)}>Submit</button>
      <button onClick={(event) => handleDelete(event, product)}>Delete</button>
    </div>
  )
}

export default ContextMenu