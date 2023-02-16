import { useState } from "react"
import { useProductsContext } from '../hooks/useProductsContext'

const NewCountForm = ({ products }) => {
  const [productsData, setProductsData] = useState([...products])
  const [error, setError] = useState(null)
  const { dispatch } = useProductsContext()


  const submitData = async (id, newQuantity) => {

    // const productToUpdate = productsData.find(({ _id }) => _id === id)

    const productToUpdateResponse = await fetch('http://localhost:4000/api/products/' + id)
    const productToUpdate = await productToUpdateResponse.json()

    const previousQuantity = await productToUpdate.quantity

    const quantity = newQuantity

    const product = { id, previousQuantity, quantity }

    const response = await fetch('http://localhost:4000/api/products/' + id, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setError(null)
      console.log('edited new product', json)
      dispatch({ type: 'EDIT_PRODUCT', payload: json })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    productsData.forEach((product) => submitData(product._id, product.quantity))
  }

  const handleChange = (event, index) => {
    const { name, value } = event.target
    const productInput = [...productsData]
    productInput[index][name] = value
    setProductsData(productInput)
  }


  return (
    <>
      {productsData.map((product, index) => <div>{product.name} <input name="quantity" type="number" value={product.newQuantity} onChange={(event) => handleChange(event, index)} /></div>)}
      <button onClick={(event) => handleSubmit(event)}>Submit</button>
    </>
  )
}

export default NewCountForm