import { createContext, ReactNode } from 'react'

export const CartContext = createContext({})

interface ICartContextProviderProps {
  children: ReactNode
}

interface ICoffee {
  name: string
  description: string
  value: number
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
  products: ICoffee[]
  valueAmount: number
  address: IAddress
  methodPurchased: string
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
