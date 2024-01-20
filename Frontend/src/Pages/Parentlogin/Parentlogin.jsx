import { Fragment ,useState} from "react";
import styles from "./Parentlogin.module.css";
import treadmill from '../../assets/treadmill.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

   
const Parentlogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login/parent', { username, password });
            console.log(response);
            if (response.status === 200) {
                console.log('You are authenticated!');
                navigate('/parentdash');
            }

        } catch (error) {
            setError('Username or password incorrect!');
        }
    };
    return ( 
        <Fragment>
            <div className={styles.container}>  
                <div className={styles.image}>
                    <img src={treadmill} alt="treadmill" />
                </div>
                <div className={styles.loginform}>
                <div className={styles.innerform}>
                    <h3>Account Login</h3>
                    <p>If you are already a member you can login with your email address and password.</p>
                    <form className={styles.formm} onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Your Email.." />
                        <label>Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Your Password.." />
                        {error && <p>{error}</p>}
                        <button type="submit" value="Submit">Login</button>
                    </form>
                </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Parentlogin;