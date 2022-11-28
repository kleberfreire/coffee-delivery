import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm, SubmitHandler } from 'react-hook-form'
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
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

type Inputs = {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  UF: string
}

export function Checkout() {
  const { cart } = useContext(CartContext)
  const [methodPurchased, setMethodPurchased] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  function handleMethodPurchase(method: string) {
    setMethodPurchased(method)
  }

  return (
    <WrapperContainer onSubmit={handleSubmit(onSubmit)} id="formPurchase">
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
            <InputCep type="text" placeholder="cep" {...register('cep')} />
            <InputRoad type="text" placeholder="Rua" {...register('street')} />
            <MultiplesInputContainer>
              <InputNumber
                type="text"
                placeholder="Número"
                {...register('number')}
              />
              <InputComplementWrapper>
                <InputComplement
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
                <span>Opcional</span>
              </InputComplementWrapper>
            </MultiplesInputContainer>
            <MultiplesInputContainer>
              <InputDistrict
                type="text"
                placeholder="Bairro"
                {...register('district')}
              />
              <InputCity
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <InputUF type="text" placeholder="UF" {...register('UF')} />
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
                handleMethodPurchase={handleMethodPurchase}
                active={methodPurchased === 'Cartão de crédito'}
              />
              <ButtonPurchase
                icon={<Bank size={32} />}
                method="cartão de débito"
                handleMethodPurchase={handleMethodPurchase}
                active={methodPurchased === 'cartão de débito'}
              />
              <ButtonPurchase
                icon={<Money size={32} />}
                method="dinheiro"
                handleMethodPurchase={handleMethodPurchase}
                active={methodPurchased === 'dinheiro'}
              />
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
            <TotalPurchase totalItems={cart.totalValue} />
            <ButtonConfirmPurchase />
          </TotalsContainer>
        </ConfirmPurchase>
      </section>
    </WrapperContainer>
  )
}
