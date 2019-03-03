import React, {Component} from 'react';
import './nav.css'
 

class Nav extends Component {

  render(){
    const {onChange} = this.props  
    return(
      <nav>
        <div id="logo" onClick={() => onChange('main')}></div>
        <ul>
          <li><a className="link" onClick={() => onChange('main')} href="#1">品牌理念</a></li>
          <li><a className="link" onClick={() => onChange('main')} href="#2">如何使用</a></li>
          <li><a className="link" onClick={() => onChange('main')} href="#3">關於我們</a></li>
        </ul>
        <div id="myAccount"> </div>
      </nav>
    )
  }
}

  
export default Nav
