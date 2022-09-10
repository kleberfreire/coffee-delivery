import { Main } from '../../components/Main'
import { CoffeeItem } from './CooffeItem'
import { CoffeesWrapperContainer } from './styles'

export function Home() {
  return (
    <>
      <Main />
      <CoffeesWrapperContainer>
        <h2>Nossos cafés</h2>
        <CoffeeItem />
      </CoffeesWrapperContainer>
    </>
  )
}
