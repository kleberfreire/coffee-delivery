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
  gap: 1rem;
`

export const InputCep = styled(inputBase)`
  width: 12.5rem;
  margin-top: 2rem;
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

export const ConfirmPurchase = styled.div`
  display: flex;
`
