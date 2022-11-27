import { Wrapper } from './styled'

type TotalPurchaseProps = {
  totalItems: number
}

export function TotalPurchase({ totalItems }: TotalPurchaseProps) {
  const formatterValue = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
    }).format(value)

  const shipping = 3.5
  const total = totalItems + shipping

  return (
    <Wrapper>
      <div>
        <p>Total de itens</p>
        <span>R${formatterValue(totalItems)}</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R${formatterValue(shipping)}</span>
      </div>
      <div>
        <p>Total</p>
        <span>R${formatterValue(total)}</span>
      </div>
    </Wrapper>
  )
}
