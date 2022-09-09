import logo from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
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
      </ActionsContainer>
    </WrapperContainer>
  )
}
