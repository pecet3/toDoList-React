import styled, { css } from "styled-components";

export const Input = styled.input`
    padding: 8px;
    
    ${({ search }) => search && css`
        flex-basis: 40%;
    `}
`;