import React from 'react';
import{Link}from"react-router-dom";
import styles from './navigation.module.css';

const Navigation = () => {
    const brandStyle={
        color:'#fff',
        textDecoration:'none',
        fontweight:'bold',
        fontSize:'22px',
        display:'flex',
        alignItems:'center',
    };
    const logoText={
        marginLeft:'10px'
    }
    const logoImageStyle={
        width:'30px',
        height:'30px',
    }
    return (
    <nav className={`${styles.navbar}container`}style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px 0'}}>
<Link style={brandStyle} to="/">

<img src="/images/handshake.png"alt="logo" style={logoImageStyle}/>
<span style={logoText}>Akash Yadav</span>

</Link>
</nav>  );
}
 
export default Navigation;

