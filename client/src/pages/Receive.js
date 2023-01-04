import { useEffect } from "react"
import ReceiveForm from "../components/ReceiveForm"
import { useProductsContext } from '../hooks/useProductsContext'


const Receive = () => {
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
            <ReceiveForm products={products} />
        </div>
    )
}

export default Receive