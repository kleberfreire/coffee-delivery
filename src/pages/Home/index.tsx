import { Main } from '../../components/Main'
import { CoffeeItem } from './CooffeItem'
import { CoffeesContainerItens, CoffeesWrapperContainer } from './styles'

export function Home() {
  return (
    <>
      <Main />
      <CoffeesWrapperContainer>
        <h2>Nossos cafés</h2>
        <CoffeesContainerItens>
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
        </CoffeesContainerItens>
      </CoffeesWrapperContainer>
    </>
  )
}
