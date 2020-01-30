import  React,{Component} from 'react'
import styles from '../src/styles.jsx'

class NetCommList extends Component{
  render(){
    return(
      <div 
        style={{display:this.props.netCommentDisplay,width:"400px",position:"fixed",top:"50%",left:"50%", transform: "translate(-50%, -50%)",zIndex:"10"}}
          >
          <textarea 
            placeholder="Enter your comment"
            style={styles.textAreaNet}
            value={this.props.insideComment}  
            cols = "138" rows="19" 
            onChange = {this.props.insideCommentChange}>
          </textarea>
  
          <button 
            style={styles.hindNetComment}
            onClick={this.props.hindNetComment}
          >Cancel
          </button>

          <button 
            style={styles.netBtn}
            onClick={this.props.netBtn}
          >
          OK
        </button>
      </div>
    )
  }
  
}
export default NetCommList;