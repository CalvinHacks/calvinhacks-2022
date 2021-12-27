import React from 'react'
import { HeroContainer, HeroH1, HeroP, HeroButtonContainer, HeroImage } from './HeroElement';
import { Button } from '../ButtonElement'
import plugin from '../../image/plugIn.png'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroH1>
                CalvinHacks 2022 <br>
                </br>
                Get Plugged in!
            </HeroH1>
            <HeroP>
            CalvinHacks is returning for its 4th event this year. Come and join us!            </HeroP>
            <HeroButtonContainer>
                <Button to='/signup'
                    primary='true'
                    big='true'
                    dark='true'
                    liner=''
                    fontLarge=''
                >
                    Sign Up
                </Button>
                <Button to='SponsorUs'
                    primary=''
                    liner='true'
                    big="true"
                    dark=''
                    fontLarge=""
                    color=''
                >
                    Sponsor Us
                </Button>
            </HeroButtonContainer>
            <HeroImage>
            <img src={plugin} alt='plugin'/>
            </HeroImage>
        </HeroContainer>
    )
}

export default HeroSection;
