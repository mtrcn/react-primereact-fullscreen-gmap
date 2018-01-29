import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GMap} from 'primereact/components/gmap/GMap';

class App extends Component {

  resize = () => {
    let map = document.getElementsByClassName("map");
    if (map !== undefined){
      map[0].style.height = (window.innerHeight - 190) + "px"; 
    }
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    let options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GMap className="map" options={options} style={{width:'100%'}}/>
      </div>
    );
  }
}

export default App;
