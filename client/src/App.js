import React, { Component } from 'react';

import Nav from "./component/Nav"
import Main from "./component/Main"
import Plan from "./component/Plan"
import './App.css';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"



class App extends Component {
  constructor() {
    super()
    this.state = {
      tab: 'main'
    }
  }

  

  onPageChange = page => {
    this.setState({
      tab: page
    })
  } 

  render() {
    const {tab} = this.state
    return (
      <div className ='page'>
        <Nav onChange={this.onPageChange}/>
        {tab === 'main' && <Main onChange={this.onPageChange}/>}
        {tab === 'plan' && <Plan/>}
      </div>
    );
  }
}

export default App;
