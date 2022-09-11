import styled from 'styled-components'
export const CoffeesWrapperContainer = styled.section`
  max-width: 70rem;
  width: 100%;
  margin: 6.75rem auto;

  & > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: ${(props) => props.theme['title-l']};
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeesContainerItens = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
`
