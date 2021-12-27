import styled, {keyframes}from 'styled-components'

export const AboutSectionContainer = styled.div`
    display:inline-flex;
    flex-direction: row;
    background: #F5F5F5;
    width:100%;
`

export const DescriptionP = styled.p`
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    
`
export const slidein = keyframes`
    0% {
        margin-bottom: 0px;
    }
    50% {
        margin-bottom: 20px;
    }
    100% {
        margin-bottom: 30px;
    }
`


export const AboutImageContainer = styled.div`
    padding: 20px 20px;
    display:flex;
    justify-content: center;
    margin: auto;

    img {
        width: 450px;
        height: 400px;
    }
`

export const DetailSection = styled.div`

    p {
        font-size: 20px;
        animation-name: ${slidein};
        animation-duration: 8s;
    }

`

export const AboutDescriptionSection = styled.div`
    padding: 50px 50px;
    text-align: center;
`

export const TextWithImageSection = styled.div`
    display:inline-flex;
`