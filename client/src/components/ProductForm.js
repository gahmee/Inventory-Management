import { useState, useContext } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import { ToggleContext } from "../context/ToggleContext"
import './styles/product-form.css'

const ProductForm = () => {
    const { dispatch } = useProductsContext()
    const [name, setName] = useState('')
    const [SKU, setSKU] = useState('')
    const [category, setCategory] = useState('')
    const [condition, setCondition] = useState('')
    const [quantity, setQuantity] = useState('')
    const [error, setError] = useState(null)
    const {toggleAdd, setToggleAdd} = useContext(ToggleContext)

    const handleSubmit = async (e) => {
        //prevents refreshing page on submit
        e.preventDefault()

        const product = { name, SKU, category, condition, quantity }

        const response = await fetch('http://localhost:4000/api/products', {
            method: 'POST',
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
            setName('')
            setSKU('')
            setCategory('')
            setCondition('')
            setQuantity('')
            setError(null)
            console.log('added new product', json)
            dispatch({ type: 'CREATE_PRODUCT', payload: json })
        }


    }

    return (
        <form className='pop-up-menu' onSubmit={handleSubmit}>            
            <div className='inner-pop-up-menu'>
            <button class="close-button" onClick={() => setToggleAdd(false)}>X</button>
            <h3>Add a New Product</h3>
            <label>Product Name: </label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>SKU: </label>
            <input
                type="text"
                onChange={(e) => setSKU(e.target.value)}
                value={SKU}
            />
            <label>Category: </label>
            <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <label>Condition: </label>
            <select onChange={(e) => setCondition(e.target.value)}>
                <option disabled={true} value="">
                    --Choose and option--
                </option>
                <option value="Resell">Resell</option>
                <option value="Instructor">Instructor</option>
                <option value="Quarantine">Quarantine</option>
            </select>
            <label>Quantity: </label>
            <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
            />
            {error && <div>{error}</div>}
            <button class="submit-button">Submit</button>
            </div>
            
        </form>
    )
}

export default ProductForm