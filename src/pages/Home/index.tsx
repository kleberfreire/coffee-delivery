import { Main } from '../../components/Main'
import { CoffeeItem } from './CooffeItem'
import { CoffeesContainerItens, CoffeesWrapperContainer } from './styles'
import { CoffeersList } from '../../../CoffeersList'

export function Home() {
  return (
    <>
      <Main />
      <CoffeesWrapperContainer>
        <h2>Nossos cafés</h2>
        <CoffeesContainerItens>
          {CoffeersList.map((item) => (
            <CoffeeItem key={item.id} coffee={item} />
          ))}
        </CoffeesContainerItens>
      </CoffeesWrapperContainer>
    </>
  )
}
