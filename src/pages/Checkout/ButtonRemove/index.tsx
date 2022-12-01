import { ReactNode } from 'react'
import { Button } from './style'

interface IButtonPurchaseProps {
  method: string
  icon: ReactNode
  handleRemove: (id: number) => void
  id: number
}

export function ButtonRemove({
  icon,
  method,
  handleRemove,
  id,
}: IButtonPurchaseProps) {
  return (
    <Button onClick={() => handleRemove(id)}>
      {icon}
      {method}
    </Button>
  )
}
