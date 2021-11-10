import React from 'react'
import { HeroContainer, HeroH1, HeroP, HeroButtonContainer } from './HeroElement';
import { Button } from '../ButtonElement'

const HeroSection = () => {
    return (
        <HeroContainer id="about">
            <HeroH1>
                CalvinHacks
            </HeroH1>
            <HeroP>
                CalvinHacks is a 24-hour hackathon at Calvin University where creative and bright students come together to develop projects, learn new skills, and bond with like-minded individuals! Students have the opportunity to design software and win prizes, something you just don't get in university-level coursework.
            </HeroP>
            <HeroButtonContainer>
                <Button to='/signup'
                    primary='true'
                >
                    Sign Up
                </Button>
                <Button to='SponsorUs'
                    primary='true'
                >
                    Sponsor Us
                </Button>
            </HeroButtonContainer>
        </HeroContainer>
    )
}

export default HeroSection;
