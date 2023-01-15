import styled, { css } from "styled-components";


export const Container = styled.section`
    background-color: white;
    margin: 15px auto;
    text-align: left;

    ${({ darkTheme })=> darkTheme && css`
        background-color: ${({theme})=> theme.colors.ghost};
    `}
`;

export const HeaderContainer = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
    padding: 15px;
    margin: 0 auto;

    ${({ buttons }) => buttons && css`
        display: flex;
        justify-content: space-between;
        align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column;
        align-items: flex-start;
    }
    `}

`;


export const Header = styled.h2`
    margin: 0;
`;

export const Content = styled.div`
    padding: 15px;
    
    ${({ displayNone }) => displayNone && css`
        display: none;
    `};
`;



