

const ReceiveRow = ({ products, rowsData, deleteRow, handleChange }) => {
    return (
        rowsData.map((data, index) => {
            const { _id, name, quantity } = data
            return (
                <>
                    <div key={index}>
                        <select name="_id" onChange={(event) => handleChange(index, event)}>
                            {products.map((product) => <option value={product._id}>{product.name}</option>)}
                        </select>
                        <input name="quantity" type="number" required="required" value={quantity} onChange={(event) => handleChange(index, event)} />
                        <button onClick={() => (deleteRow(index))}>X</button>
                    </div>
                </>

            )
        })
    )

}

export default ReceiveRow