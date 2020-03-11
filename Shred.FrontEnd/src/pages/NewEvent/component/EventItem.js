import React from 'react';
import styles from './EventItem.module.sass';
import PropTypes from 'prop-types';



function EventItem({name, type, typeTime, img}) {
    return (
        <div className={styles.container}>
          <label className={typeTime ? styles.itemTime : styles.item}>
            <p className={styles.name}>{name}</p>
            <input className={typeTime ? styles.inputTime : styles.input} type={type} />
              
            

          </label>
        </div>
    );
}

EventItem.defaultProps = {

};

EventItem.propTypes = {

};

export default EventItem;