import styled, { css } from "styled-components"

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
    transition: .5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({theme})=> theme.colors.green};
        color:white;

        &:hover {
            background-color: ${({theme})=> theme.colors.lightGreen};
            cursor:pointer;
        };

        &:active {
            background-color: ${({theme})=> theme.colors.veryLightGreen};
        }
    `};

    ${({ toggleRemove }) => toggleRemove && css`
        background-color: rgb(222, 58, 58);
        color:white;

        &:hover {
            background-color: hsl(0, 71%, 38%);
            cursor: pointer;
        }
        &:active {
            background-color: hsl(0, 71%, 30%);
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
`;