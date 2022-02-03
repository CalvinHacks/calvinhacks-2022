import React from 'react';
import { SponsorContainer, SpnsorImageContainer } from './SponsorElement';
import dornerworks from '../../image/dornerworks.png'

const SponsorSection = () => {
    return (
        <SponsorContainer id='Sponsor'>
            <h1>Sponsor</h1>
            <SpnsorImageContainer>
                <img src={dornerworks} />
            </SpnsorImageContainer>
        </SponsorContainer>
    )
}

export default SponsorSection
