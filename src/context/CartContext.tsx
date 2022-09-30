import { createContext, ReactNode, useEffect, useState } from 'react'

interface ICoffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  value: number
  amount: number
}

interface ICartContext {
  handleAddProductCart: (prod: ICoffee) => void
  amountProductCart: number
}

export const CartContext = createContext({} as ICartContext)

interface ICartContextProviderProps {
  children: ReactNode
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

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [cart, setCart] = useState<ICart>({
    methodPurchased: null,
    products: [],
    valueAmount: 0,
  })

  useEffect(() => {}, [cart.products])

  const amountProductCart = cart.products.length
  console.log(amountProductCart)

  function handleAddProductCart(prod: ICoffee) {
    const existingInCart = cart?.products.find((c) => c.id === prod.id)
    if (existingInCart) {
      existingInCart.amount = prod.amount
      setCart((prev) => {
        return {
          ...prev,
          products: [...prev.products],
        }
      })
    } else {
      setCart((prev) => {
        return {
          ...prev,
          products: [...prev.products, prod],
        }
      })
    }
    console.log(cart)
  }

  return (
    <CartContext.Provider value={{ handleAddProductCart, amountProductCart }}>
      {children}
    </CartContext.Provider>
  )
}
