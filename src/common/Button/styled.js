import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px;
    background-color: ${({theme})=> theme.colors.teal};
    font-size: 14px;
    border: none;
    color: white;
    
    &:hover{
        cursor: pointer;
    };

    `;