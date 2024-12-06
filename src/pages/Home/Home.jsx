import React from 'react';
import styles from'./Home.module.css';
import{Link} from "react-router-dom";

const Home = () => {
    return (
    <div className={styles.cardWrapper}>
         <div className={styles.card}>
         <div className={styles.headingwrapper}>
         <img src="/images/handshake.png"alt="logo"/>
         <h1 className={styles.heading}>welcome to webrtc</h1>
         </div>
         <p  className={styles.text}>We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>
        < div>
            <button>
                <span>
                    Get Your Username
                </span>
                <img src="/images/arrow_forward.png"alt="arrow"/>
            </button>
        </div>
        <div>
            <span>Have an invite text?</span>
            <Link to="/login/">Sign in</Link>
        </div>
    </div> 
    </div>
     );
}
 
export default Home;