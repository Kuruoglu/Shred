import React, {useState} from 'react';
import styles from  './App.module.sass';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';


import StartPage from './pages/StartPage/StartPage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import LoginPage from './pages/LoginPage/LoginPage';
import Calendar from '../src/components/Calendar/Calendar';
import ConfigureStore from './redux/config';
import NewEvent from '../src/pages/NewEvent/NewEvent';



function App() {
const [store] = useState(ConfigureStore)

  return (
      <Provider store={store}>

        <Router>

          <div className={styles.App}>
            <Switch>
              <Route exact path='/' component={StartPage}/>
              <Route path='/login' component={LoginPage}/>
              <Route path='/signup' component={CreateAccount}/>
              <Route path='/calendar' component={Calendar}/>
              <Route path='/addEvent' component={NewEvent}/>
            </Switch>
          </div>

        </Router>
      </Provider>
  );
}

export default App;
