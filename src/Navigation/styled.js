import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 1px;
    &.active{
        font-weight: bold;
    }
    &:visited{
        color: white;
    }
    &:hover{
        border-bottom: 1px solid;
    }
`;

export const Nav = styled.nav`
    padding: 1px;
    background-color: ${({ theme }) => theme.colors.teal};
    text-align: center;
    margin: 0 auto;
    display: flex;
    font-size: 20px;
`;

export const Ul = styled.ul`
    list-style: none;
    display:flex;
    padding-left: 0;
    margin: 0 auto;
`;
export const Li = styled.li`
    padding: 10px 15px;
`;

export const ButtonBackground = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display:flex;
    width: 50px;
    padding: 2px;
    border-radius: 15px;
    
    ${({ darkTheme }) => darkTheme && css`
        background-color: ${({ theme }) => theme.colors.mineShaft};
    `}
    
`
export const Button = styled.button`
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


