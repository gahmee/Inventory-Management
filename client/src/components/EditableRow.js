import { useProductsContext } from '../hooks/useProductsContext'
import { useState } from 'react'

const EditableRow = ({ product, handleCancelClick }) => {
    const { dispatch } = useProductsContext()
    const [name, setName] = useState(product.name)
    const [SKU, setSKU] = useState(product.SKU)
    const [category, setCategory] = useState(product.category)
    const [condition, setCondition] = useState(product.condition)
    const [quantity, setQuantity] = useState(product.quantity)
    const [error, setError] = useState(null)

    const handleSubmit = async (e, p) => {
        //prevents refreshing page on submit
        e.preventDefault()

        const product = { name, SKU, category, condition, quantity }

        const response = await fetch('http://localhost:4000/api/products/' + p._id, {
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
            console.log('added new product', json)
            dispatch({ type: 'EDIT_PRODUCT', payload: json })
            handleCancelClick(e)
        }


    }

    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={SKU}
                    onChange={(e) => setSKU(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                ></input>
            </td>
            <button
                type="button"
                onClick={(event) => handleCancelClick(event)}
            >
                Cancel
            </button>
            <button
                type="button"
                onClick={(event) => handleSubmit(event, product)}
            >
                Submit
            </button>
        </tr>
    )
}

export default EditableRow