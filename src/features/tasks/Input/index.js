import styled, { css } from "styled-components";

export const Input = styled.input`
    padding: 8px;
    
    ${({ search }) => search && css`
        width: 75%;

        @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
            margin-top: 10px;
            width: 100%;
        }
    `}
`;