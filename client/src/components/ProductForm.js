import { useState } from 'react'

const ProductForm = () => {
    const [name, setName] = useState('')
    const [SKU, setSKU] = useState('')
    const [category, setCategory] = useState('')
    const [condition, setCondition] = useState('')
    const [quantity, setQuantity] = useState('')
    const [error, setError] = useState('')

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

        const json = await response.json

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
        }


    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Product</h3>
            <label>Product Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>SKU:</label>
            <input
                type="text"
                onChange={(e) => setSKU(e.target.value)}
                value={SKU}
            />
            <label>Category:</label>
            <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <label>Condition:</label>
            <select onChange={(e) => setCondition(e.target.value)}>
                <option value="Resell">Resell</option>
                <option value="Instructor">Instructor</option>
                <option value="Quarantine">Quarantine</option>
            </select>
            <label>Quantity:</label>
            <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
            />
            {error && <div className='error'>{error}</div>}
            <button>Add Product</button>
        </form>
    )
}

export default ProductForm