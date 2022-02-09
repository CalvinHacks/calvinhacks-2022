import React from 'react'
import { FooterContainer, SocialMediaContainer,InfoContainer, ContentContainer } from './FooterElement'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from 'react-icons';

function FooterSection() {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '30px'}}>
                <FooterContainer>
                    <ContentContainer>
                        <InfoContainer>
                            <p> More Info</p>
                            <p> MLH Code of Conduct</p>
                            <p> Copyright @ Calvinhacks 2021</p>
                        </InfoContainer>
                        <SocialMediaContainer>
                            <p> Follow us on social Media</p>
                            <a href="https://www.instagram.com/calvinhacks/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram />
                            </a>
                            <a href="https://www.instagram.com/calvinhacks/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineMail />
                            </a>
                        </SocialMediaContainer>
                    </ContentContainer>
                </FooterContainer>
            </IconContext.Provider>
        </>
    )
}

export default FooterSection
