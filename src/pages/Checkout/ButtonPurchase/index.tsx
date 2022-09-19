import { ReactNode } from 'react'
import { Button } from './style'

interface IButtonPurchaseProps {
  method: string
  icon: ReactNode
}

export function ButtonPurchase({ icon, method }: IButtonPurchaseProps) {
  return (
    <Button>
      {icon}
      {method}
    </Button>
  )
}
