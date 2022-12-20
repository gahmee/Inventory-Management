
import EditableRow from "./EditableRow"
import ReadOnlyRow from "./ReadOnlyRow"
import { useState } from 'react'

const ProductTable = ({ products }) => {
    const [editProductId, setProductId] = useState(null);

    const handleEditClick = (event, product) => {
        event.preventDefault();
        setProductId(product._id);
    };

    const handleCancelClick = (event) => {
        event.preventDefault();
        setProductId(null);
    };

    return (
        <div className="product-table">
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th width="200px">SKU</th>
                            <th width="500px">Name</th>
                            <th width="100px">Category</th>
                            <th width="100px">Condition</th>
                            <th>Previous Quantity</th>
                            <th>Received</th>
                            <th>Quantity</th>
                        </tr>
                        {products && products.map((product) => (
                            <>
                                {editProductId === product._id ?
                                    <EditableRow product={product} handleCancelClick={handleCancelClick} /> :
                                    <ReadOnlyRow product={product} handleEditClick={handleEditClick} />}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTable