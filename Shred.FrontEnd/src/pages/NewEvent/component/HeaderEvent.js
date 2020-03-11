import React from 'react';
import styles from './HeaderEvent.module.sass';
import close from '../../../assets/img/close.png';
import check from '../../../assets/img/check.png';
import {Link} from "react-router-dom"

function HeaderEvent() {
    return (
        <div className={styles.container}>
           <Link to ="/calendar"> <img src={close} alt='close'/></Link>
            <h1>New event</h1>
            <img src={check} alt='check'/>

        </div>
    )
}

export default HeaderEvent;