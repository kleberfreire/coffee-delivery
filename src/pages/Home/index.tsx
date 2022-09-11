import { Main } from '../../components/Main'
import { CoffeeItem } from './CooffeItem'
import { CoffeesContainer, CoffeesWrapperContainer } from './styles'

export function Home() {
  return (
    <>
      <Main />
      <CoffeesWrapperContainer>
        <h2>Nossos cafés</h2>
        <CoffeesContainer>
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
        </CoffeesContainer>
      </CoffeesWrapperContainer>
    </>
  )
}
