import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import mainCoffee from '../../assets/main-coffee.svg'
import { InforContainer, WhapperContainer } from './styles'

export function Main() {
  return (
    <WhapperContainer>
      <InforContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ul>
          <li>
            <ShoppingCart size={32} weight="fill" /> Compra simples e segura
          </li>
          <li>
            <Package size={32} weight="fill" />
            Embalagem mantém o café intacto
          </li>
          <li>
            <Timer size={32} weight="fill" /> Entrega rápida e rastreada
          </li>
          <li>
            <Coffee size={32} weight="fill" />O café chega fresquinho até você
          </li>
        </ul>
      </InforContainer>
      <img src={mainCoffee} alt="" />
    </WhapperContainer>
  )
}
