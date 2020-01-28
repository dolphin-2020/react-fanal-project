import React,{Component,Fragment} from 'react'
import store from '../src/store.jsx'
import styles from '../src/styles.jsx'
import NetCommList from '../src/netCommList.jsx'
import Header from '../src/header.jsx'
import HeaderInput from '../src/headerInput.jsx'
import CommentArea from '../src/commentArea.jsx'

export default class InputList extends Component{
  constructor(props){
    super(props);
    this.state=JSON.parse(JSON.stringify(store));
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
    this.netBtn=this.netBtn.bind(this);
    this.sendNetComment=this.sendNetComment.bind(this);
    this.sortBy=this.sortBy.bind(this);
    this.hidingComm=this.hidingComm.bind(this);
    this.showHidingComment=this.showHidingComment.bind(this);
  }

  render(){
    return (
      <Fragment>
      
      {/* <div 
          style={{display:this.state.netCommentDisplay,width:"400px",position:"fixed",top:"50%",left:"50%", transform: "translate(-50%, -50%)",zIndex:"100"}}
        >
         <textarea 
           placeholder="Enter your comment"
           style={styles.textAreaNet}
           value={this.state.insideComment}  
           cols = "138" rows="19" 
           onChange = {this.insideCommentChange}>
          </textarea>

          <button 
            style={styles.hindNetComment}
            onClick={this.hindNetComment}
          >Cancel
          </button>

          <button 
            style={styles.netBtn}
            onClick={this.netBtn}
          >
          Submit
          </button>
        </div> */}
      
        <NetCommList
          netCommentDisplay={this.state.netCommentDisplay}
          insideComment={this.state.insideComment}
          insideCommentChange={this.insideCommentChange}
          hindNetComment={this.hindNetComment}
          netBtn={this.netBtn}
       /> 
      
      <Header/>
      <HeaderInput
        valChange={this.valChange}
        register={this.state.register}
        addToList={this.addToList}
        selectVal={this.selectVal}
        commentChange={this.commentChange}
        commentText={this.state.commentText}
        addComment={this.addComment}
        sortBy={this.sortBy}
        sortingBy={this.state.sortingBy}
        showHidingComment={this.showHidingComment}
        nameList={this.state.nameList}
        defaultPerson={this.state.defaultPerson}
     /> 


{/*      

 <div style={{width:"70%",margin:"auto"}}>
          <input 
            type="text" 
            style={{width:"62%",height:"30px"}} 
            placeholder="Please enter your name" 
            onChange={this.valChange} 
            value={this.state.register}
          />
          
        <button 
          onClick={this.addToList} 
          type="submit" 
          style={styles.addTodoListBtn}
          >Register
          </button>
        <select 
          onChange={this.selectVal} 
          style={{width:"22%",height:"36px"}}>
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
          style={styles.addComment} 
          type="button" placeholder="Please input comment">
          Submit
          </button>

          <select onChange={this.sortBy} 
          style={styles.sortSelect}>
          { 
            this.state.sortingBy.map((item,index)=>{
              return <option 
                key={index} 
                value={item}>{item}
              </option>
            })
          }
          </select>

          <button onClick={this.showHidingComment} style={styles.showHidingCommentBtn}>
           Show All Comment
          </button>
        </div>


     
         */}

<CommentArea
commentList={this.state.commentList}
timeFormat={this.timeFormat}
commentList={this.state.commentList}
addThumb={this.addThumb}
addLove={this.addLove}
addSmile={this.addSmile}
addAngry={this.addAngry}
addSad={this.addSad}
showAllComment={this.showAllComment}
showNet={this.showNet}
sendNetComment={this.sendNetComment}
hidingComm={this.hidingComm}
Hiding={this.state.Hiding}
delComment={this.delComment}


/>

        
      
 
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
      
      let person={markTime:new Date().getTime(),defaultPerson:this.state.defaultPerson,commentText:this.state.commentText,display:"",offOn:"",voteLove:0,voteThumb:0,voteLove:0,voteSmile:0,voteAngry:0,voteSad:0,anotherPersonComment:[]}
      this.setState({
      commentList:[person,...this.state.commentList],
      backupCommentList:[...this.state.commentList],
      commentText:''
    },console.log(this.state.commentList))
    }
  }

