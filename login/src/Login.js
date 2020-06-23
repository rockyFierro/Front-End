import React,{useState, useEffect} from 'react';



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form>
            <label>
                <input
                    type="text"
                    name="username"
                    value={username}/>
            </label>
            
            <label>
                <input
                    type="text"
                    name="password"
                    value={password}/>
            </label>            
        </form>
    )

}

export default Login;
// Login.js....
//          import react
//          , {useState, useEffect 
//          }.....state will be username, password (you can do this as two separate fields or a single field
         
//             )......the axios call....in the JSX, you will map over username and password somewhere