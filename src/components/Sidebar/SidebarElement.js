import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside `
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #8C2131;
    display:grid;
    align-items: center;
    top: 0;
    left:0;
    transition: 0.3 ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%' )};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div `
    color:#fff;
`

export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    list-style: none;
    padding-left: 0;
    text-transform:uppercase;


    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #F3CD00;
        transition: 0.2s ease-in-out
    }
`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    padding-left: 0;

`


export const SideButtonContainer = styled.div `
    display:flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 20px;
    background: #F3CD00;
    text-transform:uppercase;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 20px;
    letter-spacing: 2px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #8C2131;
    }
`