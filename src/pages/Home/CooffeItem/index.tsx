import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  AmountCoffee,
  QtdContainer,
  Tag,
  WrapperContainer,
} from './style'

import { useState } from 'react'

interface ICoffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  value: number
}

interface ICoffeeItemProps {
  coffee: ICoffee
}

export function CoffeeItem({ coffee }: ICoffeeItemProps) {
  const [amount, setAmount] = useState(0)
  const { image, tags, name, description, value } = coffee
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(value)
  console.log(valueFormatted)

  return (
    <WrapperContainer>
      <img src={image} alt="imagem café tradicional em uma xícara" />
      <div>
        {tags.map((item) => (
          <Tag key={item + Math.random() * (10000 - 1) + 1}>{item}</Tag>
        ))}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <ActionsContainer>
        <AmountCoffee>
          <span>R$</span>
          {valueFormatted}
        </AmountCoffee>
        <QtdContainer>
          <button
            onClick={() => setAmount((prev) => prev - 1)}
            disabled={amount <= 0}
          >
            <Minus size={12} weight="bold" />
          </button>
          <input type="number" max="99" min="1" maxLength={2} value={amount} />
          <button onClick={() => setAmount((prev) => prev + 1)}>
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
