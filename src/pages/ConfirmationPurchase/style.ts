import styled from 'styled-components'

type IconItemProps = {
  color: 'purple' | 'yellow' | 'yellowDark'
}

const IconItemColors = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  purple: '#8047F8',
}

export const WrapperContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

export const Title = styled.h1`
  margin-top: 5rem;
  color: ${(props) => props.theme['yellow-dark']};
  font-size: ${(props) => props.theme['title-l']};
  line-height: 130%;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
`

export const SubTitle = styled.span`
  margin-top: 0.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: ${(props) => props.theme['text-regular-l']};
  line-height: 130%;
`

export const WrapperContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;
`
export const BorderGradientInfo = styled.div`
  margin-top: 2.25rem;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  padding: 1px;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  overflow: hidden;
  z-index: 1000;
  width: 100%;
  height: 100%;
`

export const ContainerInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  & > li {
    list-style-type: none;
    display: flex;
    gap: 0.75rem;
  }
`

export const IconItem = styled.div<IconItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    border-radius: 50%;
    background: ${(props) => IconItemColors[props.color]};
    color: ${(props) => props.theme.background};
    padding: 0.5rem;
  }
`
