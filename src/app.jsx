import './styles.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Chat from './scenes/Chat/index';
import Sign from './scenes/Sign/index';

class App extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/login' component={Sign}/>
        <Route exact path='/' component={Chat}/>
      </Switch>
    );
  }
}

export default App;
