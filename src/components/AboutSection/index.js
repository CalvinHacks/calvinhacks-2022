import React, {useEffect, useState } from 'react';

import {Parallax, FrontImg, MidImg, BackImg, 
    BackgroundImg, DescriptionP,  AboutSectionContainer, 
    AboutDescriptionSection, ImgFront, ImgMid, ImgBack, TextWithImageSection, 
    DetailSection, ImgBackground} from './AboutElement';

import dev from '../../image/develope.png'
import learn from '../../image/learn.png'
import meet from '../../image/meet.png'


import parallax_background from '../../image/parallax_background.png'
import parallax_back from '../../image/parallax_back-01.png'
import parallax_mid from '../../image/parallax_mid-01.png'
import parallax_front from '../../image/parallax_front-01.png'

const AboutSection = () => {

        // state to keep track of how many px scrolled
    const [scroll, setScroll] = useState(window.scrollY);
    const handleScroll = () => setScroll(window.scrollY);

     // set up listener on window to update scroll state on scroll
     useEffect(() => {
    window.addEventListener("scroll", handleScroll);
     }, []);


    return (
        <AboutSectionContainer  id="about">
        
            <Parallax>
                <section>
                    <FrontImg>
                         <ImgFront src={parallax_front} alt='front'  
                             heightValue={scroll * .15}/>
                    </FrontImg> 
                    <MidImg>
                        <ImgMid src={parallax_mid} alt='mid'
                             heightValue={scroll * .3}/>
                    </MidImg>
                    <BackImg>
                        <ImgBack src={parallax_back} alt='back'
                            heightValue={scroll * .4}/>
                    </BackImg>
                    <BackgroundImg>
                        <ImgBackground src={parallax_background} 
                        alt='background' heightValue={scroll * .4}/>
                    </BackgroundImg>
                </section>
            </Parallax> 

            <AboutDescriptionSection>
                {/* <p>Px scrolled: {scroll}</p> */}
                <DescriptionP>
                     A 24-hour hackathon where students 
                     <br></br>can take a break from school and:
                </DescriptionP>
                <TextWithImageSection>
                    <DetailSection>
                        <img src={meet} alt='circle' ></img>
                        <p>
                            Bond with like-minded  
                            <br></br>
                            individuals and make new friends
                        </p>
                    </DetailSection>
                    <DetailSection>
                        <img src={learn} alt='circle'></img>
                        <p>
                            Learn new skills beyond
                            <br></br>
                             computer science with peers
                        </p>
                    </DetailSection>
                    <DetailSection>
                        <img src={dev} alt='circle'></img>
                        <p>
                            Develop projects
                            <br></br>
                             that will come to live
                        </p>
                    </DetailSection>
                </TextWithImageSection>
                <DescriptionP>
                    Also you win prizes! ;)
                </DescriptionP>
            </AboutDescriptionSection>
            
        </AboutSectionContainer>
    )
}

export default AboutSection
