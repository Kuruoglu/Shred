import React from 'react';
import styles from './NewEvent.module.sass';
// import PropTypes from 'prop-types';
import HeaderEvent from './component/HeaderEvent';
import EventItem from './component/EventItem';

function NewEvent() {
    return (
        <div className={styles.container}>
            <HeaderEvent />
            <EventItem name='LOCATION'  type='text' img/>
            <EventItem name='EVENT NAME' type='text'/>
            <EventItem name='STARTS' type='date' typeTime/>
            <EventItem name='DURATION' type='text'/>
            <EventItem name='ADDITIONAL DETAILS' type='text'/>
        </div>
    );
}

NewEvent.defaultProps = {

};

NewEvent.propTypes = {

};

export default NewEvent;