import React from 'react';
import styles from './StartPage.module.sass';
// import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';




function StartPage() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <Link to='/login' className={styles.loginButton}>LOGIN</Link>
            <Link to='/calendar'className={styles.memberPass}> <p >Not a member yet?</p> </Link>
            <Link to='/signup' className={styles.createAcc}><p >Create an Account</p></Link>
            
        </div>
    );
}

StartPage.defaultProps = {

};

StartPage.propTypes = {

};

export default StartPage;