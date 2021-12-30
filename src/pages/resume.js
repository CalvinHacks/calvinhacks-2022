import React from 'react'
import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const ResumeContainer = styled.div`

`

const BackButton = styled(LinkR)`
    display:inline-block;
    border-radius: 50%;
    border: 5px solid #8C2131;
    margin: 30px 0 0 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;

    svg {
        display: flex;
        margin: 5px auto 0 auto;
    }

    &:hover {
        border: 5px solid #F3CD00;

    }
`
const resume = () => {
    return (
        <ResumeContainer>
            <BackButton to="/">
                <MdOutlineArrowBackIos size = '40' color='#8C2131' />
            </BackButton>
            <h1>
                this is where all the resume will be displayed
            </h1>
        </ResumeContainer>
    )
}

export default resume
