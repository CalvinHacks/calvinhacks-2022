import { addDoc } from '@firebase/firestore';
import React, { useState } from 'react';
import { db, storage } from "./firebase";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import { MdOutlineArrowBackIos } from "react-icons/md"
import { Link as LinkR } from 'react-router-dom'
import { connectStorageEmulator, getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

import styled from "styled-components";

const BackButton = styled(LinkR)`
    display:inline-block;
    border-radius: 50%;
    border: 5px solid white;
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

    @media screen and (max-width: 615px) {
        visibility: visible;
    }

    
    @media screen and (max-width: 800px) {
        width: 50px;
        height: 50px;
        margin: 20px 20px 0 20px;
    }   
    
`

const LeftContainer = styled.div`
    background: #8C2131;
    height: 100%;
    width: 80%;
    
    @media screen and (max-width: 615px) {
        width: 35%;
    }
`

const RightContainer = styled.div`
    width: 100%;
    height: 100%;
`

const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: auto;

    
    @media screen and (max-width: 800px) {
        max-width: 90%;
        width: 150px;
        
    }   
`

const SignUpContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    label {
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    input {
        width: 200px;
        height: 30px;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 30px;
    }

    
`
const FirstNameContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const LastNameContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MajorContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const AllergyContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ShirtSizeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ResumeContainer = styled.div`
    /* width: 100%; */
    p {
        font-size: 15px;
    }

    input {
        margin-bottom: 10px;
    }

    button {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 800px) {
        p {
        font-size: 13px;
        margin: 0 0 5px 0;
    }
        
    }   
`

const ButtonContainer = styled.div`
    margin: auto auto;
    justify-content: center; 
    align-items: center;

    button {
        margin: 30px auto auto auto;
        justify-content: center; 
        align-items: center;
        width: 200px;
        height: 50px;
        background: #8C2131;
        border-style: none;
        border-radius: 15px;
        color: #fff;
        cursor: pointer;
        font-size: 15px;
        text-transform: uppercase;

        &:hover {
        transition: all 0.2s ease-in-out;
        background: #F3CD00;
        }

    }

    @media screen and (max-width: 800px) {
        button {
        margin: 10px;
        }
    }
`

const SignupPage = () => {    

    // states for uploading resume to the website
    const [progress, setProgress] = useState(0);
    const [resume, setResume] = useState({});

    // state for Modal 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // state for uploading student information to firebase
    const [state, setState] = useState ({
        firstName: "",
        lastName: "",
        email: "", 
        major: "",
        allergy: "",
        shirtSize: "",
    })

    const {firstName, lastName, email, major, allergy, shirtSize } = state; 


    const createUser = async () => {
        const db = getFirestore();

        // query(collectionReference, condition)
        // Goes through studentpatients collection and find a patient assigned to a specific user
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(
            doc => {
                if (doc.exists) {
                    alert("E-mail you have entered is already registered.")
                }
                else {
                    alert("Thank you for signing up for CalvinHacks 2021!");

                    addDoc(collection(db, "users"), 
                    {  
                        firstName: firstName, 
                        lastName: lastName,
                        email: email,
                        major: major,
                        allergy: allergy,
                        shirtSize: shirtSize,
                    })
                }
            }
        )
    }

    async function submit(e) {
        // console.log(this.state);
        e.preventDefault();
        createUser();
        setState({
            firstName: "",
            lastName: "",
            email: "", 
            major: "",
            allergy: "",
            shirtSize: "",
            resume: ""
        })
        // setShow(true);
    }

    const handleInput = (e) => {
        let {name , value} = e.target;
        setState({...state, [name]: value})
    }

    const resumeHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        setResume(file);
        // const file = e.target.files[0];
        // resumeUpload(file)
    }

    const resumeUpload = () => {
        console.log(resume)
        const storageRef = ref(storage, `/files/${resume.name}`);
        const uploadTask = uploadBytesResumable(storageRef, resume);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
        },
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => console.log(url))
        }
        )
    };

    return ( 
        <>
            {/* <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button variant="primary" onClick={handleClose}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal> */}
    
            <SignUpContainer>
                <LeftContainer>
                    <BackButton to="/">
                        {/* <IconContainer> */}
                            <MdOutlineArrowBackIos size = '40' color='#FFF' />
                        {/* </IconContainer> */}
                    </BackButton>
                    {/* <img src={picture} alt="picture"/> */}
                </LeftContainer>
                <RightContainer>
                    <InfoContainer>

                        <form className="form"
                            onSubmit={submit}
                        >
                            <h1>
                            Welcome to CalvinHacks!
                            </h1>
                            <FirstNameContainer>
                                <label>First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="first name"
                                    onChange={handleInput}
                                    value={firstName}
                                    required
                                />
                            </FirstNameContainer>

                            <LastNameContainer>
                                <label>Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder='last name'
                                    onChange={handleInput}
                                    value={lastName}
                                    required
                                />
                            </LastNameContainer>
                            
                            <EmailContainer>
                                <label>Email </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder='email address'
                                    onChange={handleInput}
                                    value={email}
                                    required
                                />
                            </EmailContainer>

                            <MajorContainer>
                                <label>Major(s)</label>
                                <input
                                    type="text"
                                    name="major"
                                    placeholder='Your major(s)'
                                    onChange={handleInput}
                                    value={major}
                                    
                                />
                            </MajorContainer>

                            <AllergyContainer>
                                <label>Allergy / Dietary Restrictions  </label>
                                <input 
                                    type="text"
                                    name="allergy"
                                    placeholder='Any allergies you have'
                                    onChange={handleInput}
                                    value={allergy}
                                />
                            </AllergyContainer>
                            
                            <ShirtSizeContainer>
                                <label>Shirt Size (Adult Sizes Only)</label>
                                <input 
                                    type="text"
                                    name="shirtSize"
                                    placeholder='Your shirt size (S, M, L, XL, XXL)'
                                    onChange={handleInput}
                                    value={shirtSize}
                                />
                            </ShirtSizeContainer>

                            <ButtonContainer>
                                <button 
                                type="submit"
                                >
                                    Submit
                                </button>
                            </ButtonContainer>
                        </form>
                        <ResumeContainer>
                            <p><b>Optional:</b> Upload a resume for sponsors to view!</p>
                            <p>Ensure your resume has a unique identifier.</p>
                            <p>(firstName_lastName_resume.pdf)</p>
                            <input 
                                    type="file"
                                    name='resume'
                                    onChange={resumeHandler}
                                />
                            <button
                                onClick={resumeUpload}
                                >
                                Submit Resume
                            </button>
                            <p>
                                Uploaded: {progress} %
                            </p>
                        </ResumeContainer>
                    </InfoContainer>
                </RightContainer>
            </SignUpContainer>
        </>
    )
}

export default SignupPage
