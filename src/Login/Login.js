import React,{Component} from 'react';
import './Login.css';
class Login extends Component{
    state = {
      myBool : true
    };
    loginToggle =()=>{
        this.setState({myBool: !this.state.myBool});
      let x = document.getElementById('loginId');
      if(this.state.myBool) {
          x.style.height = '250px';
      } else{
          x.style.height = '2px';
      }
    };
    render() {
        const changeCursor = {
          'cursor': 'pointer'
        };
        return(
            <div>
                <div className='loginDiv'>
                <p onClick={this.loginToggle}>Login</p>
                    <div id='loginId' className='loginBlock'>
                            <input className='insideBlock' type='text'  placeholder='email'/>
                        <input className='insideBlock' type='password' placeholder='password'/>
                        <button className='insideBlock' style={changeCursor}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
