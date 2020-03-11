import React from 'react';
import AreaEvents from './AreaEvents';
import styles from './Calendar.module.sass';
import AreaTeam from './components/AreaTeam';
import AreaCalendarWeek from './AreaCalendarWeek';
import AreaOfMonth from './components/AreaOfMonth';
import AreaWeekMonth from './components/AreaWeekMonth';

class Calendar extends React.Component { 
     
    render() {
      const events = new Map();
      events.set('23.01.2020', [
        {id: 1, category: 'Rest', time: '10:30', nameEvents: 'Birthday', eventsGo: true},
        {id: 2, category: 'Work', time: '11:00', nameEvents: 'ToDoSomthing', eventsGo: false},
        {id: 3, category: 'Rest', time: '13:00', nameEvents: 'Reed book', eventsGo: false},
        {id: 4, category: 'Rest', time: '14:00', nameEvents: 'Dinner', eventsGo: false},
        {id: 5, category: 'Work', time: '16:00', nameEvents: 'Meet Client', eventsGo: true},
        {id: 6, category: 'Work', time: '17:00', nameEvents: 'Go to office', eventsGo: false},
        {id: 7, category: 'Rest', time: '18:00', nameEvents: 'Birthday', eventsGo: false},
      ])
      events.set('3.01.2020', [
        {id: 1, category: 'Rest', time: '10:30', nameEvents: 'Birthday', eventsGo: false},
        {id: 2, category: 'Work', time: '11:00', nameEvents: 'ToDoSomthing', eventsGo: false},
        {id: 3, category: 'Rest', time: '13:00', nameEvents: 'Reed book', eventsGo: true},
        {id: 4, category: 'Rest', time: '14:00', nameEvents: 'Dinner', eventsGo: false},
      ])
      events.set('5.01.2020', [
        {id: 1, category: 'Rest', time: '10:30', nameEvents: 'Birthday', eventsGo: false},
        {id: 2, category: 'Work', time: '11:00', nameEvents: 'ToDoSomthing', eventsGo: true},
      ])
      events.set('9.02.2020', [
        {id: 1, category: 'Rest', time: '10:30', nameEvents: 'Birthday', eventsGo: false},
      ])  
        return(
          <div className={styles.container}> 
            <AreaTeam />
            <AreaOfMonth  />
            <AreaWeekMonth />        
            <AreaCalendarWeek events={events}  />
            <AreaEvents  events={events} />
          </div>

        );
    };
}


export default Calendar;