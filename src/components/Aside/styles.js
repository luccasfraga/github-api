import styled from 'styled-components'

export const Content = styled.div`
  background: ${props => props.theme.gray};
    height: 60px;
    display: grid;

    > ul {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: auto auto;
      gap: 20px;
      list-style: none;
      
      > li {
        a {
          color: ${props => props.theme.white};

          &:hover, &.active {
            color: ${props => props.theme.blue};
          }
        }
      }
    }
`
