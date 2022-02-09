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
                    Get Plugged Back in!
                </HeroH1>
                <HeroP>
                    {/* CalvinHacks is returning for its 4th event this year. 
                    <br></br>
                    Come and get plugged into our community!             */}
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
                            window.location.href="/static/media/sponsor.4ca28bf0.pdf";
                        }}
                        primary=''
                        liner='true'
                        big="true"
                        dark='true'
                        // fontLarge=""
                        color=''
                    >
                         Sponsor Package
                    </ButtonSponsor>
                </HeroButtonContainer>
            </SignupInfo>
        </HeroContainer>
    )
}

export default HeroSection;
