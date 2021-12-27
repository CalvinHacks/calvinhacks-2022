import React from 'react'
import {AboutImageContainer,DescriptionP, AboutSectionContainer, AboutDescriptionSection, TextWithImageSection, DetailSection} from './AboutElement';
import computer from '../../image/computer.png'
import circle from '../../image/circle.png'

const AboutSection = () => {
    return (
        <AboutSectionContainer  id="about">
            <AboutImageContainer>
                <img src={computer} alt='computer'></img>
            </AboutImageContainer>
            <AboutDescriptionSection>
                <DescriptionP>
                     A 24-hour hackathon where creative and bright 
                     students come together to:
                </DescriptionP>
                <TextWithImageSection>
                    <DetailSection>
                        <img src={circle} alt='circle'></img>
                        <p>
                            Bond 
                            <br></br>
                            with like-minded individuals
                        </p>
                    </DetailSection>
                    <DetailSection>
                        <img src={circle} alt='circle'></img>
                        <p>
                            Learn
                            <br></br>
                            new skills beyond computer science
                        </p>
                    </DetailSection>
                    <DetailSection>
                        <img src={circle} alt='circle'></img>
                        <p>
                            Develop 
                            <br></br>
                            projects that comes to life 
                        </p>
                    </DetailSection>
                </TextWithImageSection>
                <DescriptionP>
                    Also you win prizes!
                </DescriptionP>
            </AboutDescriptionSection>
        </AboutSectionContainer>
    )
}

export default AboutSection
