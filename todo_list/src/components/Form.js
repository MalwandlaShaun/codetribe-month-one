import "Form.css";

export default Form = () => {


    return (
        <>
            <form className="form-container" >
                <div className="input-elements">
                    <label htmlFor="username">
                        Username :
                        <input type="text" id="username" placeholder="e.g John"></input>
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
                    <button disabled={isInvalid}  className="submit-btn"> Sign In</button>
                </div>
                <div className="input-elements">
                    <p className="form-text">new to Heita Todolist? singup <Link to="/sign-up">now</Link> </p>

                </div>
            </form>

        </>
    )

}