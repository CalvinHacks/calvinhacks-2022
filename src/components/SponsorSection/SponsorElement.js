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

export const SpnsorImageContainer = styled.div`
    filter: grayscale(100%);

    &:hover {
        filter: grayscale(0%);
    }
`