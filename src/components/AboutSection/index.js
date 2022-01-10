import React from 'react'
import {Parallax, FrontImg, MidImg, BackImg, BackgroundImg, DescriptionP, 
    AboutSectionContainer, AboutDescriptionSection, TextWithImageSection, DetailSection} from './AboutElement';

import dev from '../../image/develope.png'
import learn from '../../image/learn.png'
import meet from '../../image/meet.png'


import parallax_background from '../../image/parallax_background.png'
import parallax_back from '../../image/parallax_back.png'
import parallax_mid from '../../image/parallax_mid.png'
import parallax_front from '../../image/parallax_front.png'

const AboutSection = () => {
    return (
        <AboutSectionContainer  id="about">
            <Parallax>
                <section>
                    <FrontImg>
                         <img src={parallax_front} alt='front'/>
                    </FrontImg> 
                    <MidImg>
                        <img src={parallax_mid} alt='mid'/>
                    </MidImg>
                    <BackImg>
                        <img src={parallax_back} alt='back'/>
                    </BackImg>
                    <BackgroundImg>
                        <img src={parallax_background} className='background' />
                    </BackgroundImg>
                </section>
            </Parallax> 

            <AboutDescriptionSection>
                <DescriptionP>
                     A 24-hour hackathon where students 
                     <br></br>can take a break from school and:
                </DescriptionP>
                <TextWithImageSection>
                    <DetailSection>
                        <img src={meet} alt='circle'></img>
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
