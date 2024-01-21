import { Fragment } from "react";
import styles from './Sidebar.module.css';

const Sidebar = ({ props, onClick }) => {
    return ( 
        <Fragment>
            <div className={styles.main}>
                <div className={styles.uppercontent}>
                <div className={styles.logo}>
                <h2>BrainSync</h2>
            </div>
            <div className={styles.items}>
               {props.map((item,index)=>{
                     return(
                          <div key={index} className={styles.item} onClick={() => onClick(item.title)}>
                            <img src={item.icon}/>
                            <a>{item.title}</a>
                          </div>
                     )  
               }
                )}
                <div className={styles.item} style={{marginTop:"20px"}}>
                            <a href='/'>Logout</a>
                </div>
            </div>
            <div className={styles.line}>
            </div>  
                </div>
           
            <div className={styles.lowercontent}>
            <div className={styles.logout}>
                <h4>V.1.0.0</h4>
            </div>
            </div>
           
            </div>
        </Fragment>
     );
}
 
export default Sidebar;