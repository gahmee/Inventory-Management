import { useEffect, useState } from 'react'


const Home = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:4000/api/products')
            const json = await response.json()

            if (response.ok) {
                setProducts(json);
            }
        }

        fetchProducts();

    }, [])

    return (
        <div>
            <div className='Products'>
                {products && products.map((product) => (
                    <p key={product._id}>{product.name} - {product.SKU}</p>
                ))}
            </div>
        </div>
    )
}

export default Home