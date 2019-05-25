import React, {Component} from 'react';
import './ToggleBar.css';

class ToggleBar extends Component {
    state = {
        myBool: true
    };
    toggleFunction1 = () => {
        this.setState({myBool: !this.state.myBool});
        let x = document.getElementById('collapseId');
        if (this.state.myBool) {
            x.style.width = '250px';
        } else{
            x.style.width = '0px';
        }
    };

    toggleFunction2 = () => {
        let x = document.getElementById('collapseId');
        this.setState({myBool: !this.state.myBool});
        x.style.width = '0px';
    };

    render() {
        return (<div>

            <button className='toggleBut' onClick={this.toggleFunction1}>☰Toggle</button>
            <div id='collapseId' className='toggleBar'>
                <a href='javascript:void(0)' className='closeTag' onClick={this.toggleFunction2}>X</a>
                <a href='javascript:void(0)'>One</a>
                <a href='javascript:void(0)'>Two</a>
                <a href='javascript:void(0)'>Three</a>
            </div>
        </div>);
    }
}

export default ToggleBar;
