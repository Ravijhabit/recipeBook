import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './register.module.css';
import axios from 'axios';
const Register = () =>{
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const {data} = await axios.post('/auth/register',{password, username});
            alert(`${data.message}`);
            setUsername('');
            setPassword('');
            navigate('/login');
        }catch(err){
            alert(err.response.data.message);
            setUsername('');
            setPassword('');
        }
    }
    return(
        <div className={css.container}>
            <h2>Register</h2>
            <p>Already have an account?<Link to='/login'>Sign In</Link></p>
            <form onSubmit={handleSubmit} className={css.formContainer}>
                <label className={css.labelContainer}>
                    Username
                    <input type="text"
                    value={username} placeholder="Enter Username" onChange={(event)=>setUsername(event.target.value)}/>
                </label>
                <label className={css.labelContainer}>
                    Password
                    <input type="password" value={password} placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}/>
                </label>
                <button >Sign Up</button>
            </form>
        </div>
    );
}

export default Register;