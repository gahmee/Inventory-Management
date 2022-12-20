
const EditableRow = ({ product, handleCancelClick }) => {

    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={product.SKU}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={product.name}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={product.category}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={product.condition}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={product.quantity}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={product.quantity}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="SKU"
                    value={product.quantity}
                ></input>
            </td>
            <button
                type="button"
                onClick={(event) => handleCancelClick(event, product)}
            >
                Cancel
            </button>
            <button>
                Submit
            </button>
        </tr>
    )
}

export default EditableRow