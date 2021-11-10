import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height:800px;
    position: relative;
    z-index: 1;
    padding: 0 10% 0 10%;
`

export const HeroH1 = styled.h1 `
    color: black;
`

export const HeroP = styled.p `
    color: black;
`

export const HeroButtonContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-evenly;
`