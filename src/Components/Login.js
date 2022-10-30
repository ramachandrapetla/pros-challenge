import { useState } from "react";

const Login = () => {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState(false);

    const handleLogin = ()=> {
        setError(userName == '' ||  password == '' ? setError(true): false);
        
    }

    const handleUserName = (event) => {
        setUserName(event.value);
    }

    const handlePassword = (event) => {
        setPassword(event.value);
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            {error ? <p>Enter enter valid information</p> : <></>}
            <form>
                <input id="username" type="text" placeholder="username" onChange={handleUserName}/>
                <input id="password" type="password" placeholder="password" onChange={handlePassword}/>
                <button onClick={handleLogin}>Login</button>
            </form> 
        </div>
    )
}

export default Login;