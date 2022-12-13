const productTable = ({ products }) => {
    return (
        <div className="product-table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Condition</th>
                    <th>Quantity</th>
                </tr>
                {products && products.map((p) => (
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.SKU}</td>
                        <td>{p.category}</td>
                        <td>{p.condition}</td>
                        <td>{p.quantity}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default productTable