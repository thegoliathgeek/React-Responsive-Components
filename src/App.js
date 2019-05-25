import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import CollapseBar from "./CollapseBar/Collapse";
import ToggleBar from "./ToggleBar/ToggleBar";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/collapseBar' component={CollapseBar}/>
                    <Route path='/toggleBar' component={ToggleBar}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
