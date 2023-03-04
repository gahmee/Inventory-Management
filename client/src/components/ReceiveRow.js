import DeleteIcon from '@mui/icons-material/Delete';


const ReceiveRow = ({ products, rowsData, deleteRow, handleChange }) => {
    return (
        rowsData.map((data, index) => {
            const { _id, quantity } = data
            return (
                <div class="receive-row" key={index}>
                    <select class='select' name="_id" value={_id} required="required" onChange={(event) => handleChange(index, event)}>
                        {_id === '' && <option class='options'>-Select a Product-</option>}
                        {products.map((product) =>
                            <option class='options' key={product._id} value={product._id}>{product.name}</option>
                        )}
                    </select>
                    <input class="input" name="quantity" type="number" required="required" value={quantity} onChange={(event) => handleChange(index, event)} />
                    <div class="delete-button" onClick={() => (deleteRow(index))}><DeleteIcon color="primary"/></div>
                </div>

            )
        })
    )

}

export default ReceiveRow