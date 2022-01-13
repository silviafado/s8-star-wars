import React, { useState } from 'react';
import 'react-modal-login/dist/react-modal-login.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { StylesModal, StylesLogSelect, StylesLogSelect2 } from './LoginModalStyles';
import '../../App.css';


const LoginModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const openModal = () => { setShowModal(true) };
    const closeModal = () => {
        setShowModal(false);
        setError(null);
    };
    const openSignIn = () => {
        setShowSignIn(true);
        setShowSignUp(false);
    };
    const openSignUp = () => {
        setShowSignUp(true);
        setShowSignIn(false);
    };


    const onLoginSuccess = (method, response) => {
        console.log("logged successfully with " + method);
    }

    const onLoginFail = (method, response) => {
        console.log("logging failed with " + method);
        setError({ error: response });
    }

    const startLoading = () => {
        setLoading(true);
    }

    const finishLoading = () => {
        setLoading(false);
    }

    const afterTabsChange = () => {
        setError(null);
    }

    /* 
                loginError={{
                    label: "Couldn't sign in, please try again."
                }}
                registerError={{
                    label: "Couldn't sign up, please try again."
                }}
                startLoading={this.startLoading.bind(this)}
                finishLoading={this.finishLoading.bind(this)} */



    return (
        <div>
            <button className="button" onClick={openModal}>LOG IN</button>

            {showModal ? (
                <StylesModal id="modal-form">
                    <div className="RML-login-modal-overlay"></div>
                    <StylesModal className="RML-login-modal-box">
                        <div className="RML-login-modal-box-content">
                            <StylesModal className="RML-login-modal-close">
                                <CloseButton variant="white" aria-label="Close" onClick={closeModal} />
                            </StylesModal>
                            <StylesLogSelect>
                                <button className="logButton" onClick={openSignIn}>LOG IN</button>
                            </StylesLogSelect>
                            {showSignIn ? (
                                <StylesModal className="RML-social-modal-content-wrap">
                                    <div className="RML-login-modal-form">
                                        <div className="RML-form-group">
                                            <label htmlFor="form-email">Email</label>
                                            <input type="email" className="RML-form-control" id="form-email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="RML-form-group">
                                            <label htmlFor="form-password">Password</label>
                                            <input type="password" className="RML-form-control" id="form-password" name="password" placeholder="Password" />
                                        </div>
                                        <div class="buttonDiv">
                                            <button className="RML-btn" id="loginSubmit">LOG IN</button>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                        <StylesLogSelect2 classNamme="create-account">
                                            <button className="logButton2" onClick={openSignUp}>CREATE YOUR ACCOUNT</button>
                                        </StylesLogSelect2>
                                    </div>
                                </StylesModal>) : null}
                            {showSignUp ? (
                                <StylesModal className="RML-social-modal-content-wrap">
                                    <div className="RML-login-modal-form">
                                        <div className="create-account" >CREATE YOUR ACCOUNT</div>
                                        <div className="RML-form-group">
                                            <label htmlFor="form-name">Name</label>
                                            <input type="text" className="RML-form-control" id="form-name" name="name" placeholder="Your name" />
                                        </div>
                                        <div className="RML-form-group">
                                            <label htmlFor="form-surname">Surname</label>
                                            <input type="text" className="RML-form-control" id="form-surname" name="surname" placeholder="Your surname" />
                                        </div>
                                        <div className="RML-form-group">
                                            <label htmlFor="form-email">Email</label>
                                            <input type="email" className="RML-form-control" id="form-email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="RML-form-group">
                                            <label htmlFor="form-password">Password</label>
                                            <input type="password" className="RML-form-control" id="form-password" name="password" placeholder="Password" />
                                        </div>
                                        <div class="buttonDiv">
                                            <button className="RML-btn" id="loginSubmit">SIGN UP</button>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                    </div>
                                </StylesModal>
                            ) : null}
                        </div>
                    </StylesModal>
                </StylesModal>
            ) : null}
        </div>
    );
}


export default LoginModal;