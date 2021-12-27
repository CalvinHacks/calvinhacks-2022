import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height:1000px;
    position: relative;
    z-index: 1;
    padding: 50px 10% 0 10%;
`

export const HeroH1 = styled.h1 `
    color: #8C2131;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 50px;
    font-family: 'Open Sans', sans-serif, font-weigh: 700;
`

export const HeroP = styled.p `
    color: black;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif, font-weight: 300;
`

export const HeroButtonContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-evenly;
`

export const HeroImage = styled.div`

`
