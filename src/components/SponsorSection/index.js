import React from 'react';
import { SponsorContainer, SpnsorImageContainer } from './SponsorElement';
import dornerworks from '../../image/dornerworks.png'

const SponsorSection = () => {
    return (
        <SponsorContainer id='Sponsor'>
            <h1>Sponsor</h1>
            <SpnsorImageContainer>
                <a href='https://dornerworks.com/'>
                    <img src={dornerworks} alt='dornerworks'/>
                </a>
            </SpnsorImageContainer>
        </SponsorContainer>
    )
}

export default SponsorSection
