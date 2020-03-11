import ACTION from "../action/actionTypes";
import moment from "moment";

const initialState = {
  isOpen: false,
  activeMonth: true,
  currentMonth: moment(),
  isActiveDay: moment(),
  currentDate: moment()
};

export default function(state = initialState, action) {
  console.log(state.isActiveDay.format("D"))
  switch (action.type) {
    case ACTION.OPEN_TAB_WEEK_MONTH:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case ACTION.ACTIVE_MONTH_SWITCH:
      return {
        ...state,
        activeMonth: !state.activeMonth,
        isOpen: !state.isOpen
      };
    case ACTION.CHANGE_NEXT_MONTH:
      return {
        ...state,
        currentMonth: action.month,
       
        
      };
    case ACTION.CHANGE_PREW_MONTH:
        return {
            ...state,
            currentMonth: action.month,
           
        }
    case ACTION.CHANGE_ACTIVE_DAY:
        return {
            ...state,
            isActiveDay: action.day
        }
    default:
      return state;
  }
}
