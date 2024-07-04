import styled from 'styled-components'

export const Container = styled.div`   
    margin: 0 50px;
`

export const Content = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    gap: 50px;

    @media (min-width:  ${props => props.theme.sizeDesktop}) {
        grid-template-columns: 300px 1fr;
        padding: 30px 50px;
    }
`

export const Avatar = styled.img`
    width: 300px;
    border-radius: 50%;
`

export const Information = styled.p`
    font-size: 16px;
    color: ${props => props.theme.gray900};
    margin-bottom: 20px;

    &:last-child {margin-bottom: 0}

    > b {
        color: ${props => props.theme.blue};
    }
`
