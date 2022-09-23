import { Wrapper } from './styled'

export function TotalPurchase() {
  return (
    <Wrapper>
      <div>
        <p>Total de itens</p>
        <span>R$29,70</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$3,50</span>
      </div>
      <div>
        <p>Total</p>
        <span>R$33,20</span>
      </div>
    </Wrapper>
  )
}
