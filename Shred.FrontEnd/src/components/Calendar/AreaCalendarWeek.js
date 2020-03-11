import React from "react";
import Band from "./Band";
import moment from "moment";
import styles from "./AreaCalendarWeek.module.sass";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as action from '../../redux/action/ActionCreators';

function AreaCalendarWeek({
  currentMonth,
  activeMonth,
  currentDate,
  isActiveDay,
  events,
  handleChangeActiveDay
}) {
  

  const renderCalendar = () => {
    const calendar = [];
    for (let i = 1; i < (activeMonth ? 7 : 2); i++) {
      calendar.push(renderWeek(moment(currentMonth).format("YYYY"), i));
    }
    return calendar;
  };

  const renderWeek = (year, week) => {
    const weekDays = [1, 2, 3, 4, 5, 6, 7];
    const weekDates = weekDays.map(weekDay => weekDay);
    return (
      <div key={week} className={styles.weekRow}>
        {weekDates.map(item => {
          const startMonthDay = moment(currentMonth);
          const monthFirstDay = moment(startMonthDay).startOf(
            activeMonth ? "month" : "week"
          );
          const weekFirstday = moment(monthFirstDay)
            .add(week - 1, "week")
            .startOf("week")
            .isoWeekday(6);
          const date = weekFirstday.add(item, "day");

          return (
            <div
              key={date.format("D")}
              className={
                date.format("D MMM YY") === isActiveDay.format("D MMM YY") &&
                date.format("MMM YYYY") === startMonthDay.format("MMM YYYY")
                  ? styles.dayCellActive
                  : styles.dayCell
              }
              onClick={() => handleChangeActiveDay(date)}
            >
              <p
                className={
                  date.format("D MMM YY") === currentDate.format("D MMM YY")
                    ? styles.activeDate
                    : ""
                }
              >
                {activeMonth
                  ? date.format("MMMM") === startMonthDay.format("MMMM") &&
                    date.format("D")
                  : date.format("D")}
              </p>
              <Band
                events={events}
                data={date}
                currentStateMonth={currentMonth}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return <div className={styles.container}>{renderCalendar()}</div>;
}
AreaCalendarWeek.defaultProps = {
  renderWeekMonth: () => {},
  currentMonth: moment(),
  currentDate: moment(),
  changeActiveDay: () => {},
  isActiveDay: moment(),
  events: []
};

AreaCalendarWeek.propTypes = {
  renderWeekMonth: PropTypes.func.isRequired,
  changeActiveDay: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  activeMonth: store.reducer.activeMonth,
  currentMonth: store.reducer.currentMonth,
  currentDate: store.reducer.currentDate,
  isActiveDay: store.reducer.isActiveDay
});

const mapDispatchToProps = dispatch => ({
  handleChangeActiveDay: (day) => dispatch(action.changeActivDayAction(day))
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaCalendarWeek);
