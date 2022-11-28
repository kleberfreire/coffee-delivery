import { ReactNode } from 'react'
import { Button } from './style'

interface IButtonPurchaseProps {
  method: string
  icon: ReactNode
  handleMethodPurchase: (method: string) => void
  active: boolean
}

export function ButtonPurchase({
  icon,
  method,
  active,
  handleMethodPurchase,
}: IButtonPurchaseProps) {
  return (
    <Button
      activeMethod={active}
      onClick={() => handleMethodPurchase(method)}
      type="button"
    >
      {icon}
      {method}
    </Button>
  )
}
