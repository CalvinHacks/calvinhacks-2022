import styled from "styled-components";
import { Link } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const Button = styled(LinkR)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? '#8C2131' : '#F3CD00')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: #FFFFFF;
    font-size: ${({fontLarge}) => (fontLarge ? '20px' : '16px')}
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F3CD00' : '#F3CD00')};
    }
`