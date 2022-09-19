import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  width: 100%;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  font-size: 0.75rem;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 160%;

  & > svg {
    height: 1rem;
    width: 1rem;

    color: ${(props) => props.theme.purple};
    margin-right: 0.75rem;
  }
`
