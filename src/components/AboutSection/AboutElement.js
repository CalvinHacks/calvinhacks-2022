import styled from 'styled-components'

export const AboutSectionContainer = styled.div`
    display:inline-flex;
    flex-direction: column;
    background: #FFF;
    width:100%;
    color: white;
    width: 100vw;
    height: 130vh;
    
    @media screen and (max-width: 1000px) {
        height: 200vh;
    }
`

export const Parallax = styled.div`
        width: 100vw;
        height: 80vh;
    
    * {
        scroll-behavior: smooth;
    }

    section {
        position:relative;
        width: 100%;
        height: 100%;
        
    }

    section img {
        position:absolute;
        /* top:0;
        left: 0; */
        object-fit: cover;
        width: 100%;
        height: 100%;
 
    }
`

export const FrontImg = styled.div`
`

export const ImgFront = styled.img`
    z-index: 10;
    top:${props => props.heightValue}px;

    @media screen and (max-width: 1000px) {
        top:${props => props.heightValue - 15}px;
    }   

`

export const MidImg = styled.div`

`

export const ImgMid = styled.img`
    z-index: 9;
    top:${props => props.heightValue}px;

    @media screen and (max-width: 1000px) {
        top:${props => props.heightValue - 25}px;
    }   

`

export const BackImg = styled.div`

`
export const ImgBack = styled.img`
    z-index: 8;
    top:${props => props.heightValue}px;

    @media screen and (max-width: 1000px) {
        top:${props => props.heightValue - 30}px;
    }   

`


export const BackgroundImg = styled.div`
`
export const ImgBackground = styled.img`
     z-index: 7;  
     top:${props => props.heightValue}px;
`


export const AboutDescriptionSection = styled.div`
    height: auto;
    width: 100%;
    text-align: center;
    background: #191F27;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
     
`

export const DescriptionP = styled.p`
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    
`

export const DetailSection = styled.div`
    p {
        font-size: 20px;
    }

    img {
        width: 300px;
        height: 300px;
        object-fit: none;
        margin: auto auto;
    }
        @media screen and (max-width: 1000px) {
        display:flex;
        flex-direction: column;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

`
export const TextWithImageSection = styled.div`
    display:inline-flex;
    justify-content: space-evenly;
    width:100%;

    @media screen and (max-width: 1000px) {
        display:flex;
        flex-direction: column;
    }
`

