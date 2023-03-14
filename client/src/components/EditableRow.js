import { useProductsContext } from '../hooks/useProductsContext'
import { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const EditableRow = ({ product, handleCancelClick }) => {
    const { dispatch } = useProductsContext()
    const [name, setName] = useState(product.name)
    const [SKU, setSKU] = useState(product.SKU)
    const [category, setCategory] = useState(product.category)
    const [condition, setCondition] = useState(product.condition)
    const [previousQuantity, setPreviousQuantity] = useState(product.previousQuantity)
    const [received, setReceived] = useState(product.received)
    const [quantity, setQuantity] = useState(product.quantity)
    const [error, setError] = useState(null)

    const handleSubmit = async (e, p) => {
        //prevents refreshing page on submit
        e.preventDefault()

        const product = { name, SKU, category, condition, previousQuantity, received, quantity }

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
            console.log('edited new product', json)
            dispatch({ type: 'EDIT_PRODUCT', payload: json })
            handleCancelClick(e)
        }
    }

    const handleDelete = async (e, p) => {
        //prevents refreshing page on submit
        e.preventDefault()

        const product = { name, SKU, category, condition, previousQuantity, received, quantity }

        const response = await fetch('http://localhost:4000/api/products/' + p._id, {
            method: 'DELETE',
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
            console.log('deleted product', json)
            dispatch({ type: 'DELETE_PRODUCT', payload: json })
            handleCancelClick(e)
        }
    }

    return (
        <tr key={product._id}>
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
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                ></input>
            </td>
            <td>
                <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <option value="Resell" >Resell</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Quarantine">Quarantine</option>
                </select>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="previousQuantity"
                    value={previousQuantity}
                    onChange={(e) => setPreviousQuantity(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="received"
                    value={received}
                    onChange={(e) => setReceived(e.target.value)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                ></input>
            </td>
            <td>
            {product.quantity - (product.previousQuantity + product.received)}
            </td>
            <td>
            <button
                type="button"
                onClick={(event) => handleCancelClick(event)}
            >
                <CancelIcon/>
            </button>
            <button
                type="button"
                onClick={(event) => handleSubmit(event, product)}
            >
                <CheckCircleIcon/>
            </button>
            <button
                type="button"
                onClick={(event) => handleDelete(event, product)}
            >
                <DeleteForeverIcon/>
            </button>
            </td>
        </tr>
    )
}

export default EditableRow