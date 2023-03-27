import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage() {

    const [email, setEmail] = useState()

    const submitForm = (e) => {
        if (email) {

        }
        else {
            e.preventDefault();
            alert("Please enter the Email Address.");
        }
    };

    return (
        <>
            <img src="./NetflixBanner.png" alt="banner" className="NetflixBanner" />
            <div className="navb">
                <div className='logoDiv'><img src="./Netflix_logo.png" alt="logo" className="netflixLogo" /></div>
                <div className='nav-items'>
                    <select name="language" className='dropdown'>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <button className='Signin'>Sign In</button>
                </div>
            </div>
            <div className="discription">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h5>Watch anywhere. Cancel anytime.</h5>
                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                <form className='email' onSubmit={submitForm}>
                    <input type="email"
                        value={email}
                        placeholder='Email Address:'
                        onChange={(e) => { setEmail(e.target.value); }} />
                    <Link className='btn' type="submit" to='/mainPage'>Get Started</Link>
                </form>
            </div>
            <div className='breakLine'></div>
            <footer className='footer'>
                <div className="footerElemDiv">
                    <span>FAQ</span>
                    <span>Account</span>
                    <span>Jobs</span>
                    <span>Privacy</span>
                    <span>Contact Us</span>
                    <span>Only on Netflix</span>
                </div>
                <div className="footerElemDiv">
                    <span>Gift Card Terms</span>
                    <span>Media Centre</span>
                    <span>Ways to Watch</span>
                    <span>Cookie Preferences</span>
                    <span>Speed Test</span>
                </div>
                <div className="footerElemDiv">
                    <span>Help Centre</span>
                    <span>Investor Relations</span>
                    <span>Terms of Use</span>
                    <span>Corporate Information</span>
                    <span>Legal Notices</span>
                </div>
            </footer>
            <div className='footerBottom'>Copyrights Netflix India &#169;</div>
        </>
    )
}