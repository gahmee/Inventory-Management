import { createContext, useReducer } from 'react'

export const ProductsContext = createContext()

export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                products: action.payload
            }
        case 'CREATE_PRODUCT':
            return {
                products: [action.payload, ...state.products]
            }
        case 'EDIT_PRODUCT':
            const filtered = state.products.filter((p) => p._id !== action.payload._id)
            return {
                products: [action.payload, ...filtered]
            }
        default:
            return state
    }
}

export const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, {
        products: null
    })

    return (
        <ProductsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    )
}