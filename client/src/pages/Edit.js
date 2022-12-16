import { useProductsContext } from '../hooks/useProductsContext'
// import ProductTable from '../components/ProductTable'

const Edit = () => {

    const { products, dispatch } = useProductsContext()

    return (
        <div>
            {products.map((p) => <div> {p.SKU} - {p.name} - {p.category} - {p.condition} <button>edit</button> <button>delete</button> </div>)}
        </div>
    )
}

export default Edit