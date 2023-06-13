import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../components/Form.css"
import axios from 'axios';

export default function SignIn() {


    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const userLogin = {
        emailAddress, password
    }
    const handleSignin = async (e) => {
        e.preventDefault();
        await axios.post(`/login`, userLogin);
        console.log(userLogin)
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
                    <button className="submit-btn" onClick={()=>handleSignin}> Sign In</button>
                </div>
                <div className="input-elements">
                    <p className="form-text">new to Heita Todolist? singup <Link to="/signup">now</Link> </p>

                </div>
            </form>

        </>
    )

}

