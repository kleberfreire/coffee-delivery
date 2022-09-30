import { Minus, Plus, Trash } from 'phosphor-react'
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
  const { name, value, image } = coffee

  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value)

  return (
    <ItemContainer>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <ButtonContainer>
          <QtdContainer>
            <button>
              <Minus size={12} weight="bold" />
            </button>
            <input
              type="number"
              placeholder="1"
              max="99"
              min="1"
              maxLength={2}
            />
            <button>
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
