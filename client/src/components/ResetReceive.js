import { useState } from "react"
import { useProductsContext } from '../hooks/useProductsContext'

const ResetReceive = ({ products }) => {
    const [productsData, setProductsData] = useState([...products])
    const [error, setError] = useState(null)
    const { dispatch } = useProductsContext()

    const submitData = async (id) => {
        const received = 0

        const product = { id, received }

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

    const handleReset = (event) => {
        event.preventDefault()
        productsData.forEach((product) => submitData(product._id))
    }

    return (
        <div><button onClick={(event) => handleReset(event)}>Reset Received</button></div>
    )
}

export default ResetReceive