import React from "react";
import moment from "moment";
import PropTypes  from 'prop-types';
import styles from "./AreaOfMonth.module.sass";
import arrowUp from "../../../assets/img/chevron-up.png";
import arrowDown from "../../../assets/img/chevron-down.png";
import {connect} from 'react-redux'; 
import * as action from '../../../redux/action/ActionCreators'


function AreaOfMonth({changeIsOpen, changePrevMonth, changeNextMonth, isOpen, activeMonth, currentStateMonth, isActiveDay}) {
  const firstDayWeek = moment(currentStateMonth).startOf('week').format("D");
  const lastDayWeek = moment(currentStateMonth).endOf('week').format("D");
  const textPrew = 'Prew';
  const textNext = 'Next';
  const prewMonth = moment(currentStateMonth).add(-1, "M").format("MMM");
  const curMonth =  currentStateMonth.format(activeMonth ? "MMMM" : `MMM ${firstDayWeek} - ${lastDayWeek} `);
  const nextMonth = moment(currentStateMonth).add(1, "M").format("MMM");
  const daysWeek = ["S", "M", "T", "W", "T", "F", "S"];

 const handlePrevMonth = () => {
      
      let month = moment(currentStateMonth);
      month.add(-1, activeMonth ? "M" : "w");
      changePrevMonth(month)
     
    
    }
const hangeNextMonth = () => {
     
      let month = moment(currentStateMonth);
      month.add(1, activeMonth ? "M" : "w");

      changeNextMonth(month)
      
    } 
  
  const renderWeekDays = (item, key) => {
    return <div key={key}>{item}</div>;
  };
  return (

    <div className={styles.container}>

      <div className={styles.containerIn}>
        <p className={styles.textMonth} onClick={() => handlePrevMonth()}>
          {activeMonth ? prewMonth : textPrew}
        </p>
        <div className={styles.current}>
          <p onClick={changeIsOpen} className={styles.active}>
            {curMonth}
          </p>
          <img
            onClick={changeIsOpen}
            className={styles.arrow}
            src={isOpen ? arrowUp : arrowDown}
            alt="arrow"
          />
        </div>
          <p className={styles.textMonth} onClick={() => hangeNextMonth()}>
            {activeMonth ? nextMonth : textNext}
          </p>
      </div>
      <div>
        {!isOpen && (
          <div className={styles.daysWeek}>{daysWeek.map(renderWeekDays)}</div>
        )}
      </div>

    </div>
    
  );
  
}

AreaOfMonth.defaultProps = {
  renderWeekMonth: () => {},
  currentMonth: moment(),
  currentStateMonth: () => {},
  changePrevMonth: () => {},
  changeNextMonth: () => {},
  isOpen: false,
  activeMonth: true
};

AreaOfMonth.propTypes = {
  renderWeekMonth: PropTypes.func.isRequired,
  currentStateMonth: PropTypes.object.isRequired,
  changePrevMonth: PropTypes.func.isRequired,
  changeNextMonth: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  activeMonth: PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({
 
  

    isOpen: store.reducer.isOpen,
    activeMonth: store.reducer.activeMonth,
    currentStateMonth: store.reducer.currentMonth,
    isActiveDay: store.reducer.isActiveDay,

});
const mapDispatchToProps = (dispatch) => ({
    changeIsOpen: () => dispatch(action.openTabWeekMonthAction()),
    changeNextMonth: (month) => dispatch(action.changeNextMonthAction(month)),
    changePrevMonth: (month) => dispatch(action.changePrewMonthAction(month)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AreaOfMonth);
