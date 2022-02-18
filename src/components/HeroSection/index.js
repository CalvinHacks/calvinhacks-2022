import React from 'react'
import { HeroContainer,  HeroImageLeft, HeroImageRight, HeroH1, HeroP, HeroButtonContainer,
     HeroImageContainer, SignupInfo} from './HeroElement';
import { Button, ButtonSponsor } from '../ButtonElement'
import left from '../../image/left-01-01.png'
import right from '../../image/right-01-01.png'
import url from '../../image/sponsor.pdf'

const HeroSection = () => {


    return (
        <HeroContainer>
            <HeroImageContainer>
                <HeroImageLeft>
                    <img src={left} alt='plugin'/>  
                </HeroImageLeft>
                <HeroImageRight>
                    <img src={right} alt='rigth'/>  
                </HeroImageRight>
            </HeroImageContainer>

            <SignupInfo>
                <HeroH1>
                    CalvinHacks 2022
                </HeroH1>
                <HeroP>
                    Take a Break and Get Plugged Back in!
                </HeroP>
                <HeroButtonContainer>
                    <Button to='/signup'
                        primary='true'
                        big='true'
                        dark='true'
                        liner=''
                        // fontLarge=''
                    >
                        Sign Up <br>
                        </br>as participant
                    </Button>
                    <ButtonSponsor
                        onClick={(e)=> {
                            e.preventDefault();
                            window.location.href="/static/media/SponsorshipDocument.673dc1e7.pdf";
                        }}
                        primary=''
                        liner='true'
                        big="true"
                        dark='true'
                        // fontLarge=""
                        color=''
                    >
                         Sponsor <br>
                         </br> Package
                    </ButtonSponsor>
                </HeroButtonContainer>
            </SignupInfo>
        </HeroContainer>
    )
}

export default HeroSection;
