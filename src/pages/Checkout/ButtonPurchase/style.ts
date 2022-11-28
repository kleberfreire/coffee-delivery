import styled from 'styled-components'

interface buttonProps {
  activeMethod: boolean
}

export const Button = styled.button<buttonProps>`
  border: none;
  width: 100%;
  background: ${(props) =>
    props.activeMethod
      ? props.theme['purple-light']
      : props.theme['base-button']};
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
  border: 1px solid
    ${(props) => (props.activeMethod ? props.theme.purple : 'transparent')};
  & > svg {
    height: 1rem;
    width: 1rem;

    color: ${(props) => props.theme.purple};
    margin-right: 0.75rem;
  }
  &:hover {
    background: ${(props) => props.theme['purple-light']};
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.purple};
  }
`
