import { useEffect } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'


import ProductTable from '../components/ProductTable'

const Home = () => {

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
            <div className='Products'>
                {products && <ProductTable products={products} />}
            </div>

        </div>
    )
}

export default Home