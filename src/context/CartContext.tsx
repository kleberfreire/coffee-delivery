import { createContext, ReactNode, useReducer } from 'react'

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
  valueAmount: number
  address?: IAddress
  methodPurchased: string | null
}

interface ICartContext {
  handleAddProductCart: (prod: ICoffee) => void
  handleUpdateProductCart: (prod: ICoffee, amount: number) => void
  amountProductCart: number
  cart: ICart
}

export const CartContext = createContext({} as ICartContext)

interface ICartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [cart, dispatch] = useReducer(
    (state: ICart, action: any) => {
      if (action.type === 'ADD_NEW_PRODUCT_CART') {
        const cartProducts = [...state.products]
        const existingInCart = cartProducts.find(
          (p) => p.id === action.payload.product.id,
        )
        console.log(existingInCart)
        if (existingInCart) {
          console.log(existingInCart.amount, action.payload.product.amount)
          existingInCart.amount =
            existingInCart.amount + action.payload.product.amount
          console.log(existingInCart)
          return {
            ...state,
            products: [...cartProducts],
          }
        } else {
          return {
            ...state,
            products: [...state.products, action.payload.product],
          }
        }
      }

      if (action.type === 'ADD_UPDATE_PRODUCT_CART') {
        const cartProducts = [...state.products]
        const productUpdate = cartProducts.find(
          (p) => p.id === action.payload.product.id,
        )
        console.log('novo', action.payload.product.amount)
        productUpdate.amount = action.payload.newAmount
        console.log('atual', productUpdate?.amount)
        return {
          ...state,
          products: [...cartProducts],
        }
      }

      // const cartJSON = JSON.stringify(state)
      // localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', cartJSON)
      console.log('state - ', state)
      return state
    },
    {
      methodPurchased: null,
      products: [],
      valueAmount: 0,
    },
  )

  // useEffect(() => {
  //   const cartJSON = JSON.stringify(cart)
  //   localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', cartJSON)
  // }, [cart])

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

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddProductCart,
        amountProductCart,
        handleUpdateProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
