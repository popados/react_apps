import React from 'react'
import ReactDOM from 'react-dom'
import '../style.css';

class Header extends React.Component {
  render () {
    return (
      //add all the html and javascript for the header here
      <div>
        <header className="header"> This a todo list header </header>
        <nav className ="cd-primary-nav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Todo list</a></li>
            <li><a href="">Champion Cards</a></li>
            <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
            </div>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
