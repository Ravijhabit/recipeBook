import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import css from './navbar.module.css';

export const NavBar = () =>{
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();    
    const logout= ()=>{
        setCookies("access_token","");
        window.localStorage.removeItem("userID");
        navigate('/login');
    }
    return(
        <div className={css.navbar}>
            <Link className={css.navPills} to='/'>Home</Link>
            {!cookies.access_token ? 
                (   <>
                        <Link className={css.navPills} to='/Login'>Login</Link>
                        <Link className={css.navPills} to='/register'>Register</Link>
                    </>
                ):
                <>
                    <Link className={css.navPills} to='/create-recipe'>Create Recipe</Link>
                    <Link className={css.navPills} to='/saved-recipes'>Saved Recipe</Link> 
                    <button onClick={logout} className={css.logout}>Logout</button>
                </>
            }
        </div>
    )
}