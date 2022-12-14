const productTable = ({ products }) => {
    return (
        <div className="product-table">
            <table>
                <tr>
                    <th width="200px">Name</th>
                    <th width="200px">SKU</th>
                    <th width="100px">Category</th>
                    <th width="100px">Condition</th>
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