import styled from 'styled-components'

export const WrapperContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
`

export const CompleteYourOrder = styled.section`
  & > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['title-xs']};
    font-family: 'Baloo 2', cursive;
  }
`

export const HeaderForm = styled.div`
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
  height: 23.25rem;
  margin-top: 1rem;
  background: ${(props) => (props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`

const inputBase = styled.input`
  color: ${(props) => props.theme['base-label']};
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  border: 2px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;
`
export const FormPurchase = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputCep = styled(inputBase)`
  width: 12.5rem;
  margin-top: 2rem;
`

export const InputRoad = styled(inputBase)`
  width: 100%;
  margin-top: 1rem;
`
export const InputNumber = styled(inputBase)`
  width: 12.5rem;
  margin-top: 1rem;
  margin-right: 0.75rem;
`
export const InputComplement = styled(inputBase)`
  width: 100%;
  margin-top: 1rem;
`
export const MultiplesInputContainer = styled.div`
  display: flex;
`

export const ConfirmPurchase = styled.div`
  display: flex;
`
