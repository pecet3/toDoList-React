import styled, { css } from "styled-components"
import { Link } from "react-router-dom";

export const List = styled.ul`
    padding:0;
    list-style-type:none;

`;

export const Element = styled.li`
    border-bottom: 1px solid ${({theme})=> theme.colors.lightGrey};
    display:grid;
    grid-template-columns: auto 1fr auto;
    padding-bottom:5px;
    padding-top:5px;
    align-items: center;
    grid-gap:10px;

    ${({ hidden }) => hidden && css`
        display:none;
    `};
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    padding:0px;
    font-size: 20px;
    transition: .3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({theme})=> theme.colors.green};
        color:white;

        &:hover {
            filter: brightness(125%);
            cursor:pointer;
        };

        &:active {
            filter: brightness(130%);
        }
    `};

    ${({ toggleRemove }) => toggleRemove && css`
        background-color: ${({theme})=> theme.colors.red};
        color:white;

        &:hover {
            filter: brightness(125%);
            cursor: pointer;
        }
        &:active {
            filter: brightness(130%);
        }
    `}   
`;

export const Content = styled.p`
    margin-top:0;
    margin-bottom:0;
    font-size: 18px;

    ${({done}) => done && css`
        text-decoration: line-through;
    `}

    &:visited {
        text-decoration: none;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme})=> theme.colors.darkTeal};
    transition: .3s;

    &.visited {
        color: ${({theme})=> theme.colors.darkTeal};
    }
`;