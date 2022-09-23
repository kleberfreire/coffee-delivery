import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.84375rem;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${(props) => props.theme['text-regular-s']};
    color: ${(props) => props.theme['base-text']};
    & > span {
      font-size: ${(props) => props.theme['text-regular-s']};
    }
  }

  & > div:last-child {
    font-size: ${(props) => props.theme['text-bold-l']};
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    & > span {
      font-size: ${(props) => props.theme['text-bold-l']};
    }
  }
`
