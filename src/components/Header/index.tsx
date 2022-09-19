import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionsContainer, WrapperContainer } from './style'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <WrapperContainer>
      <Link to="/">
        <img src={logo} alt="logo Coffee Delivery" />
      </Link>
      <ActionsContainer>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <Link to="/checkout">
          <ShoppingCart size={38} weight="fill" />
        </Link>
      </ActionsContainer>
    </WrapperContainer>
  )
}
