import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  AmountCoffee,
  ButtonCartAdd,
  QtdContainer,
  Tag,
  TagContainer,
  WrapperContainer,
} from './style'

import { ChangeEvent, useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'

interface ICoffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  value: number
  amount?: number
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

  const { handleAddProductCart } = useContext(CartContext)

  function handleInputAmount(e: ChangeEvent<HTMLInputElement>) {
    const valueFormatted =
      parseInt(e.target.value) > 99
        ? parseInt(e.target.value.slice(0, 2))
        : parseInt(e.target.value)
    setAmount(valueFormatted)
  }

  return (
    <WrapperContainer>
      <img src={image} alt="imagem café tradicional em uma xícara" />
      <TagContainer>
        {tags.map((item) => (
          <Tag key={item + Math.random() * (10000 - 1) + 1}>{item}</Tag>
        ))}
      </TagContainer>
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
          <input
            type="number"
            max="99"
            min="1"
            maxLength={2}
            minLength={1}
            value={amount}
            placeholder="0"
            onChange={handleInputAmount}
          />
          <button
            onClick={() => setAmount((prev) => prev + 1)}
            disabled={amount === 99}
          >
            <Plus size={12} weight="bold" />
          </button>
        </QtdContainer>
        <ButtonCartAdd
          onClick={() => {
            handleAddProductCart({ ...coffee, amount })
            setAmount(0)
          }}
        >
          <ShoppingCart size={32} weight="fill" />
        </ButtonCartAdd>
      </ActionsContainer>
    </WrapperContainer>
  )
}
