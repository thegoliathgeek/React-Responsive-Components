import React,{Component} from 'react';
import './CollapseBar.css';
class CollapseBar extends Component{
    myFunction = ()=>{
        let x = document.getElementById('myNav');
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };
    render() {
        return(
            <div>
                <div className="topnav" id="myNav">
                    <a className="active" href="#">One</a>
                    <a href="#">Two</a>
                    <a href="#">Three</a>
                    <a href="javascript:void(0)" className="icon" onClick={this.myFunction}>|||</a>
                </div>
            </div>

        );
    }
}

export default CollapseBar;
