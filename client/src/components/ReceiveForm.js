import { useState } from "react"

const ReceiveForm = ({ products }) => {
  const [rows, setRow] = useState([])
  const [id, setID] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleAdd = () => {
    const newRow = [...rows, []]
    setRow(newRow)
  }


  return (
    <>
      <form>
        {rows.map((data, i) =>
          <>
            <div>

              <label>Product: </label>
              <select onChange={(e) => setID(e.target.value)}>
                {products.map((product) => <option value={product._id}>{product.name}</option>)}
              </select>

              <label>Quantity: </label>
              <input type="number" onChange={(e) => setQuantity(e.target.value)} />

              <button>X</button>

            </div>
          </>

        )}
      </form>
      <button onClick={() => handleAdd()}>Add</button>
    </>
  )
}

export default ReceiveForm