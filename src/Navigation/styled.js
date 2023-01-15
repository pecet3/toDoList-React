import styled from "styled-components";
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
    background-color: ${({theme})=>theme.colors.teal};
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
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

export const Button = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    padding: 0px;
    margin: 0px;
    
`;
