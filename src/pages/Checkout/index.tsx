import { MapPinLine } from 'phosphor-react'
import {
  CompleteYourOrder,
  ConfirmPurchase,
  FormContainer,
  FormPurchase,
  HeaderForm,
  InputCep,
  InputComplement,
  InputNumber,
  InputRoad,
  MultiplesInputContainer,
  WrapperContainer,
} from './style'

export function Checkout() {
  return (
    <WrapperContainer>
      <CompleteYourOrder>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <HeaderForm>
            <MapPinLine size={20} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderForm>
          <FormPurchase action="">
            <InputCep type="text" placeholder="cep" />
            <InputRoad type="text" placeholder="Rua" />
            <MultiplesInputContainer>
              <InputNumber type="text" placeholder="Número" />
              <InputComplement type="text" placeholder="Complemento" />
            </MultiplesInputContainer>
          </FormPurchase>
        </FormContainer>
      </CompleteYourOrder>
      <section>
        <ConfirmPurchase>
          <h1>Café selecionados</h1>
        </ConfirmPurchase>
      </section>
    </WrapperContainer>
  )
}
