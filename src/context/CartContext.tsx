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
  street: string
  number: string
  complement: string
  district: string
  city: string
  UF: string
}
interface ICart {
  products: ICoffee[] | []
  totalProductValue: number
  totalValue: number
  shipping: number
  address?: IAddress
  methodPurchased: string | null
}

interface ICartContext {
  handleAddProductCart: (prod: ICoffee) => void
  handleUpdateProductCart: (prod: ICoffee, amount: number) => void
  handleRemoveProductCart: (id: number) => void
  handleShipping: (address: IAddress, shippingValue: number) => void
  handleMethodPurchased: (methodPurchased: string) => void
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

  const [cart, dispatch] = useReducer(
    (state: ICart, action: any) => {
      if (action.type === 'ADD_NEW_PRODUCT_CART') {
        const cartProducts = [...state.products]
        const existingInCart = cartProducts.find(
          (p) => p.id === action.payload.product.id,
        )

        if (existingInCart) {
          existingInCart.amount =
            existingInCart.amount + action.payload.product.amount
          return {
            ...state,
            totalProductValue: getTotalValue(cartProducts),
            products: [...cartProducts],
          }
        } else {
          return {
            ...state,
            totalProductValue: getTotalValue([
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
        productUpdate.amount = action.payload.newAmount

        return {
          ...state,
          products: [...cartProducts],
          totalProductValue: getTotalValue(cartProducts),
        }
      }

      if (action.type === 'REMOVE_PRODUCT_CART') {
        const cartProducts = state.products.filter(
          (product) => product.id !== action.payload.id,
        )
        return {
          ...state,
          products: [...cartProducts],
          totalProductValue: getTotalValue(cartProducts),
        }
      }

      if (action.type === 'SET_ADDRESS_SHIPPING') {
        return {
          ...state,
          shipping: action.payload.shippingValue,
          address: action.payload.address,
          totalValue:
            getTotalValue(state.products) + action.payload.shippingValue,
        }
      }
      if (action.type === 'SET_METHOD_PURCHASED') {
        return {
          ...state,
          methodPurchased: action.payload.methodPurchased,
        }
      }

      return state
    },
    {
      methodPurchased: null,
      products: [],
      address: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        UF: '',
      },
      totalValue: 0,
      totalProductValue: 0,
      shipping: 0,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffeeDelivery:cart-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return {
        methodPurchased: null,
        products: [],
        totalValue: 0,
        totalProductValue: 0,
        shipping: 0,
      }
    },
  )

  useEffect(() => {
    const cartJSON = JSON.stringify(cart)
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', cartJSON)
  }, [cart])

  const amountProductCart = cart?.products?.length ?? 0

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

  function handleShipping(address: IAddress, shippingValue: number) {
    dispatch({
      type: 'SET_ADDRESS_SHIPPING',
      payload: { address, shippingValue },
    })
  }
  function handleMethodPurchased(methodPurchased: string) {
    dispatch({
      type: 'SET_METHOD_PURCHASED',
      payload: { methodPurchased },
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
        handleShipping,
        handleMethodPurchased,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
