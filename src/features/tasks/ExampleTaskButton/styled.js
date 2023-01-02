import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 7px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 14px;
    border: none;
    color: black;
    transition: .3s;
    
    &:hover{
        cursor: pointer;
        filter: brightness(120%);
        transform: scale(1.03);
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin-top: 5px;
    }
    `; 