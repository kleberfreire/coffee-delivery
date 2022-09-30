import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ButtonPurchase } from './ButtonPurchase'
import {
  AddressWrapper,
  ButtonsPurchaseWrapper,
  CompleteYourOrder,
  ConfirmPurchase,
  FormContainer,
  HeaderAddress,
  HeaderPurchase,
  InputCep,
  InputCity,
  InputComplement,
  InputComplementWrapper,
  InputDistrict,
  InputNumber,
  InputRoad,
  InputUF,
  MethodPurchaseWrapper,
  MultiplesInputContainer,
  TotalsContainer,
  WrapperContainer,
} from './style'

import { TotalPurchase } from './TotalsPurchase'
import { ButtonConfirmPurchase } from './ButtonConfirmPurchase'
import { CoffeeItemCart } from './CoffeeItemCart'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Checkout() {
  const { cart } = useContext(CartContext)
  return (
    <WrapperContainer>
      <CompleteYourOrder>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <AddressWrapper>
            <HeaderAddress>
              <MapPinLine size={20} />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </HeaderAddress>
            <InputCep type="text" placeholder="cep" />
            <InputRoad type="text" placeholder="Rua" />
            <MultiplesInputContainer>
              <InputNumber type="text" placeholder="Número" />
              <InputComplementWrapper>
                <InputComplement type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </InputComplementWrapper>
            </MultiplesInputContainer>
            <MultiplesInputContainer>
              <InputDistrict type="text" placeholder="Bairro" />
              <InputCity type="text" placeholder="Cidade" />
              <InputUF type="text" placeholder="UF" />
            </MultiplesInputContainer>
          </AddressWrapper>
          <MethodPurchaseWrapper>
            <HeaderPurchase>
              <CurrencyDollar size={20} />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </HeaderPurchase>
            <ButtonsPurchaseWrapper>
              <ButtonPurchase
                icon={<CreditCard size={32} />}
                method="Cartão de crédito"
              />
              <ButtonPurchase
                icon={<Bank size={32} />}
                method="cartão de débito"
              />
              <ButtonPurchase icon={<Money size={32} />} method="dinheiro" />
            </ButtonsPurchaseWrapper>
          </MethodPurchaseWrapper>
        </FormContainer>
      </CompleteYourOrder>
      <section>
        <ConfirmPurchase>
          <h1>Café selecionados</h1>
          <TotalsContainer>
            {cart.products.map((product) => {
              return (
                <CoffeeItemCart
                  key={Math.random() * (10000 - 1) + 1 + product.id}
                  coffee={product}
                />
              )
            })}
            <TotalPurchase />
            <ButtonConfirmPurchase />
          </TotalsContainer>
        </ConfirmPurchase>
      </section>
    </WrapperContainer>
  )
}
