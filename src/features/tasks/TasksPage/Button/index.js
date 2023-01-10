import styled from "styled-components";

export const Button = styled.button`
    padding: 7px;
    background-color: transparent;
    font-size: 15px;
    border: none;
    color: ${({theme})=> theme.colors.darkTeal};
    transition: .3s;
    
    &:hover{
        cursor: pointer;
        filter: brightness(105%);
        transform: scale(1.02);
    }

    &:disabled{
        color: grey;
        transform: none;
        cursor: auto;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin-top: 5px;
    }
    `; 