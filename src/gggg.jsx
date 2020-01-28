<div style = {{width:"70%",margin:"auto"}}>
{
  this.state.commentList.map((item,index)=>{
  return (
    <div 
    key = {new Date().getTime()+index} 
    style = {{fontSize:"14px",margin:"10px 0px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",display:this.state.commentList[index].display}}>
    
    <p style={{backgroundColor:"lightgray"}}>{this.timeFormat(item.markTime)}</p>
    {/* <img 
      src = "../src/love.jpg" 
      onClick = {this.delComment.bind(this,index)} 
      style = {{width:"30px",height:"30px",marginRight:"5px"}}
    > */}
    <p style={{fontSize:"16px",color:"blue"}}>{item.defaultPerson}</p>
    
    <p style={{backgroundColor:"#eee"}}>{item.commentText}</p>
    
    <div style={{width:"90%",backgroundColor:"lightgray",margin:"auto",display:this.state.commentList[index].offOn}}>
    {
      this.state.commentList[index].anotherPersonComment.map((item,index)=>{
        return <div 
          key = {new Date().getTime()+index} 
          style = {styles.anotherPersonComment}>
          
          <p style={{backgroundColor:"lightgray"}}>{this.timeFormat(item.markTime)}</p>
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
      onClick = {this.addThumb.bind(this,index)} 
      style = {styles.addThumb}
    />
    <img 
      src = "../src/love.jpg" 
      onClick = {this.addLove.bind(this,index)} 
      style = {styles.addThumb}
    />
    <img 
      src = "../src/smil.jpg" 
      onClick = {this.addSmile.bind(this,index)} 
      style = {styles.addThumb}
    />
    <img 
      src = "../src/argey.jpg" 
      onClick = {this.addAngry.bind(this,index)} 
      style = {styles.addThumb}
    />
    <img 
      src = "../src/sad.jpg" 
      onClick = {this.addSad.bind(this,index)} 
      style = {styles.addThumb}
    />
     <img 
      src = "../src/comment.jpg" 
      onClick = {this.showAllComment.bind(this,index)} 
      style = {styles.commImg}
    />
    
    <button 
      style={styles.showNet}
      onClick={this.showNet}
    >
    {this.state.netCommentText===''? 'Please Enter Your Comment':this.state.netCommentText.slice(0,32)+"..."}
    </button>
  
    <img src="../src/send.jpg"
    onClick = {this.sendNetComment.bind(this,index)} 
    style = {styles.send}               
    />

  <select onChange={this.hidingComm.bind(this,index)} 
    style={{width:"18%",height:"38px",float:"right"}}>
    { 
      this.state.Hiding.map((item,index)=>{
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
      onClick = {this.delComment.bind(this,index)} 
      style = {styles.delComment}
    />
    </div>
</div>
   
</div>
    )
})}
</div>