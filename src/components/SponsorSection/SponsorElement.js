import styled from 'styled-components'

export const SponsorContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
    }
`

export const SponsorImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const SponsorLink = styled.a`
    filter: grayscale(100%);

    &:hover {
        filter: grayscale(0%);
    }
`

export const SponsorSilver = styled.div`
    img {
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
`

export const SponsorBronze = styled.div`
    img {
        width: 200px;
        height: 100px;
        object-fit: contain;
    }
`
