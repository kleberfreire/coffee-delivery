import styled from 'styled-components'

export const Button = styled.button`
  margin-top: 1rem;
  background: ${(props) => props.theme.yellow};
  font-size: 0.875ren;
  line-height: 160%;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  text-transform: uppercase;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  height: 2.875rem;
  cursor: pointer;
`
