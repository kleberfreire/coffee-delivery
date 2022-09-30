import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionsContainer, WrapperContainer } from './style'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export function Header() {
  const { amountProductCart } = useContext(CartContext)
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
          {amountProductCart > 0 ? <span>{amountProductCart}</span> : null}
          <ShoppingCart size={38} weight="fill" />
        </Link>
      </ActionsContainer>
    </WrapperContainer>
  )
}
