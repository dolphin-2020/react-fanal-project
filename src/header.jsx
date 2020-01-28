import React from 'react'
import styles from '../src/styles.jsx'
let Header=()=>{
  return(
    <div style={styles.headDiv}>
    <h1 style={styles.headText}>Dolphin's Assignment</h1>
    <img src="../src/dolphin-icon.jpg" 
      alt="" 
      style={{width:"10%",paddingTop:"60px"}}
    >
    </img>
    </div>
  )
}

export default Header;