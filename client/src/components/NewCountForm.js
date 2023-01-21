import { useState } from "react"
import { useProductsContext } from '../hooks/useProductsContext'

const NewCountForm = ({ products }) => {
  const [rowsData, setRowsData] = useState([])
  const [productsData, setProductsData] = useState([...products])
  const [error, setError] = useState(null)
  const { dispatch } = useProductsContext()

  return (
    <>
      {productsData.map((product) => <div>{product.name} <input type="number" value={product.newQuantity} /></div>)}
    </>
  )
}

export default NewCountForm