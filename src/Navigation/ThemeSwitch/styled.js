import styled, { css } from "styled-components"

export const SwitchBody = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display:flex;
    width: 50px;
    padding: 2px;
    border-radius: 15px;
    outline: 2px solid ${({ theme }) => theme.colors.darkTeal};
    
    ${({ darkTheme }) => darkTheme && css`
        background-color: ${({ theme }) => theme.colors.mineShaft};
    `}
    
`
export const Switch = styled.button`
    background-color: ${({ theme }) => theme.colors.osloGray};
    border: none;
    padding: 2px;
    margin: 0px;
    border-radius: 50%;
    transition: .3s;
    font-size: 16px;

    &:hover{
        cursor: pointer;
    }

    ${({ darkTheme }) => darkTheme && css`
        translate: 20px;
    `}
`;