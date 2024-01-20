import React,{ Fragment } from "react";
import styles from "./Parentlogin.module.css";
import treadmill from '../../assets/treadmill.png';

const Parentlogin = () => {
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
                    <form className={styles.formm}>
                        <label for="email">Email Adress</label>
                        <input type="text" id="email" name="email" placeholder="Your Email.." />
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your Password.." />
                        <button type="submit" value="Submit">Login</button>
                    </form>
                </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Parentlogin;