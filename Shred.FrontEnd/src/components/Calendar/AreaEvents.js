import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import styles from "./AreaEvents.module.sass";
import {connect} from 'react-redux';

function AreaEvents({ events, isActiveDay, currentStateMonth }) {
  const dayOfWeek = isActiveDay.format("dddd");
  const month = moment(currentStateMonth).format("MMMM");
  let dataEvent = isActiveDay.format("D.MM.YYYY");
  const event = events.get(`${dataEvent}`) || [];

  const renderEvent = () => {
    return event.map(item => {
      return (
        <div key={item.id} className={styles.eventsListItemContainer}>
          <div className={styles.eventsListItem}>
            <span className={styles.category}> {item.category}</span>
            <span className={styles.time}>{item.time}</span>
          </div>
          <span className={styles.nameEvent}> {item.nameEvents}</span>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.eventsDate}>
        {isActiveDay > 0
          ? `${dayOfWeek}, ${isActiveDay.format("D")} ${month}`
          : currentStateMonth.format(`dddd, D MMMM`)}
      </p>
      <div className={styles.eventsList}>{renderEvent()}</div>
    </div>
  );
}

AreaEvents.defaultProps = {
  currentStateMonth: moment(),
  isActiveDay: moment(),
  events: []
};

AreaEvents.propTypes = {
  events: PropTypes.object.isRequired
};

const mapStateToProps = (store) => ({
  currentStateMonth: store.reducer.currentStateMonth,
  isActiveDay: store.reducer.isActiveDay,
})


export default connect(mapStateToProps)(AreaEvents);
