import React, { useEffect, useState, useRef } from 'react';
import axios, { Axios } from 'axios';
import { useHistory } from 'react-router-dom';
import './MediaQueries.css';
import './MainBody.css';
import messageIcon from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/Message_icon.png'
import x from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/1024px-Grey_close_x.svg.png'



const Footer = (props) => {

    const formRef = useRef();
    const closeRef = useRef();
    const formBodRef = useRef();
    const messagebtnRef = useRef();
    const overlayRef = useRef();
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState([]);



    const showFillOutForm = (e) => {
        const formNode = formRef.current;
        const overlayRefNode = overlayRef.current;
        formNode.classList.add("active");
        overlayRefNode.style.display = "block";
    }

    const closeForm = (e) => {
        const formNode = formRef.current;
        const overlayRefNode = overlayRef.current;
        formNode.classList.remove("active");
        overlayRefNode.style.display = "none";
    }

    const overlayGone = (e) => {
        const formNode = formRef.current;
        const overlayRefNode = overlayRef.current;
        formNode.classList.remove("active");
        overlayRefNode.style.display = "none";
    }


    const firstNameInput = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameInput = (e) => {
        setLastName(e.target.value);
    }
    const emailInput = (e) => {
        setEmail(e.target.value);
    }
    const phoneNumberInput = (e) => {
        setPhoneNumber(e.target.value);
    }

    const messagebtneffect = (e) => {
        const messagebtnNode = messagebtnRef.current;
        messagebtnNode.classList.add('shadow-effect');

    }

    const messagebtneffectout = (e) => {
        const messagebtnNode = messagebtnRef.current;
        messagebtnNode.classList.remove('shadow-effect');
    }

    const submitForm = (e) => {
        e.preventDefault();
        const formBodRefNode = formBodRef.current;

        axios.post('http://localhost:8000/api/users', {
            firstName,
            lastName,
            email,
            phonenumber
        })
            .then(response => {
                console.log("New Inquiry Submittied", response)
                formBodRefNode.innerHTML = 
                ` 
                <form ref=${formRef}>
                <h3 id="title" style="padding: 10px">Thanks for reaching out, I'll be sure to get back to you soon!</h3>
                </form>
            `
                history.push("/")
            })

            .catch(error => {
                const errorResponse = error.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                return errors;
            })
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
    }



    return (

        <div id="footer-container">
            <div id="form-overlay" ref={overlayRef} onClick={ overlayGone }></div>
            <form ref={formRef} onSubmit={submitForm} id="footer-formpop">
                <div id="close-container">
                    <img src={(x)} id="x" ref={closeRef} onClick={closeForm} />
                </div>
                <div id="form-body" ref={ formBodRef }>
                <h2 id="title">Lets Get In Touch</h2>
                <p id="contact">I'm always interested in hearing about new and exciting projects,
                    so if you'd like any more info from me drop a message below and I'll get back to you within <b>24 hours.</b></p>
                <input type="text" placeholder="First Name.." onChange={firstNameInput} value={firstName} />
                <p id="alert">{errors[0]}</p>
                <input type="text" placeholder="Last Name.." onChange={lastNameInput} value={lastName} />
                <p id="alert">{errors[1]}</p>
                <input type="text" placeholder="Email.." onChange={emailInput} value={email} />
                <p id="alert">{errors[2]}</p>
                <input type="text" placeholder="Phone Number.." onChange={phoneNumberInput} value={phonenumber} />
                <p id="alert">{errors[3]}</p>
                <button>Submit</button>
                </div>
            </form>
            <img src={(messageIcon)} ref={ messagebtnRef } alt="" id="message-icon" onClick={showFillOutForm} onMouseOver={ messagebtneffect } onMouseOut={ messagebtneffectout }/>
        </div>
    )
}
export default Footer;