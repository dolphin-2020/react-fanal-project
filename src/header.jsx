import React from 'react'
import styles from '../src/styles.jsx'
class Header extends React.Component{
  render(){
    return(
      <div style={styles.headDiv}>
      <h1 style={styles.headText}>Welcome {this.props.defaultName} </h1>
      </div>
    )
  }
}

export default Header;