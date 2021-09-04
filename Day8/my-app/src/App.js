import './css/App.css';
import Home from './components/Home.js';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div>
          <Home/>
        </div>
    );
  }
}