import styled from 'styled-components'

export const WhapperContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;

  padding-top: 5.875rem;

  display: flex;
  align-items: flex-start;
  gap: 3.5rem;

  img {
    display: block;
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const InforContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;

  h1 {
    font-size: ${(props) => props.theme['title-xl']};
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    max-width: 36.75rem;
    width: 100%;
    font-weight: 800;
    line-height: 130%;
  }
  & > p {
    margin-top: 1rem;
    max-width: 36.75rem;
    font-size: ${(props) => props.theme['text-regular-l']};
  }

  & > ul {
    margin-top: 4.125rem;
    li {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['base-text']};
      font-size: ${(props) => props.theme['text-regular-m']};

      height: 2rem;
      overflow: hidden;
      svg {
        border-radius: 999999px;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.background};
        padding: 0.5rem;
        margin-right: 0.75rem;
      }
    }

    li:nth-child(odd) {
      float: left;
      margin-right: 2.5rem;
      width: 14.5rem;
    }

    li:nth-child(2) {
      svg {
        background: ${(props) => props.theme['base-text']};
      }
    }

    li:nth-child(3) {
      margin-top: 1.25rem;
      svg {
        background: ${(props) => props.theme.yellow};
      }
    }
    li:nth-child(4) {
      margin-top: 1.25rem;
      svg {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`
