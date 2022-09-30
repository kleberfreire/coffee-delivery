import styled from 'styled-components'

export const WrapperContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
`

export const CompleteYourOrder = styled.section`
  & > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['title-xs']};
    font-family: 'Baloo 2', cursive;
  }
`

export const HeaderAddress = styled.div`
  display: flex;

  & > svg {
    color: ${(props) => props.theme['yellow-dark']};

    margin-right: 0.6875rem;
  }

  & div {
    width: 33.125rem;
  }

  & div > h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['text-regular-m']};
  }

  & div > p {
    color: ${(props) => props.theme['base-text']};
    font-size: ${(props) => props.theme['text-regular-s']};
  }
`

export const FormContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const AddressWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
  margin-top: 0.9375rem;
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => (props) => props.theme['base-card']};
`

const inputBase = styled.input`
  color: ${(props) => props.theme['base-label']};
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  border: 2px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const InputCep = styled(inputBase)`
  width: 12.5rem;
  margin-top: 1rem;
`

export const InputRoad = styled(inputBase)`
  width: 100%;
`
export const InputNumber = styled(inputBase)`
  width: 12.5rem;
  margin-right: 0.75rem;
`
export const InputComplement = styled(inputBase)`
  width: 100%;
  position: relative;

  &::before {
    position: absolute;
    content: 'Opcional';
    width: 100%;
    height: 50px;
    top: 0;
    right: 0;
    z-index: 1000;
  }
`

export const InputComplementWrapper = styled.div`
  width: 100%;
  position: relative;

  & > span {
    position: absolute;
    bottom: 0;
    top: 36%;
    right: -0.5rem;
    transform: translate(-50%);

    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`
export const MultiplesInputContainer = styled.div`
  display: flex;
`

export const InputDistrict = styled(inputBase)`
  width: 12.5rem;
  margin-right: 0.75rem;
`
export const InputCity = styled(inputBase)`
  width: 17.25rem;
  margin-right: 0.75rem;
`
export const InputUF = styled(inputBase)`
  width: 3.75rem;
`

export const MethodPurchaseWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
  margin-top: 0.9375rem;
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => (props) => props.theme['base-card']};
`

export const HeaderPurchase = styled.div`
  display: flex;

  & > svg {
    color: ${(props) => props.theme.purple};

    margin-right: 0.6875rem;
  }

  & div {
    width: 33.125rem;
  }

  & div > h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['text-regular-m']};
  }

  & div > p {
    color: ${(props) => props.theme['base-text']};
    font-size: ${(props) => props.theme['text-regular-s']};
  }
`

export const ButtonsPurchaseWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const ConfirmPurchase = styled.div`
  & > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['title-xs']};
    font-family: 'Baloo 2', cursive;
  }
`

export const TotalsContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  margin-top: 0.9375rem;
  border-radius: 6px 44px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => (props) => props.theme['base-card']};
`

// export const ItemContainer = styled.div`
//   display: flex;
//   width: 23rem;
//   padding-bottom: 1.5rem;
//   border-bottom: 2px solid ${(props) => props.theme['base-button']};
//   & > img {
//     width: 4rem;
//     margin-right: 1.25rem;
//   }

//   & > div {
//     & > h2 {
//       font-size: ${(props) => props.theme['text-regular-m']};
//       color: ${(props) => props.theme['base-subtitle']};
//     }
//   }

//   & > span {
//     width: 100%;
//     text-align: right;
//     color: ${(props) => props.theme['base-text']};
//     font-size: ${(props) => props.theme['text-bold-m']};
//     font-weight: bold;
//   }
// `

// export const ButtonContainer = styled.div`
//   display: flex;
//   align-items: center;

//   margin-top: 0.5rem;
// `

// export const QtdContainer = styled.div`
//   width: 4.5=rem;
//   height: 2rem;
//   background: ${(props) => props.theme['base-button']};

//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   border-radius: 6px;

//   margin-right: 0.5rem;

//   button {
//     background: none;
//     border: none;
//     width: 1.4rem;
//     height: 100%;
//     cursor: pointer;
//     color: ${(props) => props.theme.purple};
//   }

//   & > input[type='number'] {
//     width: 1.2rem;
//     height: 100%;
//     -moz-appearance: textfield;
//     border: none;
//     background: transparent;
//     text-align: center;
//     color: ${(props) => props.theme['base-title']};
//     font-size: ${(props) => props.theme['text-regular-m']};
//   }

//   & > input[type='number']::placeholder {
//     color: ${(props) => props.theme['base-title']};
//     font-size: ${(props) => props.theme['text-regular-m']};
//   }

//   /* & > input[type='number']:focus {
//     background: #fff;
//   } */

//   & > input[type='number']::-webkit-outer-spin-button,
//   input[type='number']::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
// `
