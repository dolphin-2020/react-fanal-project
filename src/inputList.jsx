import React,{Component,Fragment} from 'react'

export default class InputList extends Component{
  constructor(props){
    super(props);
    this.state={
      defaultPerson:'anonymous',
      register:'',
      nameList:[
        "Dolphin",
        "Dragon",
        "Zane",
        "Amit",
      ],
      commentText:'',

      commentList:[],

      sortingBy:[
        "Sorting by new",
        "Sorting by words",
        "Sorting by username"
      ],
      Hiding:[
        "show your comment",
        "hidding your comment",
      ],
      showAll:[
        "Show no hiding comment",
        "Show all comment",
      ],
      insideComment:'',
      netComment:"none",
    }
      this.valChange=this.valChange.bind(this);
      this.addToList=this.addToList.bind(this);
      this.selectVal=this.selectVal.bind(this);
      this.commentChange=this.commentChange.bind(this);
      this.addComment=this.addComment.bind(this);
      this.addThumb=this.addThumb.bind(this);
      this.addLove=this.addLove.bind(this);
      this.addSad=this.addSad.bind(this);
      this.addAngry=this.addAngry.bind(this);
      this.addSmile=this.addSmile.bind(this);
      this.insideCommentChange=this.insideCommentChange.bind(this);
      this.showNet=this.showNet.bind(this);
      this.hindNetComment=this.hindNetComment.bind(this);
  }

  render(){
    return (
      <Fragment>
      <div style={{display:this.state.netComment,width:"400px",position:"absolute",top:"50%",left:"50%", transform: "translate(-50%, -50%)"}}>
      <textarea 
          placeholder="Enter your comment"
          style={{marginTop:"10px",width:"100%",backgroundColor:"#eee"}}
          value={this.state.insideComment}  
          cols = "138" rows="19" 
          onChange = {this.insideCommentChange}>
          </textarea>
          <button 
            style={{width:"50%",float:"left",backgroundColor:"#06f",color:"white"}}
            onClick={this.hindNetComment}
          >Cancel
          </button>
          <button 
            style={{width:"50%",float:"right",backgroundColor:"#06f",color:"white"}}
          >Submit
          </button>
      </div>

      <div style={{width:"100%",height:"100px",backgroundColor:"lightblue",marginBottom:"15px"}}>
      <img src="../src/dolphin-icon.jpg" alt="" style={{width:"10%"}}></img>
      </div>
      <main>
      <div style={{width:"70%",margin:"auto"}}>
        <input 
          type="text" 
          style={{width:"62%",height:"30px"}} 
          placeholder="Please enter your name" onChange={this.valChange} value={this.state.register}
        />
          
        <button 
          onClick={this.addToList} 
          type="submit" 
          style={{width:"15%",height:"36px",backgroundColor:"#06f",color:"white"}}>Register</button>
        <select onChange={this.selectVal} style={{width:"22%",height:"36px"}}>
        { 
          this.state.nameList.map((item,index)=>{
            return <option 
              key={index} 
              value={item}>{item}
            </option>
          })
        }
        </select>
        <br/>
        <textarea 
          placeholder={this.state.defaultPerson+"will give comment"}
          style={{marginTop:"10px",width:"100%"}}
          value={this.state.commentText}  
          cols = "140" rows="9" 
          onChange = {this.commentChange}>
          {this.state.commentText}
          </textarea>
        <br/>
        <button 
          onClick = {this.addComment}
          style={{width:"100px",height:"36px",backgroundColor:"#06f",color:"white"}} 
          type="button" placeholder="Please input comment">
          Submit
          </button>

          <select onChange={this.selectVal} style={{width:"20%",height:"36px",marginLeft:"50px"}}>
          { 
            this.state.sortingBy.map((item,index)=>{
              return <option 
                key={index} 
                value={item}>{item}
              </option>
            })
          }
          </select>


          <select onChange={this.selectVal} style={{width:"20%",height:"36px",marginLeft:"50px"}}>
          { 
            this.state.showAll.map((item,index)=>{
              return <option 
                key={index} 
                value={item}>{item}
              </option>
            })
          }
          </select>
        </div>
        
        <div style = {{width:"70%",margin:"auto"}}>
          {this.state.commentList.map((item,index)=>{
            return (
              <div 
              key = {new Date().getTime()+index} 
              style = {{fontSize:"14px",margin:"10px 0px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",}}>
              
              <p style={{backgroundColor:"lightgray"}}>{item.timeDate+" "+item.timeLocal}</p>
              {/* <img 
                src = "../src/love.jpg" 
                onClick = {this.delComment.bind(this,index)} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              > */}
              <p style={{fontSize:"16px",color:"blue"}}>{item.defaultPerson}</p>
              
              <p style={{backgroundColor:"#eee"}}>{item.commentText}</p>
              <div>
              <img 
                src = "../src/thumb.jpg" 
                onClick = {this.addThumb.bind(this,index)} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/love.jpg" 
                onClick = {this.addLove.bind(this,index)} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/smil.jpg" 
                onClick = {this.addSmile.bind(this,index)} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/argey.jpg" 
                onClick = {this.addAngry.bind(this,index)} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/sad.jpg" 
                onClick = {this.addSad.bind(this,index)} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
               <img 
                src = "../src/comment.jpg" 
                onClick = {this.delComment.bind(this,index)} 
                style = {{width:"40px",height:"40px",marginRight:"5px",float:"right"}}
              />
              
              <button 
                style={{marginLeft:"20px",borderRadius:"20px",height:"30px",border:"1px solid lightgray",width:"200px"}}
                onClick={this.showNet}
              >
              Please Enter Your Comment
              </button>
            
              <select onChange={this.selectVal} style={{width:"18%",height:"38px",float:"right"}}>
              { 
                this.state.Hiding.map((item,index)=>{
                  return <option 
                    key={index} 
                    value={item}>{item}
                  </option>
                })
              }
              </select>

              <img src="../src/send.jpg"
              // ///////////////////////////////
              onClick = {this.delComment.bind(this,index)} 
              style = {{width:"30px",height:"30px",marginRight:"5px",marginLeft:"10px"}}               
              />
              <div style={{width:"100%",height:"30px",backgroundColor:"#eee"}}>
                <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{item.voteThumb}</label>
                <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{item.voteLove}</label>
                <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{item.voteSmile}</label>
                <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{item.voteAngry}</label>
                <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{item.voteSad}</label>
                <label style={{fontSize:"18px",color:"gray",margin:"5px 11px",marginLeft:"150px"}}>Total Vote: </label>
                <label style={{fontSize:"20px",color:"orange",margin:"5px 11px"}}>1000</label>  
                <img 
                src = "../src/minus.png" 
                onClick = {this.delComment.bind(this,index)} 
                style = {{width:"30px",height:"30px",float:"right"}}
              />
              </div>
        </div>
             
        </div>
              )
          })}
        </div>
        </main>
      </Fragment>
    )
  }

