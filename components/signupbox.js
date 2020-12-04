
import { useState } from 'react';
import styles from '../styles/SignupBox.module.css'


function formSubmit() {
    event.preventDefault();
}

export default function SignupBox() {

    const firstForm = (
        <div>
            <form onSubmit={()=>formSubmit()}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><h3>Email address</h3></label>
                    <input type="email" className="form-control" id="inputEmail1" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"><h3>Password</h3></label>
                    <input type="password" className="form-control" id="inputPassword1" placeholder="Password"></input>
                    <br></br>
                    <input type="password" className="form-control" id="confirmPassword1" placeholder="Confirm Password"></input>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                <button type="submit" className="btn btn-danger" onClick={()=>nextSignupContent(1)}>Next</button>
                </div>
                </form>
        </div>
    )
    
    const secondForm = (
        <div>
            <form onSubmit={()=>formSubmit()}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><h3>Company info</h3></label>
                    <input className="form-control" id="compName" placeholder="Company name"></input>
                    <br></br>
                    <input className="form-control" id="compAddress" placeholder="Street address"></input>
                    <br></br>
                    <input className="form-control" id="compAddress" placeholder="City name"></input>
                    <br></br>
                    <label htmlFor="selectStata"><p>We operate only around NYC</p></label>
                    <select className="form-control" id="selectStata">
                        <option>New York</option>
                        <option>New Jersey</option>
                        <option>Pennsylvania</option>
                        <option>Delaware</option>
                        <option>Connecticut</option>       
                    </select>
                    <br></br>
                    <input className="form-control" id="compWeb" placeholder="Company website (URL)"></input>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button type="submit" className="btn btn-dark" style={{position: "relative", right: "20px"}} onClick={()=>nextSignupContent(0)}>Back</button>
                    <button type="submit" className="btn btn-danger" style={{position: "relative", left: "20px"}} onClick={()=>nextSignupContent(2)}>Next</button>
                </div>
            </form>
        </div>
    )
    
    const thirdForm = (
        <div>
            <form onSubmit={()=>formSubmit()}>
                <div className="form-group">
                    <label htmlFor="description"><h3>Describe current security situation</h3></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <br></br>
                    <input type="checkbox" className="form-check-input" id="termsCheck"></input>
                    <label className="form-check-label" htmlFor="termsCheck"><p>I agree to the terms and conditions</p></label>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button type="submit" className="btn btn-dark" style={{position: "relative", right: "20px"}} onClick={()=>nextSignupContent(1)}>Back</button>
                    <button type="submit" className="btn btn-danger" style={{position: "relative", left: "20px"}} onClick={()=>nextSignupContent(3)}>Finish</button>
                </div>
            </form>
        </div>
    )

    const fourthForm = (
        <div>
            <br></br><br></br>
            <h2>You're all set up!</h2>
            <h3>You will receive a response shortly...</h3>
            <img src="confetti.png" width="40%"></img>
        </div>
    )

    const [progress, setProgress] = useState(0);
    const [currentForm, setForm] = useState(firstForm);

    function nextSignupContent(number) {
        setProgress(number);
        console.log("setting form content for progress=", number)
        switch(number) {
            case 0:
                setForm(firstForm);
                break;
            case 1:
                setForm(secondForm);
                break;
            case 2:
                setForm(thirdForm);
                break;
            case 3:
                setForm(fourthForm);
        }
    }

    return (
        <div>
            <div className={styles.signup_container}>
                <div className={styles.signup_content}>
                    <h1>Sign up</h1>
                    <div className={styles.progress}>
                        <div className={styles.progress_box} style={progress <= 0 ? {backgroundColor: "black"} : {backgroundColor: "green"}}></div>
                        <div className={styles.progress_box} style={progress <= 1 ? {backgroundColor: "black"} : {backgroundColor: "green"}}></div>
                        <div className={styles.progress_box} style={progress <= 2 ? {backgroundColor: "black"} : {backgroundColor: "green"}}></div>
                       
                    </div>
                    <br></br>
                    <div className={styles.signup_fields}>
                        {currentForm}
                    </div>
                </div>
            </div>
        </div>
    )


}