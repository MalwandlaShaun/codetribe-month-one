 const LogIn = () =>{

    return(
        <>
        <div className="container">
            <div className="form">
                <label htmlFor="username">
                    Username : <input id="username" value="username" type="text"></input>
                </label>
                <label htmlFor="password">
                    Password : <input id="password" value="password" type="text"></input>
                </label>
            </div>
        </div>
        </>
    )
}

export default LogIn