import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import CollapseBar from "./CollapseBar/Collapse";
import ToggleBar from "./ToggleBar/ToggleBar";
import Login from "./Login/Login";
import Dropdown from "./Dropdown/Dropdown";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/collapseBar' component={CollapseBar}/>
                    <Route path='/toggleBar' component={ToggleBar}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/dropdown' component={Dropdown}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
