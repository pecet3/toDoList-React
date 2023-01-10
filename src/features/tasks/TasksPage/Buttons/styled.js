import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: ${({theme})=> theme.breakpoints.mobile}px){
        align-self: center;
        flex-direction: column;
        margin-top: 10px;
    }

`;


