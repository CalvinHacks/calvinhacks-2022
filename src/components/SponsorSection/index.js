import React from 'react';
import { SponsorContainer, SponsorImageContainer, SponsorSilver, SponsorBronze, SponsorLink } from './SponsorElement';
import dornerworks from '../../image/dornerworks.png'
import spindance from '../../image/spindance.jpg'
import atomicobject from '../../image/atomic.png'

const SponsorSection = () => {
    return (
        <SponsorContainer id='Sponsor'>
            <h1>Sponsor</h1>
            <SponsorImageContainer>
                <SponsorSilver>
                    <SponsorLink href='https://dornerworks.com/'>
                        <img src={dornerworks} alt='dornerworks'/>
                    </SponsorLink>
                </SponsorSilver>
                <SponsorBronze>
                    <SponsorLink href='https://spindance.com/'>
                        <img src={spindance} alt='spindance'/>
                    </SponsorLink>
                    <SponsorLink href='https://atomicobject.com/'>
                        <img src={atomicobject} alt='atomicobject'/>
                    </SponsorLink>
                </SponsorBronze>
            </SponsorImageContainer>
        </SponsorContainer>
    )
}

export default SponsorSection
