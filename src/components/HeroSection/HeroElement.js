import styled, {keyframes} from 'styled-components';

export const HeroContainer = styled.div`
    background: white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100vw;
    height: 80vh;
    position: relative;
    z-index: 1;

    @media only screen and (max-width: 1000px) {
        overflow: hidden;
        height: 80vh;
    }
`

export const slideinLeft = keyframes`
    0% {
        left :-50%;
    } 100%  {
        left: 7.5%;
    }
`
export const slideinRight = keyframes`
    0% {
        right :-50%;
    } 100%  {
        right: 7.5%;
    }
`
export const HeroImageLeft = styled.div`
        /* position: absolute;
        right:50%; */
        
        img {
            position:relative;
            animation-name: ${slideinLeft};
            animation-fill-mode: forwards;
            animation-duration: 2s;
            animation-iteration-count: 1;
        }
`

export const HeroImageRight = styled.div`
        /* position: absolute;
        left:50%;
        top:21%; */
       
        img {
            position:relative;
            padding-top:12px;
            animation-name: ${slideinRight};
            animation-fill-mode: forwards;
            animation-duration: 2s;
            animation-iteration-count: 1;
            z-index: -10;
        }
`

export const blink = keyframes`
    0% {
        opacity :0.0;
    } 
    75% {
        opacity: 0.0;
    }
    80% {
        opacity: 1.0;
    } 
    85% {
        opacity: 0.1; 
    }
    95%{
        opacity: 0.5;
    }
    100% {
        opacity :1;
    }
`

export const SignupInfo = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation-name: ${blink};

    animation-fill-mode: forwards;
    animation-duration: 3s;
    animation-iteration-count: 1;
`

export const HeroH1 = styled.h1 `
    color: #8C2131;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 50px;
    font-family: 'Open Sans', sans-serif;
    margin: 0 0;

    @media only screen and (max-width: 1000px) {
        font-size: 40px;
        font-weight: 1000;
    }

`

export const HeroP = styled.p `
    color: black;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    line-height: 1.5;

    @media only screen and (max-width: 1000px) {
        font-size: 25px;
        text-transform: uppercase;
        margin: 30px 20px 30px 20px;
    }

`

export const HeroButtonContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-evenly;
`

export const HeroImageContainer = styled.div`
    display: flex;
    width:100vw;
    justify-content: center;

`


