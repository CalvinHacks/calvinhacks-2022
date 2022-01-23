import React from 'react'
import { HeroContainer,  HeroImageLeft, HeroImageRight, HeroH1, HeroP, HeroButtonContainer,
     HeroImageContainer, SignupInfo} from './HeroElement';
import { Button } from '../ButtonElement'
import left from '../../image/left.png'
import right from '../../image/right.png'

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
                    CalvinHacks 2022 <br></br>
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
                    <Button to='SponsorUs'
                        primary=''
                        liner='true'
                        big="true"
                        dark=''
                        // fontLarge=""
                        color=''
                    >
                        Sponsor Package <br>
                        </br>
                    </Button>
                </HeroButtonContainer>
            </SignupInfo>
        </HeroContainer>
    )
}

export default HeroSection;
