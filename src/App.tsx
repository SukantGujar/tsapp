import * as React from 'react';
import { view } from 'react-easy-state';
import { Timer } from './components/timer';
import { AppStore } from './store';
import './App.css';

class App extends React.Component {
  render() {
    return (
     <div>
      <Timer 
        interval={1000} 
        task={(stop) => {AppStore.time = (new Date()).toLocaleTimeString(); }}
      />
      <div>{AppStore.time}</div>
     </div>
    );
  }
}

export default view(App);
