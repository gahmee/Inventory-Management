import { useProductsContext } from '../hooks/useProductsContext'
import { useState } from 'react'

const ReceiveRow = ({ product, handleCancelClick }) => {
    const [name, setName] = useState('')

    return (
        <>
            <select value={name} onChange={(e) => setName(e.target.value)}>
                {product.map((p) => <option value={p.name}>{p.name}</option>)}
            </select>

        </>
    )
}

export default ReceiveRow