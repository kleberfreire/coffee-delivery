import { Minus, Plus, Trash } from 'phosphor-react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { ButtonRemove } from '../ButtonRemove'
import { ButtonContainer, ItemContainer, QtdContainer } from './style'

interface ICoffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  value: number
  amount: number
}

interface ICoffeeItemCartProps {
  coffee: ICoffee
}

export function CoffeeItemCart({ coffee }: ICoffeeItemCartProps) {
  const { name, value, image, amount: amountUpdated } = coffee
  const [amount, setAmount] = useState(0)
  const { handleUpdateProductCart } = useContext(CartContext)

  useEffect(() => {
    setAmount(amountUpdated)
  }, [amountUpdated])

  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value)

  function handleInputAmount(e: ChangeEvent<HTMLInputElement>) {
    const valueFormatted =
      parseInt(e.target.value) > 99
        ? parseInt(e.target.value.slice(0, 2))
        : parseInt(e.target.value)
    setAmount(valueFormatted)
  }

  return (
    <ItemContainer>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <ButtonContainer>
          <QtdContainer>
            <button
              onClick={() => {
                handleUpdateProductCart(coffee, amount - 1)
              }}
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
              onClick={async () => {
                handleUpdateProductCart(coffee, amount + 1)
              }}
              disabled={amount === 99}
            >
              <Plus size={12} weight="bold" />
            </button>
          </QtdContainer>
          <ButtonRemove icon={<Trash size={12} />} method="remove" />
        </ButtonContainer>
      </div>
      <span>{valueFormatted}</span>
    </ItemContainer>
  )
}
