import React,{Component} from 'react'
import styles from '../src/styles.jsx'
class CommentArea extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style = {{width:"70%",margin:"auto"}}>
      {
        this.props.commentList.map((item,index)=>{
        return (
          <div 
          key = {new Date().getTime()+index} 
          style = {{fontSize:"14px",margin:"10px 0px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",display:this.props.commentList[index].display}}>
          <p style={{backgroundColor:"lightgray"}}>{this.props.timeFormat(item.markTime)}</p>
          <p style={{fontSize:"16px",color:"blue"}}>{item.defaultPerson}</p>
          
          <p style={{backgroundColor:"#eee"}}>{item.commentText}</p>
          
          <div style={{width:"90%",backgroundColor:"lightgray",margin:"auto",display:this.props.commentList[index].offOn}}>
          {
            this.props.commentList[index].anotherPersonComment.map((item,index)=>{
              return <div 
                key = {new Date().getTime()+index} 
                style = {styles.anotherPersonComment}>
                
                <p style={{backgroundColor:"lightgray"}}>{this.props.timeFormat(item.markTime)}</p>
                <p style={{fontSize:"16px",color:"blue"}}>{item.defaultPerson}</p>
                
                <p style={{backgroundColor:"#eee"}}>{item.commentText}</p>
                </div>
            })
          }
          </div>

          <div>
          <img 
            src = "../src/img/thumb.png" 
            onClick = {()=>{this.props.addThumb(index)}} 
            style = {styles.addThumb}
          />
          <img 
            src = "../src/img/love.png" 
            onClick = {()=>{this.props.addLove(index)}} 
            style = {styles.addThumb}
          />
          <img 
            src = "../src/img/smile.png" 
            onClick = {()=>{this.props.addSmile(index)}}
            style = {styles.addThumb}
          />
          <img 
            src = "../src/img/angry.png" 
            onClick = {()=>{this.props.addAngry(index)}} 
            style = {styles.addThumb}
          />
          <img 
            src = "../src/img/sad.png" 
            onClick = {()=>{this.props.addSad(index)} }
            style = {styles.addThumb}
          />
           <img 
            src = "../src/img/comment.png" 
            onClick = {()=>{this.props.showAllComment(index)}} 
            style = {styles.commImg}
          />
          
          <button 
            style={styles.showNet}
            onClick={this.props.showNet}
          >
          {this.props.netCommentText===''? 'Please Enter Your Comment':this.props.netCommentText.slice(0,32)+"..."}
          </button>
        
          <img src="../src/img/send.png"
          onClick = {()=>{this.props.sendNetComment(index)}} 
          style = {styles.send}               
          />

        <button onClick={()=>{this.props.hidingComm(index)}} 
          style={styles.hidingComm}>
          Hiding Comment
          </button>
       
          <div style={styles.showVoteDiv}>
            <label 
              style={styles.label}>
              <img style={styles.commVoteNum} 
              src="../src/img/thumb.png"
              /> {item.voteThumb}
            </label>
            <label 
              style={styles.label}>
              <img style={styles.commVoteNum} 
              src="../src/img/love.png"
              /> 
              {item.voteLove}
            </label>
            <label 
              style={styles.label}>
              <img style={styles.commVoteNum} 
              src="../src/img/smile.png"
              /> {item.voteSmile}
            </label>
            <label 
              style={styles.label}>
              <img style={styles.commVoteNum} 
              src="../src/img/angry.png"
              /> {item.voteAngry}
            </label>
            <label 
              style={styles.label}>
              <img style={styles.commVoteNum} 
              src="../src/img/sad.png"
              /> {item.voteSad}
            </label>
            <img 
            src = "../src/img/delete.png" 
            onClick = {()=>{this.props.delComment(index)}} 
            style = {styles.delComment}
          />
          </div>
      </div>
         
    </div>
          )
      })}
    </div>
    )
  }
}

export default CommentArea;
