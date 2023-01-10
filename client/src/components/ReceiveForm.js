import { useState } from "react"
import ReceiveRow from "./ReceiveRow"

const ReceiveForm = ({ products }) => {
  const [rowsData, setRowsData] = useState([])


  const handleAddRow = () => {

    const rowsInput = {
      _id: '',
      quantity: 0
    }

    setRowsData([...rowsData, rowsInput])
  }

  const deleteRow = (index) => {
    const rows = [...rowsData]
    rows.splice(index, 1)
    setRowsData(rows)
  }


  const handleChange = (index, event) => {
    const { name, value } = event.target
    const rowsInput = [...rowsData]
    rowsInput[index][name] = value
    setRowsData(rowsInput)
    console.log(rowsData)
  }


  return (
    <>
      <ReceiveRow products={products} rowsData={rowsData} deleteRow={deleteRow} handleChange={handleChange} />
      <button onClick={() => handleAddRow()}>Add</button>
    </>
  )
}

export default ReceiveForm