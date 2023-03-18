import * as React from 'react'
import EditableRow from "./EditableRow"
import ReadOnlyRow from "./ReadOnlyRow"
import ContextMenu from './ContextMenu'
import { useState } from 'react'

const ProductTable = ({ products }) => {

    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0
    }

    const [editProductId, setProductId] = useState(null)
    const [contextMenu, setContextMenu] = useState(initialContextMenu)

    const handleEditClick = (event, product) => {
        event.preventDefault();
        setProductId(product._id);
    };

    const handleCancelClick = (event) => {
        event.preventDefault();
        setProductId(null);
    };

    const handleContextMenu = (event) => {
        console.log('test')
        event.preventDefault()
        const {pageX, pageY} = event
        setContextMenu({show: true, x: pageX, y: pageY})
    }

    return (
        <div className="product-table">        
            <div>
            {contextMenu.show && <ContextMenu x={contextMenu.x} y={contextMenu.y}/>}           
                <table>
                
                    <tbody >
                        <tr key="header">
                            <th width="15%">SKU</th>
                            <th width="40%">Name</th>
                            <th width="10%">Category</th>
                            <th width="10%">Condition</th>
                            <th width="5%">Previous Quantity</th>
                            <th width="5%">Received</th>
                            <th width="5%">Quantity</th>
                            <th width="5%">+/-</th>
                        </tr>
                        {products && products.map((product, index) => (
                            <React.Fragment key={index.toString()}>
                                {editProductId === product._id ?
                                    <EditableRow product={product} handleContextMenu={handleContextMenu} handleCancelClick={handleCancelClick} /> :
                                    <ReadOnlyRow product={product} handleContextMenu={handleContextMenu} handleEditClick={handleEditClick} />}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTable