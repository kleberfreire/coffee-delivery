import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { ButtonPurchase } from './ButtonPurchase'
import {
  AddressWrapper,
  ButtonContainer,
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
  ItemContainer,
  MethodPurchaseWrapper,
  MultiplesInputContainer,
  QtdContainer,
  TotalsContainer,
  WrapperContainer,
} from './style'

import expressoTradicional from '../../assets/coffees/coffee-tradicional.svg'
import { ButtonRemove } from './ButtonRemove'

export function Checkout() {
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
            <ItemContainer>
              <img src={expressoTradicional} alt="" />
              <div>
                <h2>Expresso Tradicional</h2>
                <ButtonContainer>
                  <QtdContainer>
                    <button>
                      <Minus size={12} weight="bold" />
                    </button>
                    <input
                      type="number"
                      placeholder="1"
                      max="99"
                      min="1"
                      maxLength={2}
                    />
                    <button>
                      <Plus size={12} weight="bold" />
                    </button>
                  </QtdContainer>
                  <ButtonRemove icon={<Trash size={12} />} method="remove" />
                </ButtonContainer>
              </div>
              <span>R$ 9,90</span>
            </ItemContainer>
          </TotalsContainer>
        </ConfirmPurchase>
      </section>
    </WrapperContainer>
  )
}
