

const ReceiveRow = ({ products, rowsData, deleteRow, handleChange }) => {
    return (
        rowsData.map((data, index) => {
            return (
                <div key={index}>
                    <select name="_id" required="required" onChange={(event) => handleChange(index, event)}>
                        <option value={null} selected hidden>-Select Product-</option>
                        {products.map((product) =>
                            <option key={product._id} value={product._id}>{product.name}</option>
                        )}
                    </select>
                    <input name="quantity" type="number" required="required" value={data.quantity} onChange={(event) => handleChange(index, event)} />
                    <button onClick={() => (deleteRow(index))}>X</button>
                </div>

            )
        })
    )

}

export default ReceiveRow