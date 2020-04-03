import action from "./actionTypes";

export const openTabWeekMonthAction = () => ({
  type: action.OPEN_TAB_WEEK_MONTH
});

export const activeMonthWeekSwitchAction = () => ({
  type: action.ACTIVE_MONTH_SWITCH
});

export const changeNextMonthAction = (month, activeDay) => ({
  type: action.CHANGE_NEXT_MONTH,
  month,
  activeDay
  
});

export const changePrewMonthAction = (month) => ({
  type: action.CHANGE_PREW_MONTH,
  month,
});

export const changeActivDayAction = (day) => ({
  type: action.CHANGE_ACTIVE_DAY,
  day
});

export const loginAction = (data) => ({
  type: action.LOGIN,
  data
});
