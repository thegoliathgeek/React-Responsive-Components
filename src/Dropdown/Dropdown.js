import React,{Component} from 'react';
import './Dropdown.css';

class Dropdown  extends  Component{
    toggleDropdown = ()=>{
      let x =document.getElementById('dropDiv');
      // x.style.height = '270px';
    };
render() {
    return(<div>
        <div>
            <button className='dropdownEntry' onMouseOver={this.toggleDropdown}>Dropdown</button>
            <div className='dropdown' id='dropDiv'>
                <a className='dropdownElement' href='#'>One</a>
                <a className='dropdownElement' href='#'>Two</a>
                <a className='dropdownElement' href='#'>Three</a>
                <a className='dropdownElement' href='#'>Four</a>
            </div>
        </div>
    </div>);
}
}

export default Dropdown;
