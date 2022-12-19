import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: ${({theme})=> theme.breakpoints.mobile}px){
        align-self: center;
        flex-direction: column;
        margin-top: 10px;
    }

`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({theme})=> theme.colors.darkTeal};
    transition: .3s;

    &:disabled{
        color: ${({theme})=> theme.colors.lightTeal};
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`;

