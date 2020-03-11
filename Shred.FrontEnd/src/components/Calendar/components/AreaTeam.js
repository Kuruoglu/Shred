import React from "react";
import styles from "./AreaTeam.module.sass";
import sope from "../../../assets/img/sope.png";
import plus from "../../../assets/img/plus.png";
import {Link} from 'react-router-dom';


function AreaTeam() {
  return (
    <div className={styles.container}>
      <div className={styles.sope}>
        <img className={styles.image} src={sope} alt="sope" />
        <span className={styles.text}>Sope Creek Composite</span>
      </div>
      <Link to='/addEvent'><img className={styles.icon} src={plus} alt="plus" /></Link>
    </div>
  );
}

export default AreaTeam;
