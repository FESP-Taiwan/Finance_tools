import React, {Component} from 'react';
import './nav.css'
 

class Login extends Component {

  render(){
    const {onChange} = this.props  
    return(
        <div>
            <h1>Login</h1>
            <form method="POST" action="/login/dologin">
                <label>Username:</label>
                <input type = "text" name ="username" required />
                <br/>
                <label>Password:</label>
                <input type = "text" name ="password" required />
                <br/>
                <input type = "submit" name ="submit"  value="登入" />
            </form>
            <form method="POST" action="/registration">
                <input type = "submit" name ="submit"  value="去註冊" />
            </form>
        </div>
    )
  }
}

  
export default Login



