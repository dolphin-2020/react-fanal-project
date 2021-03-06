import React,{Component,Fragment} from 'react'
import store from '../src/store.jsx'
import Header from '../src/header.jsx'
import HeaderInput from '../src/headerInput.jsx'
import CommentArea from '../src/commentArea.jsx'
import IconChoose from '../src/iconChoose.jsx'
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
    this.sortBy=this.sortBy.bind(this);
    this.hidingComm=this.hidingComm.bind(this);
    this.showHidingComment=this.showHidingComment.bind(this);
    this.showAllComment=this.showAllComment.bind(this);
    this.delComment=this.delComment.bind(this);
    this.showPhoto=this.showPhoto.bind(this);
    this.chooseImg=this.chooseImg.bind(this);
    this.disappear=this.disappear.bind(this);
    this.like=this.like.bind(this);
    this.sendNetComment=this.sendNetComment.bind(this);
    
  }

  render(){
    return (
      <Fragment>
        <Header
          defaultName={this.state.defaultPerson}
          defaultHeadImg={this.state.defaultHeadImg}
        />

        <IconChoose
          chooseHeader={this.state.chooseHeader}
          darkBackground={this.state.darkBackground}
          chooseImg={this.chooseImg}
          disappear={this.disappear}
        />
       
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
          showPhoto={this.showPhoto}
        /> 

        <CommentArea
          commentList={this.state.commentList}
          timeFormat={this.timeFormat}
          addThumb={this.addThumb}
          addLove={this.addLove}
          addSmile={this.addSmile}
          addAngry={this.addAngry}
          addSad={this.addSad}
          showAllComment={this.showAllComment}
          showNet={this.showNet} 
          hidingComm={this.hidingComm}
          Hiding={this.state.Hiding}
          delComment={this.delComment}
          netCommentText={this.state.netCommentText}
          commentList={this.state.commentList}
          insideComment={this.state.insideComment}//
          insideComment={this.state.insideComment}
          insideCommentChange={this.insideCommentChange}
          hindNetComment={this.hindNetComment}
          netBtn={this.netBtn}
          like={this.like}
          sendNetComment={this.sendNetComment}

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
      let newPerson={name:this.state.register,headImg:this.state.defaultHeadImg};
      this.setState(
        {
          nameList:[newPerson,...this.state.nameList],
          register:''
        }
      )
    }
  }

  selectVal(e){
    let newNameList=[...this.state.nameList];
    let img="../src/img/defaultHeadImg.png";
    for(let i=0;i<newNameList.length;i++){
      if(newNameList[i].name===e.target.value){
        img=newNameList[i].headImg;
      }
    }
    this.setState(
      {
        defaultPerson:e.target.value,
        defaultHeadImg:img,
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
    if(this.state.commentText!==''){
      
      let person={
        markTime:new Date().getTime(),
        netCommentDisplay: "none",
        //insideComment:"",
        netCommentText:"",
        defaultPerson:this.state.defaultPerson,
        headImg:this.state.defaultHeadImg,
        commentText:this.state.commentText,
        display:"",offOn:"",
        voteLove:0,
        voteThumb:0,
        voteSmile:0,
        voteAngry:0,
        voteSad:0,
        anotherPersonComment:[]
      }
      this.setState({
      commentList:[person,...this.state.commentList],
      backupCommentList:[person,...this.state.commentList],
      commentText:''
    })
    }
  }

  delComment(index){
    let newCommentList=[...this.state.commentList];
    newCommentList.splice(index,1)
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
    })
  }

  addThumb(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].voteThumb+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
    })
  }

  addLove(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].voteLove+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
    })
  }

  addSad(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].voteSad+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
    })
  }

  addAngry(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].voteAngry+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
    },console.log(this.state.commentList[index].voteAngry))
  }
  
  addSmile(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].voteSmile+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
    })
  }

  showNet(index,item){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].netCommentDisplay="";
    this.setState({
      commentList:[...newCommentList],
      netCommentDisplay:"",
      darkBackground:"",
      badGuy:item,
    })
  }


  hindNetComment(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].netCommentDisplay="none";
    this.setState({
      commentList:[...newCommentList],
      insideComment:"",
      netCommentText:'',
      darkBackground:"none",
    })
  }

  insideCommentChange(e){
    e.onfocus;
    this.setState({
      insideComment:e.target.value,
    })
  }

  showNet(index,ele){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].netCommentDisplay="";
    this.setState({
      commentList:[...newCommentList],
      netCommentDisplay:"",////////////////
      darkBackground:"",
      badGuy:ele,
    })
  }

  netBtn(index,name){
console.log(name)
    let newCommentList=[...this.state.commentList];
    newCommentList[index].netCommentText=this.state.insideComment;
    newCommentList[index].netCommentDisplay="none";
    
    this.setState({
      commentList:[...newCommentList],
      darkBackground:"none",
    })
    if(this.state.commentList[index].netCommentText===''){
      alert("Are you kidding me?")
    }else{
      let newCommentList=[...this.state.commentList];
      newCommentList[index].offOn=""
      let markTime=new Date().getTime();
      let person={markTime:markTime,defaultPerson:this.state.defaultPerson+"  @"+this.state.badGuy,headImg:this.state.defaultHeadImg,commentText:this.state.commentList[index].netCommentText,voteLove:0,voteThumb:0,voteSmile:0,voteAngry:0,voteSad:0,like:0}
      newCommentList[index].anotherPersonComment=[person,...newCommentList[index].anotherPersonComment];
      this.setState({
        commentList:[...newCommentList],
        backupCommentList:[...newCommentList],
        insideComment:"",
        badGuy:"",
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
      backupCommentList:[...newCommentList],
    })
  }

  showHidingComment(e){
    let newCommentList=[...this.state.commentList];
      for(let i=0;i<newCommentList.length;i++){
        newCommentList[i].display="";
      }
      this.setState({
        commentList:[...newCommentList],
        backupCommentList:[...newCommentList],
      })
  }

  showAllComment(index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].offOn===""?newCommentList[index].offOn="none":newCommentList[index].offOn="";
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
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

  showPhoto(){
    this.setState({
        darkBackground:"",
        chooseHeader:"",
    })
  }

  chooseImg(e){
    console.log(e.target.src)
    this.setState({
      darkBackground:"none",
      chooseHeader:"none",
      defaultHeadImg:e.target.src,
    })
  }

  disappear(){
    this.setState({
      darkBackground:"none",
      chooseHeader:"none",
    })
  }

  like(idx,index){
    let newCommentList=[...this.state.commentList];
    newCommentList[index].anotherPersonComment[idx].like+=1;
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
    })
  }

  sendNetComment(){
    alert("Just for decoration. Next time may be add some function")
  }
}