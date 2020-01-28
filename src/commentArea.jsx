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
                {/* <img 
                  src = "../src/love.jpg" 
                  onClick = {this.delComment.bind(this,index)} 
                  style = {{width:"30px",height:"30px",marginRight:"5px"}}
                > */}
                <p style={{fontSize:"16px",color:"blue"}}>{item.defaultPerson}</p>
                
                <p style={{backgroundColor:"#eee"}}>{item.commentText}</p>
                </div>
            })
          }
          </div>

          <div>
          <img 
            src = "../src/thumb.jpg" 
            onClick = {()=>{this.props.addThumb.bind(index)}} 
            style = {styles.addThumb}
          />
          <img 
            src = "../src/love.jpg" 
            onClick = {()=>{this.props.addLove.bind(index)}} 
            style = {styles.addThumb}
          />
          <img 
            src = "../src/smil.jpg" 
            onClick = {()=>{this.props.addSmile.bind(index)}}
            style = {styles.addThumb}
          />
          <img 
            src = "../src/argey.jpg" 
            onClick = {()=>{this.props.addAngry.bind(index)}} 
            style = {styles.addThumb}
          />
          <img 
            src = "../src/sad.jpg" 
            onClick = {()=>{this.props.addSad.bind(index)} }
            style = {styles.addThumb}
          />
           <img 
            src = "../src/comment.jpg" 
            onClick = {()=>{this.props.showAllComment.bind(index)}} 
            style = {styles.commImg}
          />
          
          <button 
            style={styles.showNet}
            onClick={this.props.showNet}
          >
          {this.props.netCommentText===''? 'Please Enter Your Comment':this.props.netCommentText.slice(0,32)+"..."}
          </button>
        
          <img src="../src/send.jpg"
          onClick = {()=>{this.props.sendNetComment.bind(index)}} 
          style = {styles.send}               
          />

        <select onChange={()=>{this.props.hidingComm.bind(index)}} 
          style={{width:"18%",height:"38px",float:"right"}}>
          { 
            this.props.Hiding.map((item,index)=>{
              return <option 
                key={index} 
                value={item}>{item}
              </option>
            })
          }
          </select>

          <div style={styles.showVoteDiv}>
            <label style={styles.label}>{item.voteThumb}</label>
            <label style={styles.label}>{item.voteLove}</label>
            <label style={styles.label}>{item.voteSmile}</label>
            <label style={styles.label}>{item.voteAngry}</label>
            <label style={styles.label}>{item.voteSad}</label>
            <img 
            src = "../src/minus.png" 
            onClick = {()=>{this.props.delComment.bind(index)}} 
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
