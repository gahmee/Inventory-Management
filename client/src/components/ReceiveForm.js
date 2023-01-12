import { useState } from "react"
import ReceiveRow from "./ReceiveRow"
import { useProductsContext } from '../hooks/useProductsContext'

const ReceiveForm = ({ products }) => {
  const [rowsData, setRowsData] = useState([])
  const [p, setP] = useState([...products])
  const { dispatch } = useProductsContext()

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
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    rowsData.forEach((product) => submitData(product._id, product.quantity))
  }

  const submitData = async (id, addedQuantity) => {

    const productToUpdate = p.find(({ _id }) => _id === id)
    const quantity = Number(productToUpdate.quantity) + Number(addedQuantity)

    const product = { id, quantity }

    const response = await fetch('http://localhost:4000/api/products/' + id, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      // setError(json.error)
    }

    if (response.ok) {
      // setError(null)
      console.log('edited new product', json)
      dispatch({ type: 'EDIT_PRODUCT', payload: json })
    }
  }

  const handleTest = () => {
    const result = p.find(({ _id }) => _id === "63a25a9d4e204566458a148a");
    console.log(result.quantity)
  }


  return (
    <>
      <ReceiveRow products={products} rowsData={rowsData} deleteRow={deleteRow} handleChange={handleChange} />
      <button onClick={() => handleAddRow()}>Add</button>
      <button onClick={(event) => handleSubmit(event)}>submit</button>
      <button onClick={() => handleTest()}>test</button>
    </>
  )
}

export default ReceiveForm