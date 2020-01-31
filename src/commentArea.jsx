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
          <label style={{fontSize:"16px",color:"blue"}}><img src={item.headImg} style={{width:"25px"}}/> {item.defaultPerson}</label>
          <label style={{paddingLeft:"15px"}}>{this.props.timeFormat(item.markTime)}</label>
          <p style={{backgroundColor:"#eee",padding:"5px",fontSize:"18px"}}>{item.commentText}</p>
          <div style={{width:"90%",backgroundColor:"#eee",margin:"auto",display:this.props.commentList[index].offOn}}>
          {
            this.props.commentList[index].anotherPersonComment.map((item,index)=>{
              return <div 
                key = {new Date().getTime()+index} 
                style = {styles.anotherPersonComment}>
                <label style={{fontSize:"16px",color:"blue"}}><img src={item.headImg} style={{width:"25px"}}/> {item.defaultPerson}</label>
                <label style={{paddingLeft:"10px"}}>{this.props.timeFormat(item.markTime)}</label>
                
                <p style={{backgroundColor:"#fff",fontSize:"18px"}}>{item.commentText}</p>
                <button style={{width:"60px",height:"25px",backgroundColor:"#06f",borderRadius:"8px",color:"white"}} type="submit">Reply</button>
                <label style={{float:"right",fontSize:"20px"}} type="submit">0</label>
                <img style={{width:"30px",borderRadius:"50px",float:"right",paddingRight:"10px"}} src="../src/img/like.jpg"></img>
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
            src = {this.props.commentList[index].offOn===""?"../src/img/commentEmpty.png":"../src/img/comment.png"}
            onClick = {()=>{this.props.showAllComment(index)}} 
            style = {styles.commImg}
          />
          
          <button 
            style={styles.showNet}
            onClick={this.props.showNet}
          >
          Please Enter Your Comment
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
          <label style={styles.label}><img style={styles.commVoteNum} src="../src/img/thumb.png"/> {item.voteThumb}</label>
          <label style={styles.label}><img style={styles.commVoteNum} src="../src/img/love.png"/> {item.voteLove}</label>
          <label style={styles.label}><img style={styles.commVoteNum} src="../src/img/smile.png"/> {item.voteSmile}</label>
          <label style={styles.label}><img style={styles.commVoteNum} src="../src/img/angry.png"/> {item.voteAngry}</label>
          <label style={styles.label}><img style={styles.commVoteNum} src="../src/img/sad.png"/> {item.voteSad}</label>
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