  delComment(index){
    let newCommentList=[...this.state.commentList];
    newCommentList.splice(index,1)
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }

  addThumb(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].voteThumb+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }

  addLove(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteLove+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }

  addSad(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteSad+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }

  addAngry(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteAngry+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }
  addSmile(index){
    let newCommentList=this.state.commentList;
    newCommentList[index].voteSmile+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }

  insideCommentChange(e){
    this.setState({
      insideComment:e.target.value,
    })
  }

  showNet(){
    this.setState({
      netCommentDisplay:"",
    })
  }

  hindNetComment(){
    this.setState({
      netCommentDisplay:"none",
      insideComment:"",
      netCommentText:'',
    })
  }

  netBtn(){
    this.setState({
      netCommentText:this.state.insideComment,
      netCommentDisplay:"none"
    },console.log(this.state.netCommentText))
  }

  sendNetComment(index){
    if(this.state.netCommentText===''){
      alert("Are you kidding me?")
    }else{
      let newCommentList=[...this.state.commentList];
      let markTime=new Date().getTime();
      let person={markTime:markTime,defaultPerson:this.state.defaultPerson,commentText:this.state.netCommentText,voteLove:0,voteThumb:0,voteLove:0,voteSmile:0,voteAngry:0,voteSad:0}
      newCommentList[index].anotherPersonComment=[person,...newCommentList[index].anotherPersonComment];
      this.setState({
        commentList:[...newCommentList],
        backupCommentList:[...this.state.commentList],
        insideComment:"",
        netCommentText:"",
      })
    }
  }

  sortBy(e){

    this.setState({
      commentList:[...this.state.backupCommentList],
    })

    let newCommentList=[...this.state.backupCommentList];
    if(e.target.value==="Sorting by username"){
    newCommentList= newCommentList.filter((item)=>{
        return item.defaultPerson===this.state.defaultPerson;
      })
      this.setState({
        commentList:[...newCommentList],
      })
    }

    if(e.target.value==="Sorting by new"){
      newCommentList= newCommentList.sort((a,b)=>{
        return b.markTime-a.markTime;
      })
      this.setState({
        commentList:[...newCommentList],
      })
    }

    if(e.target.value==="Sorting by words"){
      newCommentList=newCommentList.sort((a,b)=>{
        return b.commentText.length-a.commentText.length;
      })
      this.setState({
        commentList:[...newCommentList],
      })

    }
    if(e.target.value==="Sorting by thumb votes"){
      newCommentList= newCommentList.sort((a,b)=>{
        return b.voteThumb-a.voteThumb;
      })
      this.setState({
        commentList:[...newCommentList],
      })
    }
  }

  hidingComm(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].display="none";
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }

  showHidingComment(e){
    let newCommentList=[...this.state.commentList];
      for(let i=0;i<newCommentList.length;i++){
        newCommentList[i].display="";
      }
      this.setState({
        commentList:[...newCommentList],
        backupCommentList:[...this.state.commentList],
      })
  }

  showAllComment(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].offOn===""?newCommentList[index].offOn="none":newCommentList[index].offOn="";
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...this.state.commentList],
    })
  }

  timeFormat(time){
    let minute=1000*60;
    let hour=minute*60;
    let day=hour*24;
    let week=hour*7;
    let now=new Date().getTime();
    let diffTime=now-time
    if(diffTime<minute){
      return "Just Now";
    }
    if(diffTime>minute&&diffTime<hour){
      return parseInt(diffTime/minute) + " minute ago";
    }
    if(diffTime>=hour&&diffTime<day){
      return parseInt(diffTime/hour)+" hours ago"
    }
    if(diffTime>=day&&diffTime<week){
      return parseInt(diffTime/day)+" day ago"
    }
    if(diffTime>=week){
      return new Date(time);
    }
  }
}