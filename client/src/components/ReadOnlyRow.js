

const ReadOnlyRow = ({ product, handleEditClick }) => {
  return (
    <tr key={product._id}>
      <td>{product.SKU}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.condition}</td>
      <td>{product.previousQuantity}</td>
      <td>{product.received}</td>
      <td>{product.quantity}</td>
      <td>{product.quantity - (product.previousQuantity + product.received)}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, product)}
        >
          Edit
        </button>
        {/* <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button> */}
      </td>
    </tr>
  )
}

export default ReadOnlyRow