import React from 'react';
import styles from'./Home.module.css';
import{Link,useNavigate} from "react-router-dom";
import Card from '../../components/shared/card/card';
import Button from '../../components/Button/button';
const Home = () => {
    const signInLinkStyle={
        color:'#0077ff',
        fontweight:'bold',
        textDecoration:'none',
        marginLeft:'10px'
        
    };
    

    const navigate=useNavigate();
    function startRegister(){
        navigate('/register');
        console.log('button clicked.....');
    }


    return (
    <div className={styles.cardWrapper}>
        <Card title='Welcome to Webrtc!!!'icon='logo'>
        <p  className={styles.text}>We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>
        < div>
            <Button onClick={startRegister} text='Get your username'/>
        </div>
        <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
            <Link style={signInLinkStyle}to="/login/">Sign in</Link>
        </div>
        </Card>
        
    </div>
     );
}
 
export default Home;