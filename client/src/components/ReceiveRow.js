const ReceiveRow = ({ products, rowsData, deleteRow, handleChange }) => {
    return (
        rowsData.map((data, index) => {
            const { _id, quantity } = data
            return (
                <div key={index}>
                    <select name="_id" value={_id} required="required" onChange={(event) => handleChange(index, event)}>
                        {_id === '' && <option>-Select a Product-</option>}
                        {products.map((product) =>
                            <option key={product._id} value={product._id}>{product.name}</option>
                        )}
                    </select>
                    <input name="quantity" type="number" required="required" value={quantity} onChange={(event) => handleChange(index, event)} />
                    <button onClick={() => (deleteRow(index))}>X</button>
                </div>

            )
        })
    )

}

export default ReceiveRow