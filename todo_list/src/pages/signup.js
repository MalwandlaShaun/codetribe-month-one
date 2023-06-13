import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../components/Form.css"
import axios from 'axios';

export default function SignIn() {


    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const userLogin = {
        emailAddress, password
    }
    const handleSignin = async (e) => {
        if(password === confirmPassword && !isInvalid){
          
          e.preventDefault();
        await axios.post(`/login`, userLogin);
        console.log(userLogin)
        } else{
          setError("Passwords do not match")
        }
    }


    //   const handleSignin = (event) => {
    //     event.preventDefault();

    //     return firebase
    //       .auth()
    //       .signInWithEmailAndPassword(emailAddress, password)
    //       .then(() => {
    //         history.push(ROUTES.BROWSE);
    //       })
    //       .catch((error) => {
    //         setEmailAddress('');
    //         setPassword('');
    //         setError(error.message);
    //       });
    //   };

    return (
        <>
            <form className="form-container" >
                <div className="input-elements">
                    <label htmlFor="username">
                        Username :
                        <input type="text" id="username" placeholder="e.g John" onChange={({ target }) => setEmailAddress(target.value)}></input>
                    </label>
                </div>
                <br />
                <div className="input-elements">

                    <label htmlFor="password">
                        Password :
                        <input id="password" type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}></input>
                    </label>
                </div>
                
                <div className="input-elements">
                    <label htmlFor="username">
                        confirm Password :
                        <input type="text" id="username" placeholder="e.g John" onChange={({ target }) => setConfirmPassword(target.value)}></input>
                    </label>
                </div>
                <div className="input-elements">
                    <button className="submit-btn" onClick={()=>handleSignin}> Sign In</button>
                </div>
               
                
            </form>

        </>
    )

}

