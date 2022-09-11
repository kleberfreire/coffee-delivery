import styled from 'styled-components'

export const WrapperContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  align-items: center;
  flex-direction: column;

  & > img {
    margin-top: -1.25rem;
    width: 7.5rem;
  }

  h2 {
    margin-top: 1rem;
    font-family: 'Baloo 2', cursive;
    font-size: ${(props) => props.theme['title-s']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    text-align: center;
    margin: 0 1.25rem;
    font-size: ${(props) => props.theme['text-regular-s']};
    line-height: 130%;
  }
`

export const Tag = styled.span`
  display: block;
  margin-top: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;

  font-size: 0.625rem;
  line-height: 130%;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.0625rem;
  margin-bottom: 1.25rem;

  & > button {
    width: 2.375rem;
    height: 2.375rem;
    padding: 0;
    background: ${(props) => props.theme['purple-dark']};
    border: 1px solid transparent;
    border-radius: 6px;
    overflow: hidden;

    svg {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      color: ${(props) => props.theme['base-card']};
      background: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const AmountCoffee = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme['title-m']};
  font-weight: 800;
  line-height: 130%;
  & > span {
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme['text-regular-s']};
    line-height: 130%;
    font-weight: 400;
  }
  margin-right: 1.4375rem;
`
export const QtdContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;

  margin-right: 0.5rem;

  button {
    background: none;
    border: none;
    width: 1.4rem;
    height: 100%;
    cursor: pointer;
    color: ${(props) => props.theme.purple};
  }

  & > input[type='number'] {
    width: 1.3rem;
    height: 100%;
    -moz-appearance: textfield;
    border: none;
    background: transparent;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
    font-size: ${(props) => props.theme['text-regular-m']};
  }

  & > input[type='number']::placeholder {
    color: ${(props) => props.theme['base-title']};
    font-size: ${(props) => props.theme['text-regular-m']};
  }

  /* & > input[type='number']:focus {
    background: #fff;
  } */

  & > input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
