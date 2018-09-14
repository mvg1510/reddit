import React, { Component } from 'react';
import List from './components/list/List';
import { items } from './Static-Data';  
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Reddit">
        <List items={items} />
      </div>
    );
  }
}

export default App;
