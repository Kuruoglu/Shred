import React from "react";
import styles from "./AreaWeekMonth.module.sass";
import { connect } from "react-redux";
import * as action from "../../../redux/action/ActionCreators";

function AreaWeekMonth({
  changeActiveMonth,
  isOpen,
  activeMonth,
  changeIsOpen
}) {
  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <button
            onClick={activeMonth ? changeActiveMonth : changeIsOpen}
            className={styles.button}
          >
            This week
          </button>
          <button
            onClick={activeMonth ? changeIsOpen : changeActiveMonth}
            className={styles.button}
          >
            This month
          </button>
        </div>
      )}
    </>
  );
}

const mapStateToProps = store => ({
  isOpen: store.reducer.isOpen,
  activeMonth: store.reducer.activeMonth
});

const mapDispatchToProps = dispatch => ({
  changeActiveMonth: () => dispatch(action.activeMonthWeekSwitchAction()),
  changeIsOpen: () => dispatch(action.openTabWeekMonthAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaWeekMonth);
