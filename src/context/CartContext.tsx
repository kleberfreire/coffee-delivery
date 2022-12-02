import { createContext, ReactNode, useEffect, useReducer } from 'react'

interface ICoffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  value: number
  amount: number
}
interface IAddress {
  cep: string
  road: string
  number: number
  complement: string
  district: string
  city: string
}
interface ICart {
  products: ICoffee[] | []
  totalValue: number
  shipping?: number
  address?: IAddress
  methodPurchased: string | null
}

interface ICartContext {
  handleAddProductCart: (prod: ICoffee) => void
  handleUpdateProductCart: (prod: ICoffee, amount: number) => void
  handleRemoveProductCart: (id: number) => void
  amountProductCart: number
  cart: ICart
}

export const CartContext = createContext({} as ICartContext)

interface ICartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
  function getTotalValue(products: ICoffee[]) {
    return products.reduce((acc, curr) => {
      const totalProduct = curr.value * curr.amount
      return acc + totalProduct
    }, 0)
  }

  function addLocalStorage(data: ICart) {
    const cartJSON = JSON.stringify(data)
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', cartJSON)
  }

  const [cart, dispatch] = useReducer(
    (state: ICart, action: any) => {
      if (action.type === 'ADD_NEW_PRODUCT_CART') {
        const cartProducts = [...state.products]
        const existingInCart = cartProducts.find(
          (p) => p.id === action.payload.product.id,
        )

        if (existingInCart) {
          console.log(existingInCart.amount, action.payload.product.amount)
          existingInCart.amount =
            existingInCart.amount + action.payload.product.amount
          return {
            ...state,
            totalValue: getTotalValue(cartProducts),
            products: [...cartProducts],
          }
        } else {
          return {
            ...state,
            totalValue: getTotalValue([
              ...state.products,
              action.payload.product,
            ]),
            products: [...state.products, action.payload.product],
          }
        }
      }

      if (action.type === 'ADD_UPDATE_PRODUCT_CART') {
        const cartProducts = [...state.products]
        const productUpdate = cartProducts.find(
          (p) => p.id === action.payload.product.id,
        ) as ICoffee
        console.log('novo', action.payload.product.amount)
        productUpdate.amount = action.payload.newAmount
        console.log('atual', productUpdate?.amount)
        // const totalValueInCart: number = cartProducts.reduce((acc, curr) => {
        //   const totalProduct = curr.value * curr.amount
        //   return acc + totalProduct
        // }, 0)

        return {
          ...state,
          products: [...cartProducts],
          totalValue: getTotalValue(cartProducts),
        }
      }

      if (action.type === 'REMOVE_PRODUCT_CART') {
        const cartProducts = state.products.filter(
          (product) => product.id !== action.payload.id,
        )
        return {
          ...state,
          products: [...cartProducts],
          totalValue: getTotalValue(cartProducts),
        }
      }

      return state
    },
    {
      methodPurchased: null,
      products: [],
      totalValue: 0,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffeeDelivery:cart-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  useEffect(() => {
    const cartJSON = JSON.stringify(cart)
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', cartJSON)
  }, [cart])

  const amountProductCart = cart.products.length

  function handleAddProductCart(product: ICoffee) {
    dispatch({
      type: 'ADD_NEW_PRODUCT_CART',
      payload: { product },
    })
  }

  function handleUpdateProductCart(product: ICoffee, amount: number) {
    dispatch({
      type: 'ADD_UPDATE_PRODUCT_CART',
      payload: { product, newAmount: amount },
    })
  }
  function handleRemoveProductCart(id: number) {
    dispatch({
      type: 'REMOVE_PRODUCT_CART',
      payload: { id },
    })
  }
  console.log(cart)

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddProductCart,
        amountProductCart,
        handleUpdateProductCart,
        handleRemoveProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
