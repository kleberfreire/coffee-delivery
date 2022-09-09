import styled from 'styled-components'

export const WrapperContainer = styled.header`
  max-width: 70rem;
  width: 100%;
  height: 6.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    display: block;
  }
`

export const ActionsContainer = styled.div`
  width: 12.0625rem;
  height: 2.375rem;
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-self: center;
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    padding: 0.625rem;
    border-radius: 6px;
    
    svg {
      margin-right: 0.25rem; 
    }
  }
`
