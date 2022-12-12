import { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { TotalPurchase } from './TotalsPurchase'
import { ButtonConfirmPurchase } from './ButtonConfirmPurchase'
import { CoffeeItemCart } from './CoffeeItemCart'
import { CartContext } from '../../context/CartContext'
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
// import { ToastyMenssage } from './ToastyMenssage'

type Inputs = {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  UF: string
}

interface IAddress {
  cep: string
  street: string
  number: number
  complement: string
  district: string
  city: string
}

const schema = yup
  .object({
    cep: yup.string().required('Digite um cep válido'),
    street: yup.string().required('Digite uma rua válido'),
    number: yup.string().required('Digite um numero válido'),
    complement: yup.string(),
    district: yup.string().required('Digite um bairro válido'),
    city: yup.string().required('Digite uma cidade válida'),
    UF: yup.string().required('Digite uma UF válida'),
  })
  .required()

export function Checkout() {
  const { cart, handleShipping, handleMethodPurchased } =
    useContext(CartContext)
  const [methodPurchased, setMethodPurchased] = useState<string | null>(null)
  const [showOptionalMessage, setShowOptionalMessage] = useState(true)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: cart.address,
  })

  useEffect(() => {
    if (isValid === true) {
      const valueShipping = parseFloat((Math.random() * (40 - 1)).toFixed(2))
      const values = getValues()
      console.log(values)
      handleShipping(values, valueShipping)
    }
  }, [isValid])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (methodPurchased === null) {
      handleToast('Escolha um método de pagamento')
      return
    }

    console.log('submit', data)
  }

  function handleMethodPurchase(method: string) {
    setMethodPurchased(method)
    handleMethodPurchased(method)
  }

  function handleToast(message: string, type = 'error') {
    switch (type) {
      case 'success':
        toast.success(message, {
          theme: 'colored',
          position: toast.POSITION.TOP_CENTER,
        })
        break
      case 'error':
        toast.error(message, {
          theme: 'colored',
          position: toast.POSITION.TOP_CENTER,
        })
        break
      default:
        break
    }
  }

  return (
    <>
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
              <InputCep type="number" placeholder="cep" {...register('cep')} />
              {errors.cep?.message && handleToast(errors.cep?.message)}

              <InputRoad
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              {errors.street?.message && handleToast(errors.street?.message)}

              <MultiplesInputContainer>
                <InputNumber
                  type="number"
                  placeholder="Número"
                  {...register('number')}
                />
                {errors.number?.message && handleToast(errors.number?.message)}

                <InputComplementWrapper>
                  <InputComplement
                    type="text"
                    placeholder="Complemento"
                    {...register('complement', {
                      required: false,
                    })}
                    onChange={(e) => {
                      if (e.target.value.length === 0) {
                        setShowOptionalMessage(true)
                      }
                      if (e.target.value.length > 0 && showOptionalMessage) {
                        setShowOptionalMessage(false)
                      }
                    }}
                  />
                  {errors.complement?.message &&
                    handleToast(errors.complement?.message)}

                  {showOptionalMessage && <span>Opcional</span>}
                </InputComplementWrapper>
              </MultiplesInputContainer>
              <MultiplesInputContainer>
                <InputDistrict
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                />
                {errors.district?.message &&
                  handleToast(errors.district?.message)}

                <InputCity
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
                {errors.city?.message && handleToast(errors.city?.message)}

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
                  active={cart.methodPurchased === 'Cartão de crédito'}
                />
                <ButtonPurchase
                  icon={<Bank size={32} />}
                  method="cartão de débito"
                  handleMethodPurchase={handleMethodPurchase}
                  active={cart.methodPurchased === 'cartão de débito'}
                />
                <ButtonPurchase
                  icon={<Money size={32} />}
                  method="dinheiro"
                  handleMethodPurchase={handleMethodPurchase}
                  active={cart.methodPurchased === 'dinheiro'}
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
              <TotalPurchase
                totalItems={cart.totalProductValue}
                shipping={cart.shipping}
              />
              <ButtonConfirmPurchase />
            </TotalsContainer>
          </ConfirmPurchase>
        </section>
      </WrapperContainer>
      <ToastContainer />
    </>
  )
}
