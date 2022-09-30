import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  width: 23rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
  & > img {
    width: 4rem;
    margin-right: 1.25rem;
  }

  & > div {
    & > h2 {
      font-size: ${(props) => props.theme['text-regular-m']};
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  & > span {
    width: 100%;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
    font-size: ${(props) => props.theme['text-bold-m']};
    font-weight: bold;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.5rem;
`

export const QtdContainer = styled.div`
  width: 4.5=rem;
  height: 2rem;
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
    width: 1.2rem;
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
