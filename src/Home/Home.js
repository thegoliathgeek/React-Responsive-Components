import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
class Home extends Component{
    render() {
        return(

            <div>
            <Link className='link1' to='/collapseBar'>Collapse Bar</Link>
            <Link className='link2' to='/toggleBar'>Toggle Bar</Link>
                <Link className='link3' to='/login'>Login</Link>
        </div>
        );
    }
}
export default Home;
