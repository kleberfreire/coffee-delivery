import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import Illustration from '../../assets/success/Illustration.svg'

import {
  BorderGradientInfo,
  ContainerInfo,
  IconItem,
  SubTitle,
  Title,
  WrapperContainer,
  WrapperContainerInfo,
} from './style'

export function ConfirmationPurchase() {
  const location = useLocation()
  console.log(location.state)
  const {
    district,
    number,
    city,
    street,
    complement,
    UF,
    cep,
    methodPurchased,
  } = location.state

  return (
    <WrapperContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
      <WrapperContainerInfo>
        <BorderGradientInfo>
          <ContainerInfo>
            <li>
              <IconItem color="purple">
                <MapPin size={32} weight="fill" />
              </IconItem>
              <p>
                Entrega em
                <strong>
                  {' '}
                  {street}, {number}
                </strong>{' '}
                {complement}
                <br />
                {district} - {city}, {UF}
              </p>
            </li>
            <li>
              <IconItem color="yellow">
                <Timer size={32} weight="fill" />
              </IconItem>
              <p>
                Previsão de entrega
                <br />
                <strong> 20 min - 30 min</strong>
              </p>
            </li>
            <li>
              <IconItem color="yellowDark">
                <CurrencyDollar size={32} />
              </IconItem>

              <p>
                Pagamento na entrega <br />
                <strong> {methodPurchased}</strong>
              </p>
            </li>
          </ContainerInfo>
        </BorderGradientInfo>
        <img src={Illustration} alt="" />
      </WrapperContainerInfo>
    </WrapperContainer>
  )
}
