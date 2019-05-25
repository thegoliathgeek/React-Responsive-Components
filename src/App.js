import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import CollapseBar from "./CollapseBar/Collapse";
import ToggleBar from "./ToggleBar/ToggleBar";
import Login from "./Login/Login";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/collapseBar' component={CollapseBar}/>
                    <Route path='/toggleBar' component={ToggleBar}/>
                    <Route path='/login' component={Login}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
