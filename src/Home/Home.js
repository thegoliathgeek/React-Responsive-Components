import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
class Home extends Component{
    render() {
        return(

            <div className='link'>
            <Link className='link1' to='/collapseBar'>Collapse Bar</Link>
            <Link className='link2' to='/toggleBar'>Toggle Bar</Link>
                <Link className='link3' to='/login'>Login</Link>
                <Link className='link4' to='/dropdown'>Dropdown</Link>
        </div>
        );
    }
}
export default Home;
