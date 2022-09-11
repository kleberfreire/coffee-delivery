import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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
          <button>
            <Minus size={12} weight="bold" />
          </button>
          <input type="number" placeholder="1" max="99" min="1" maxLength={2} />
          <button>
            <Plus size={12} weight="bold" />
          </button>
        </QtdContainer>
        <button>
          <ShoppingCart size={32} weight="fill" />
        </button>
      </ActionsContainer>
    </WrapperContainer>
  )
}
