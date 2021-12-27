import { setDoc, doc, addDoc } from '@firebase/firestore';
import React, { useState } from 'react';
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


const SignupPage = () => {    
    
    const [state, setState] = useState ({
        firstName: "",
        lastName: "James",
        email: "", 
        major: "",
        allergy: "",
        shirtSize: "",
        resume: ""
    })

    let {firstName, lastName, email, major, allergy, shirtSize, resume } = state; 

    const createUser = async () => {
        await addDoc(collection(db, "users"), {lastName: "testing..."})
    }

    async function submit(e) {
        // console.log(this.state);
        e.preventDefault();

        createUser();

        // db.collection("users")
        //     .doc("testValue")
        //     .set(state)
        //     .catch((error) => {
        //     // noError = false;
        //     alert("This e-mail address has already been used!"); // Catches duplicate e-mail address
        //     })
        //     // Give an alert when successfully registered
        //     .finally(() => {
        //         console.log("testing...");
        //         // if (noError) {
        //         //     alert("Thank you for signing up for CalvinHacks 2022!")
        //         // }
        //     });
    }
    const handleInput = (e) => {
        let {name , value} = e.target.value;
        setState({...state, [name]: value})
    }
    // const [firstName, SetFirst] = useState("")
    // const [lastName, SetLast] = useState("")
    // const [email, SetEmail] = useState("")
    // const [major, SetMajor] = useState("")
    // const [allergy, SetAllergy] = useState("")
    // const [shirtSize, SetShirt] = useState("")
    // const [resume, SetResume] = useState("")

    // const handleInput = () => {
    //     first = this.target.value(e)
    // }
    return (
        <div>
            <form className="form"
                onSubmit={submit}
            >

                <label>Name</label>
                <input
                    type="text"
                    onChange={handleInput}
                />

                <label>Email </label>
                <input
                    onChange={handleInput}
                />

                <label>Major </label>
                <input
                    onChange={handleInput}
                />

                <label>Allergy </label>
                <input 
                    onChange={handleInput}
                />

                <label>ShirtSize </label>
                <input 
                    onChange={handleInput}
                />

                <button
                type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignupPage
