import React, {Component, useEffect} from 'react';
import Popup from 'reactjs-popup';

const About = ({
    name, 
    email, 
    phoneNumber,
    handleUserNameChange,
    handleEmailChange,
    handlePhoneNumberChange
    }) => {

    const validateEmail = (email) => {
            var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
            return !re.test(email);
    }

    const validatePhoneNumber = (phoneNumber) => {
        var phoneExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return !phoneExp.test(phoneNumber);
    }

    return( 
        <div className="about">
            <input className="about-name" onInput={(e) =>{handleUserNameChange(e)}} value={name} />
            <div className="about-details">
                <div>E-Mail: </div>
                <input className="about-email" onInput={(e) =>{handleEmailChange(e)}} value={email}/>
                <div className={`${validateEmail(email) ? 'fadeIn' : 'fadeOut'} popup`}>
                    <span className ={ `${validateEmail(email) ? 'fadeIn' : 'fadeOut'} popuptext`} id="myPopup">Please input a valid email address</span>
                </div>
                <div>Phone number: </div>
                <input className="about-phone-number" type="tel" onInput={(e) =>{handlePhoneNumberChange(e)}} value = {phoneNumber}/>
                <div className={`${validatePhoneNumber(phoneNumber) ? 'fadeIn' : 'fadeOut'} popup`}>
                    <span className ={ `${validatePhoneNumber(phoneNumber) ? 'fadeIn' : 'fadeOut'} popuptext`} id="myPopup">Please input a valid phone number.</span>
                </div>
            </div>
        </div>
    )
}

export {About};