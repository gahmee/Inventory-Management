import { useEffect } from "react"
import { useProductsContext } from '../hooks/useProductsContext'
import NewCountForm from "../components/NewCountForm"

const NewCount = () => {
    const { products, dispatch } = useProductsContext()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:4000/api/products')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCTS', payload: json });
            }
        }

        fetchProducts();

    }, [dispatch])

    return (
        <div>
            <NewCountForm products={products} />
        </div>
    )
}

export default NewCount