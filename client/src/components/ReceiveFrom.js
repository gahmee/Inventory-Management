import { useState } from "react"

const ReceiveFrom = () => {
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
      {row.map((data, i) => <div> test </div>)}
    </>
  )
}

export default ReceiveFrom