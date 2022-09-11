import { MapPinLine } from 'phosphor-react'
import { WrapperContainer } from './style'

export function Checkout() {
  return (
    <WrapperContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <div>
          <div>
            <MapPinLine size={32} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
        </div>
      </section>
    </WrapperContainer>
  )
}
