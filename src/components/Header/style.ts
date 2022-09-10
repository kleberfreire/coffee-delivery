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
  /* width: 12.0625rem;
  height: 2.375rem; */
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-self: center;
    justify-content: center;
    line-height: 160%;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    font-size: ${(props) => props.theme['text-regular-s']};

    svg {
      margin-right: 0.25rem;
      color: ${(props) => props.theme.purple};
    }
  }
  & > svg {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    margin-left: 0.75rem;
  }
`
