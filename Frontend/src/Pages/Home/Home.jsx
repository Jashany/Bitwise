import { Fragment } from "react";
import styles from './Home.module.css';
import logo from "../../assets/logo.png";
import homeimg from "../../assets/homeImage.png";
const Home = () => {
    return ( 
        <Fragment>
             <nav className={styles.navbar}>
                <div>
                    <img src={logo} alt="logo"/>
                    <h2>BrainSync</h2>
                </div>
                <div>
                    <h4>Home</h4>
                    <h4>Find a doctor</h4>
                    <h4>About Us</h4>
                </div>
             </nav>
             <main className={styles.main}>
                <div className={styles.content}>
                <p>
                Unlock your mind's potential Where learning meets fun!
                </p>
                <button>Doctors</button>
                <button>Parents</button>
                </div>
               <div className={styles.homeimg}>
                <img src={homeimg} alt=""  />
               </div>


             </main>

        </Fragment>
     );
}
 
export default Home;