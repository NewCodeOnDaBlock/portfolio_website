import React, { useEffect, useState, useRef } from 'react';
import axios, { Axios } from 'axios';
import { useHistory } from 'react-router-dom';
import './MainBody.css';
import './MediaQueries.css';
import Footer from './Footer';
import profilePic from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/my-profile.jpeg'
import gitHub from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/Github_grey.png'
import linkedIn from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/Linkedin_grey.png'
import x from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/1024px-Grey_close_x.svg.png'
import MERN from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/MERN-logo.png';
import Js from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/js_css_html_logo_png.png'
import java from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/kisspng-java-database-connectivity-mysql-computer-software-java-5ade3070c27192.6401127415245108327965.png'
import whaleOp from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/videos/Whale_op_MVP.mp4';
import betterU from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/videos/Calorie count.mp4';
import learningDash from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/videos/Learning_Dash.mp4'
import dojologo from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/codingdojo_logo.jpeg'
import collegelogo from '/Users/radenlmantuano/Desktop/mern_projects/official_portfolio2021/client/src/components/images/university_of_phoenix_logo.jpeg'



const MainBody = (props) => {

    const aboutbtnRef = useRef();
    const viewworkRef = useRef();
    const gitbtnRef = useRef();
    const linkedinbtnRef = useRef();
    const aboutmeRef = useRef();
    const portfolioRef = useRef();
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



    const aboutbtneffect = (e) => {
        const aboutBtnNode = aboutbtnRef.current;
        aboutBtnNode.classList.add('shadow-effect')
    }

    const viewworkbtneffect = (e) => {
        const viewworkBtnNode = viewworkRef.current;
        viewworkBtnNode.classList.add('shadow-effect')
    }

    const githubbtneffect = (e) => {
        const gitBtnNode = gitbtnRef.current;
        gitBtnNode.classList.add('shadow-effect');
    }

    const linkedinbtneffect = (e) => {
        const linkedinBtnNode = linkedinbtnRef.current;
        linkedinBtnNode.classList.add('shadow-effect');

    }

    const githubbtneffectout = (e) => {
        const gitBtnNode = gitbtnRef.current;
        gitBtnNode.classList.remove('shadow-effect');

    }

    const linkedinbtneffectout = (e) => {
        const linkedinBtnNode = linkedinbtnRef.current;
        linkedinBtnNode.classList.remove('shadow-effect');
    }


    const aboutbtneffectout = (e) => {
        const aboutBtnNode = aboutbtnRef.current;
        aboutBtnNode.classList.remove('shadow-effect')
        // aboutBtnNode.classList.add('shadow-out');
    }

    const viewworkbtnout = (e) => {
        const viewworkBtnNode = viewworkRef.current;
        viewworkBtnNode.classList.remove('shadow-effect');

        // viewworkBtnNode.classList.add('shadow-out');
    }

    const showAboutme = (e) => {
        const aboutmeRefNode = aboutmeRef.current;
        const overlayNode = overlayRef.current;
        aboutmeRefNode.classList.add('active');
        aboutmeRefNode.classList.remove('after');
        overlayNode.style.display = "block"
    }

    const closeAboutMe = (e) => {
        const aboutmeRefNode = aboutmeRef.current;
        const overlayNode = overlayRef.current;
        aboutmeRefNode.classList.add('after');
        aboutmeRefNode.classList.remove('active');
        overlayNode.style.display = "none"

    }

    const showFillOutForm = (e) => {
        const formNode = formRef.current;
        const aboutmeRefNode = aboutmeRef.current;
        const overlayNode = overlayRef.current;
        aboutmeRefNode.classList.remove('active');
        formNode.classList.add("active");
        overlayNode.style.display = "block"
    }

    const closeForm = (e) => {
        const formNode = formRef.current;
        const overlayNode = overlayRef.current;
        formNode.classList.remove("active");
        overlayNode.style.display = "none";

    }

    const showPortfolio = (e) => {
        const portfolioRefNode = portfolioRef.current;
        const overlayNode = overlayRef.current;
        portfolioRefNode.classList.add('active');
        portfolioRefNode.classList.remove('after');
        overlayNode.style.display = "block";
    }

    const closePortfolio = (e) => {
        const portfolioRefNode = portfolioRef.current;
        const overlayNode = overlayRef.current;
        portfolioRefNode.classList.add('after');
        portfolioRefNode.classList.remove('active');
        overlayNode.style.display = "none";
    }

    const overlayGone = (e) => {
        const portfolioRefNode = portfolioRef.current;
        const aboutmeRefNode = aboutmeRef.current;
        const formNode = formRef.current;
        const overlayRefNode = overlayRef.current;
        aboutmeRefNode.classList.add('after');
        aboutmeRefNode.classList.remove('active');
        portfolioRefNode.classList.add('after');
        portfolioRefNode.classList.remove('active');
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

        <div id="main-container">


            <div id="dark-overlay" ref={overlayRef} onClick={overlayGone}></div>
            <div id="middle-container">
                <img src={(profilePic)} alt="" id="profile-pic" />
                <h2 id="title">Full Stack Software Developer</h2>
                <p id="contact">To get in contact please email <b>RadenLMantuano@gmail.com</b> <br></br>
                    or click on the message icon below.</p>
                <div id="aboutbtn-container">
                    <button id="abtme-btn" ref={aboutbtnRef} onClick={showAboutme} onMouseOver={aboutbtneffect} onMouseOut={aboutbtneffectout}>About Me</button>
                    <button id="viewwork-btn" ref={viewworkRef} onClick={showPortfolio} onMouseOver={viewworkbtneffect} onMouseOut={viewworkbtnout}>View Work</button>
                </div>
                <div id="socials-container">
                    <a href='https://github.com/NewCodeOnDaBlock' target="_blank" ref={gitbtnRef} onMouseOver={githubbtneffect} onMouseOut={githubbtneffectout}>
                        <img src={(gitHub)} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/thebreakfastmarketingco/' target="_blank" ref={linkedinbtnRef} onMouseOver={linkedinbtneffect} onMouseOut={linkedinbtneffectout}>
                        <img src={(linkedIn)} alt="" />
                    </a>
                </div>
            </div>


            <div id="aboutme-popup" ref={aboutmeRef}>
                <div id="aboutme-close-container">
                    <img src={(x)} id="aboutme-x" onClick={closeAboutMe} />
                </div>
                <div id="about-me-content">
                    <p>I'm <b>Raden Mantuano</b> a Full Stack Software Developer and
                        over the last 5 years and more, I've worked to develop and execute various marketing strategies and activities for customer centric organizations. Handling Web Development, Digital Marketing campaigns including targeted e-commerce sales, ad optimization & scale, third party API integrations, lead generation, development and management of sales
                        funnels including traffic generation and email campaigns.</p>
                    <button onClick={showFillOutForm}>Get In Touch!</button>
                    <p><b>More..</b><br></br><br></br>
                        Extensive knowledge of responsive design principles from mobile to desktop utilizing the MERN Stack, and even some Java + SQL  and more!..
                        My 5+ years experience has given me first hand understanding of consumer psychology and decision making based on user experience, sale offers, function capabilities, and brand awareness.
                        I'm also a Full Stack Coding Dojo Boot Camp Graduate, For more info on my work history and experience, check out my <a href="https://www.linkedin.com/in/thebreakfastmarketingco/" target="_blank">LinkedIn Profile.</a></p>
                </div>
                <div>
                </div>
                <div>
                    <p id="aboutme-experience"><b>Experienced Languages</b></p>
                </div>
                <div id="aboutme-language-container">
                    <img src={(MERN)} alt="mern" style={{ width: '120px' }} id="mern-logo" />
                    <span>|</span>
                    <img src={(Js)} alt="javscript" style={{ width: '120px' }} id="html5-logo" />
                    <span>|</span>
                    <img src={(java)} alt="java" style={{ width: '90px' }} id="java-logo" />
                </div>
                <p id="aboutme-education"><b>Education</b></p>
                <div id="aboutme-language-container">
                    <div id="education">
                        <img src={(dojologo)} alt="mern" style={{ width: '80px', height: '70px', borderRadius: '10px' }} id="dojo-logo" />
                        <span>|</span>
                        <img src={(collegelogo)} alt="mern" style={{ width: '80px', height: '70px', borderRadius: '10px' }} id="phoenix-logo" />
                    </div>
                </div>
            </div>


            <div id="portfolio-popup" ref={portfolioRef}>
                <div id="portfolio-close-container">
                    <img src={(x)} id="portfolio-x" onClick={closePortfolio} />
                </div>
                <div id="portfolio-content-container">
                    <div id="portfolio-title">
                        <h3>Recent Projects</h3>
                    </div>
                    <div id="project-card">
                        <div id="video-placeholder">
                            <video loop="loop" autoPlay="autoplay" muted="muted" className="video">
                                <source src={(whaleOp)} />
                            </video>
                        </div>
                        <div id="project-title">
                            <h4>WhaleOp</h4>
                        </div>
                        <div id="project-library">
                            <p> ReactJs | Websocket | Socket.io | HTML5 | CSS </p>
                        </div>
                        <div id="project-description">
                            <p> Crytocurrency Tracker Web Application </p>
                        </div>
                        <a href="https://github.com/NewCodeOnDaBlock/whale_op" target="_blank">
                            <button id="viewproject-btn">View Project</button>
                        </a>
                    </div>


                    <div id="project-card">
                        <div id="video-placeholder">
                            <video loop="loop" autoPlay="autoplay" muted="muted" className="video">
                                <source src={(betterU)} />
                            </video>
                        </div>
                        <div id="project-title">
                            <h4>BetterU</h4>
                        </div>
                        <div id="project-library">
                            <p> Java | JavaScript | HTML5 | CSS | SQL </p>
                        </div>
                        <div id="project-description">
                            <p> Calorie & Productivity Tracker </p>
                        </div>
                        <a href="https://github.com/NewCodeOnDaBlock/better-u" target="_blank">
                            <button id="viewproject-btn">View Project</button>
                        </a>
                    </div>


                    <div id="project-card">
                        <div id="video-placeholder">
                            <video loop="loop" autoPlay="autoplay" muted="muted" className="video">
                                <source src={(learningDash)} />
                            </video>
                        </div>
                        <div id="project-title">
                            <h4>Learning Dashboard</h4>
                        </div>
                        <div id="project-library">
                            <p> Python | JavaScript | Socket.io | HTML5 | CSS | SQL </p>
                        </div>
                        <div id="project-description">
                            <p> Online Learning Platform </p>
                        </div>
                        <a href="https://github.com/NewCodeOnDaBlock/Learning_Dashboard" target="_blank">
                            <button id="viewproject-btn">View Project</button>
                        </a>
                    </div>
                </div>
            </div>


            <form ref={formRef} onSubmit={submitForm} id="footer-formpop">
                <div id="close-container">
                    <img src={(x)} id="x" ref={closeRef} onClick={closeForm} />
                </div>
                <div id="form-body" ref={formBodRef}>
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




            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}
export default MainBody;