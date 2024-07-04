import styled from 'styled-components'

export const Container = styled.div`   
    margin: 0 50px;
`

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin: 8px 0;
        > span {
            cursor: pointer;
            font-size: 16px;

            &:hover {    
                color: ${props => props.theme.blue};
            }
        }
    }
`

export const ContainerRepo = styled.div`   
    background-color: ${props => props.theme.gray};
    padding: 30px;
    border-radius: 11px;
    margin-top: 40px;
    border: 4px solid ${props => props.theme.blue};
    color: ${props => props.theme.white};
`