import React, { useState, useContext } from 'react';
import { AppContext } from "../../application/provider";
import { StylesOverlay, StylesModalBox, StylesBoxAnimmation, StylesModal, StylesModalForm, StylesCloseDiv, StylesLogSelect, StlylesLogButton, StylesLogSelect2, StylesContainer, StylesFormGroup, StylesFormInput } from './LoginModalStyles';
import '../../App.css';
import 'react-modal-login/dist/react-modal-login.css';
import CloseButton from 'react-bootstrap/CloseButton';
import logo from '../../assets/logo_starwars.png';
import { StylesLogo2 } from '../../styled';

// Exercise 6: Log In and Sign Up in localStorage
let usersListArray = JSON.parse(localStorage.getItem("usersList"));
if (!usersListArray) {
    usersListArray = [];
}
console.log("User list", usersListArray);


const LoginModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const [isLogin, setIsLogin] = useContext(AppContext);

    console.log("Login status: ", isLogin);

    const newUser = { name: '', surname: '', email: '', password: '' };
    const data = { email: '', password: '' }

    const openModal = () => { setShowModal(true) };
    const closeModal = () => {
        setShowModal(false);
    };
    const openSignIn = () => {
        setShowSignIn(true);
        setShowSignUp(false);
    };
    const openSignUp = () => {
        setShowSignUp(true);
        setShowSignIn(false);
    };


    // Log In
    const handleLogIn = (event) => {
        event.preventDefault();
        const storedList = JSON.parse(localStorage.getItem("usersList"));
        const loginState = () => {
            for (let user of storedList) {
                if (user.email === data.email && user.password === data.password) {
                    closeModal();
                    console.log('You are logged in!');
                    alert('You are logged in!\nMay the Force be with you!!');
                    return true;
                }
            }
            return false;
        };
        setIsLogin(loginState);
    };

    // Sign Up
    const handleSignUp = (event) => {
        event.preventDefault();
        usersListArray.push(newUser);
        console.log(usersListArray);
        localStorage.setItem("usersList", JSON.stringify(usersListArray));
        openSignIn();
    };

    return (
        <div>
            <button className="button" onClick={openModal}>LOG IN</button>

            {showModal ? (
                <>
                    <StylesOverlay />
                    <StylesModalBox>
                        <StylesBoxAnimmation>
                            <StylesCloseDiv>
                                <CloseButton variant="white" aria-label="Close" onClick={closeModal} />
                            </StylesCloseDiv>
                            <StylesLogSelect>
                                <StlylesLogButton onClick={openSignIn}>LOG IN</StlylesLogButton>
                            </StylesLogSelect>
                            {showSignIn ? (
                                <StylesModal>
                                    <StylesModalForm>
                                        <StylesContainer>
                                            <StylesLogo2 src={logo} alt="logo" />
                                        </StylesContainer>
                                        <StylesFormGroup>
                                            <StylesFormInput type="email" id="email" name="email" placeholder="Username or Email Address" onChange={(e) => { data.email = e.target.value }} />
                                        </StylesFormGroup>
                                        <StylesFormGroup>
                                            <StylesFormInput type="password" id="password" name="password" placeholder="Password" onChange={(e) => { data.password = e.target.value }} />
                                        </StylesFormGroup>
                                        <div className="buttonDiv">
                                            <button className="RML-btn" id="loginSubmit" onClick={handleLogIn}>LOG IN</button>
                                        </div>
                                        <StylesLogSelect2 classNamme="create-account">
                                            <button className="logButton2" onClick={openSignUp}>CREATE YOUR ACCOUNT</button>
                                        </StylesLogSelect2>
                                    </StylesModalForm>
                                </StylesModal>) : null}
                            {showSignUp ? (
                                <StylesModal>
                                    <StylesModalForm>
                                        <StylesContainer>
                                            <StylesLogo2 src={logo} alt="logo" />
                                        </StylesContainer>
                                        <div className="create-account" >CREATE YOUR ACCOUNT</div>
                                        <StylesFormGroup>
                                            <StylesFormInput type="text" id="name" name="name" placeholder="Your name" onChange={(e) => { newUser.name = e.target.value }} autoFocus required />
                                        </StylesFormGroup>
                                        <StylesFormGroup>
                                            <StylesFormInput type="text" id="surname" name="surname" placeholder="Your surname" onChange={(e) => { newUser.surname = e.target.value }} required />
                                        </StylesFormGroup>
                                        <StylesFormGroup>
                                            <StylesFormInput type="email" id="email" name="email" placeholder="Email" onChange={(e) => { newUser.email = e.target.value }} required />
                                        </StylesFormGroup>
                                        <StylesFormGroup>
                                            <StylesFormInput type="password" id="password" name="password" placeholder="Password" onChange={(e) => { newUser.password = e.target.value }} />
                                        </StylesFormGroup>
                                        <div className="buttonDiv">
                                            <button className="RML-btn" id="loginSubmit" onClick={handleSignUp}>SIGN UP</button>
                                        </div>
                                    </StylesModalForm>
                                </StylesModal>
                            ) : null}
                        </StylesBoxAnimmation>
                    </StylesModalBox>
                </>
            ) : null}
        </div>
    );
}

export default LoginModal;