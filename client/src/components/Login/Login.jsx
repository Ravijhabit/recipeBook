import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import css from './login.module.css';
const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [_, setCookies ]= useCookies(['access_token']);
    const navigate = useNavigate();
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('/auth/login',{username, password});
            setCookies("access_token", response.data.token);
            window.localStorage.setItem('userID', (await response).data.userId);
            navigate('/');
        }catch(err){
            alert(err.response.data.message);
            setUsername('');
            setPassword('');
        }
    }
    return(
        <div className={css.container}>
            <h2>Log In</h2>
            <p>Don't have account?<Link to='/register'>Sign Up</Link></p>
            <form onSubmit={handleSubmit} className={css.formContainer}>
                <label className={css.labelContainer}>
                    Username
                    <input type="text"
                    value={username} placeholder="Enter Username" onChange={(event)=>setUsername(event.target.value)}/>
                </label>
                <label className={css.labelContainer}>
                    Password
                    <input type="password" value={password} placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}/>
                    {/* hide/unhide password */}
                </label>
                {/* handle forgot password */}
                <button >Sign In</button>
                {/* future Oauth */}
            </form>
        </div>
    );
}

export default Login;