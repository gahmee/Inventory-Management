const productTable = ({ products }) => {
    return (
        <div className="product-table">
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th width="200px">Name</th>
                            <th width="200px">SKU</th>
                            <th width="100px">Category</th>
                            <th width="100px">Condition</th>
                            <th>Quantity</th>
                        </tr>
                        {products && products.map((p) => (
                            <tr key={p._id}>
                                <td>{p.name}</td>
                                <td>{p.SKU}</td>
                                <td>{p.category}</td>
                                <td>{p.condition}</td>
                                <td>{p.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default productTable