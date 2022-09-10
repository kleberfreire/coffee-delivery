import { ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  AmountCoffee,
  QtdContainer,
  Tag,
  WrapperContainer,
} from './style'

import coffeeTradicional from '../../../assets/coffees/coffee-tradicional.svg'

export function CoffeeItem() {
  return (
    <WrapperContainer>
      <img
        src={coffeeTradicional}
        alt="imagem café tradicional em uma xícara"
      />
      <div>
        <Tag>Tradicional</Tag>
      </div>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <ActionsContainer>
        <AmountCoffee>
          <span>R$</span> 9,90
        </AmountCoffee>
        <QtdContainer>
          <button>-</button>
          <input type="number" placeholder="1" max="99" min="1" />
          <button>+</button>
        </QtdContainer>
        <ShoppingCart size={32} weight="fill" />
      </ActionsContainer>
    </WrapperContainer>
  )
}