  valChange(e){
    this.setState(
      {
        defaultPerson:e.target.value,
        register:e.target.value,
      }
    )
  }

  addToList(){
    if(this.state.register===''){
      alert("Are you kidding me?")
    }
    
    if(this.state.register!=''){
      this.setState(
        {
          nameList:[this.state.register,...this.state.nameList],
          register:''
        }
      )
    }
  }
  
  selectVal(e){
    this.setState(
      {
        defaultPerson:e.target.value
      }
    )
  }
    
  commentChange(e){
    this.setState({
      commentText:e.target.value
    })
  }

  addComment(){
    if(this.state.commentText===''){
      alert("Are you kidding me")
    }
    if(this.state.commentText!=''){
      let timeDate=new Date().toLocaleDateString();
      let localTime=new Date().toLocaleTimeString();
      let person={timeDate:timeDate,timeLocal:localTime,defaultPerson:this.state.defaultPerson,commentText:this.state.commentText,voteLove:0,voteThumb:0,voteLove:0,voteSmile:0,voteAngry:0,voteSad:0,anotherPersonComment:[]}
      this.setState({
      commentList:[person,...this.state.commentList],
      commentText:''
    },console.log(this.state.commentList))
    }
  }

  delComment(index){
    let x=[...this.state.commentList];
    x.splice(index,1)
    this.setState({
      commentList:x
    })
  }
  addThumb(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteThumb+=1;
    this.setState({
      commentList:newCommentList,
    })
  }

  addLove(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteLove+=1;
    this.setState({
      commentList:newCommentList,
    })
  }

  addSad(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteSad+=1;
    this.setState({
      commentList:newCommentList,
    })
  }
  addAngry(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteAngry+=1;
    this.setState({
      commentList:newCommentList,
    })
  }
  addSmile(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteSmile+=1;
    this.setState({
      commentList:newCommentList,
    })
  }
  insideCommentChange(e){
    this.setState({
      insideComment:e.target.value,
    })
  }

  showNet(){
    this.setState({
      netComment:"",
    })
  }

  hindNetComment(){
    this.setState({
      netComment:"none",
      insideComment:""
    })
  }
}