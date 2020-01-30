import React,{Component,Fragment} from 'react'
import styles from '../src/styles.jsx'

class IconChoose extends Component{
  render(){
    return(
      
      <Fragment>
      <div onClick={this.props.chooseImg} style={{display:this.props.chooseHeader,width:"30%",position:"fixed",top:"50%",left:"50%", transform: "translate(-50%, -50%)",zIndex:"100",backgroundColor:"lightgray",padding:"10px"}}>
        <img src="../src/img/head01.jpg" style={styles.headImg}/>
        <img src="../src/img/head02.jpg" style={styles.headImg}/>
        <img src="../src/img/head03.jpg" style={styles.headImg}/>
        <img src="../src/img/head04.jpg" style={styles.headImg}/>
        <img src="../src/img/head05.jpg" style={styles.headImg}/>
        <img src="../src/img/head06.jpg" style={styles.headImg}/>
        <img src="../src/img/head07.jpg" style={styles.headImg}/>
        <img src="../src/img/head08.jpg" style={styles.headImg}/>
        <img src="../src/img/head09.jpg" style={styles.headImg}/>
        <img src="../src/img/head11.jpg" style={styles.headImg}/>
        <img src="../src/img/head10.jpg" style={styles.headImg}/>
        <img src="../src/img/head12.jpg" style={styles.headImg}/>
        <img src="../src/img/head13.jpg" style={styles.headImg}/>
        <img src="../src/img/head14.jpg" style={styles.headImg}/>
        <img src="../src/img/head15.jpg" style={styles.headImg}/>
        <img src="../src/img/head16.jpg" style={styles.headImg}/>
        <img src="../src/img/head17.jpg" style={styles.headImg}/>
        <img src="../src/img/head18.jpg" style={styles.headImg}/>
        <img src="../src/img/head19.jpg" style={styles.headImg}/>
        <img src="../src/img/head20.jpg" style={styles.headImg}/>
        <img src="../src/img/head21.gif" style={styles.headImg}/>
        <img src="../src/img/head22.jpg" style={styles.headImg}/>
        <img src="../src/img/head23.jpg" style={styles.headImg}/>
        <img src="../src/img/head24.jpg" style={styles.headImg}/>
        <img src="../src/img/head25.jpg" style={styles.headImg}/>
      </div>
     <div onClick={this.props.disappear} style={{display:this.props.darkBackground,width:"100%",height:"800px",backgroundColor:"#000",opacity:"0.7",position:"fixed",top:"50%",left:"50%", transform: "translate(-50%, -50%)"}}></div>
      
      <div style={styles.chooseImg}>
        <img src="../src/img/goodView.jpg" style={{width:"100%",height:"500px"}}/>
      </div> 

      <div style={styles.leftDecoration}>
        <img src="../src/img/fly.jpg" style={{width:"100%",filter: "grayscale(100%)"}}/>
        <img src="../src/img/leftBar.jpg" style={{width:"100%",filter: "grayscale(60%)"}}/>
        <img src="../src/img/walk.jpg" style={{width:"100%"}}/>
      </div>
      </Fragment>
    )
  }
}

export default IconChoose;