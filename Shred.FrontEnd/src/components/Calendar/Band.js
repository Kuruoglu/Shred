import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import styles from "./Band.module.sass";

function Band({ events, data, currentStateMonth }) {
  let dataEvent = data.format("D.MM.YYYY");
  const event = events.get(dataEvent) || [];

  const renderBand = () => {
    return event
      .filter((item, index) => {
        return index <= 2;
      })
      .map(item => {
        return (
          data.format("MMMM") === currentStateMonth.format("MMMM") && (
            <div
              key={item.id}
              className={item.eventsGo ? styles.band : styles.bandGo}
            ></div>
          )
        );
      });
  };

  return (
    <div className={styles.container}>
      <>{renderBand()}</>
    </div>
  );
}

Band.defaultProps = {
  data: moment().format("D.MM.YYYY"),
  events: []
};

Band.propTypes = {
  events: PropTypes.object.isRequired
};

export default Band;
