import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionsContainer, WrapperContainer } from './style'

export function Header() {
  return (
    <WrapperContainer>
      <img src={logo} alt="logo Coffee Delivery" />
      <ActionsContainer>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <ShoppingCart size={38} weight="fill" />
      </ActionsContainer>
    </WrapperContainer>
  )
}
