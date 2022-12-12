import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
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
                Entrega em<strong> Rua João Daniel Martinelli, 102</strong>{' '}
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong> Cartão de Crédito</strong>
              </p>
            </li>
          </ContainerInfo>
        </BorderGradientInfo>
        <img src={Illustration} alt="" />
      </WrapperContainerInfo>
    </WrapperContainer>
  )
}
