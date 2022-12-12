import { Wrapper } from './styled'

type TotalPurchaseProps = {
  totalItems: number
  shipping: number
}

export function TotalPurchase({ totalItems, shipping }: TotalPurchaseProps) {
  console.log('frete', shipping)
  const formatterValue = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
    }).format(value)

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
