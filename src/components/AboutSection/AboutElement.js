import styled, {keyframes}from 'styled-components'

export const AboutSectionContainer = styled.div`
    display:inline-flex;
    flex-direction: column;
    background: #FFF;
    width:100%;
    color: white;
    width: 100vw;
    height: 130vh;
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
        top:0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
 
    }
`


export const FrontImg = styled.div`
    img {
        z-index: 10;  
    }
`

export const MidImg = styled.div`
    img {
        z-index: 9;  
    }
`

export const BackImg = styled.div`
    img {
        z-index: 8;  
    }
`

export const BackgroundImg = styled.div`
    img {
        z-index: 7;  
    }
`


export const AboutDescriptionSection = styled.div`
    height: auto;
    width: 100%;
    text-align: center;
    background: #191F27;
    display: flex;
    flex-direction: column;
    align-items: center;
     
    @media screen and (max-width: 760px) {
        display:none;
    }
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
    }
`
export const TextWithImageSection = styled.div`
    display:inline-flex;
    justify-content: space-evenly;
    width:100%;
`

