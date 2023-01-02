import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.teal};
    font-size: 14px;
    border: none;
    color: white;
    transition: 600ms;
    
    &:hover{
        cursor: pointer;
    };

    ${({ changeBackground }) => changeBackground && css`
        background-color: ${({ theme }) => theme.colors.green};
        transform: rotate(360deg);
    `};

    ${({ lenght }) => lenght === 1 && css`
        transform: rotate(90deg);
    `}

    ${({ lenght }) => lenght === 2 && css`
        transform: rotate(180deg);
    `}

    ${({ lenght }) => lenght === 3 && css`
        transform: rotate(270deg);
    `}
    
    

    `;