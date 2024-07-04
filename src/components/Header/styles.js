
import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100px;
  background-color: ${props => props.theme.gray};
  border-bottom: 4px solid ${props => props.theme.blue};
  align-items: center;
  justify-content: center;

  > h1 {
    color: ${props => props.theme.white};
  }
`
