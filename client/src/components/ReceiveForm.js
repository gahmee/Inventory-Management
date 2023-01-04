import { useState } from "react"
import ReceiveRow from "./RecieveRow"

const ReceiveForm = ({ products }) => {
  const [row, setRow] = useState([])

  const handleAdd = () => {
    const newRow = [...row, []]
    setRow(newRow)
  }

  const handleChange = () => {

  }

  return (
    <>
      <button onClick={() => handleAdd()}>Add</button>
      {row.map((data, i) => <div><ReceiveRow product={products} /></div>)}
    </>
  )
}

export default ReceiveForm