import React from 'react'
import ReactDOM from 'react-dom'

class Footer extends React.Component {
//these are where my objects will go
  render() {
    return (
      <div className = "footer">
        <footer>
          <p> This app is written by Nik Khandwala </p>
        </footer>
      </div>)
    }
}

export default Footer

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
