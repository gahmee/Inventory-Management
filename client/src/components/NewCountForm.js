import { useState } from "react"
import { useProductsContext } from '../hooks/useProductsContext'

const NewCountForm = ({ products }) => {
  const [productsData, setProductsData] = useState([...products])
  const [error, setError] = useState(null)
  const { dispatch } = useProductsContext()


  const submitData = async (id, newQuantity) => {

    const productToUpdate = productsData.find(({ _id }) => _id === id)
    const previousQuantity = productToUpdate.quantity
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

  return (
    <>
      {productsData.map((product) => <div>{product.name} <input type="number" value={product.newQuantity} /></div>)}
      <button onClick={(event) => handleSubmit(event)}>Submit</button>
    </>
  )
}

export default NewCountForm