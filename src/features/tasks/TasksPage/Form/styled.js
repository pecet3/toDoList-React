import styled from "styled-components";

export const StyledForm = styled.form`
    display:grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({theme})=> theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 8px;
`;

export const Button = styled.button`
    background-color: ${({theme})=> theme.colors.teal};
    color: white;
    font-weight: 200;
    border:none;
    padding:10px;
    transition: .3s;

    &:hover{
        cursor: pointer;
        filter: brightness(120%);
        transform: scale(1.06);
    }

`;