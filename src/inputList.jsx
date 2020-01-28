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
      thumb:0,
      love:0,
      angry:0,
      sad:0,
      smile:0,
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
  }

  render(){
    return (
      <Fragment>
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
            return (<div 
              key = {index} 
              style = {{fontSize:"14px",margin:"10px 0px",boxShadow:"2px 2px 4px 2px #eee, -2px 2px 2px 2px #eee ",}}>
              
              <p style={{backgroundColor:"lightgray"}}>{item.split("&")[0]}</p>
              {/* <img 
                src = "../src/love.jpg" 
                onClick = {this.delComment.bind(this,index)} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              > */}
              <p style={{fontSize:"16px",color:"blue"}}>{item.split("&")[1]}</p>
              
              <p style={{backgroundColor:"#eee"}}>{item.split("&").splice(2,item.length)}</p>
              <div>
              <img 
                src = "../src/thumb.jpg" 
                onClick = {this.addThumb} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/love.jpg" 
                onClick = {this.addLove} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/smil.jpg" 
                onClick = {this.addSmile} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/argey.jpg" 
                onClick = {this.addAngry} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
              <img 
                src = "../src/sad.jpg" 
                onClick = {this.addSad} 
                style = {{width:"30px",height:"30px",marginRight:"5px"}}
              />
               <img 
                src = "../src/comment.jpg" 
                onClick = {this.delComment.bind(this,index)} 
                style = {{width:"40px",height:"40px",marginRight:"5px",float:"right"}}
              />
              
              <textarea 
                style={{marginLeft:"20px",borderRadius:"20px",height:"30px",border:"1px solid lightgray"}}
                value={this.state.commentText}  
                cols = "40" rows="1" 
                onChange = {this.commentChange}>
                {this.state.commentText}
              </textarea>

             
          
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
              onClick = {this.delComment.bind(this,index)} 
              style = {{width:"30px",height:"30px",marginRight:"5px",marginLeft:"10px"}}               
              />
              <div style={{width:"100%",height:"30px",backgroundColor:"#eee"}}>
              <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{this.state.thumb}</label>
              <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{this.state.love}</label>
              <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{this.state.smile}</label>
              <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{this.state.angry}</label>
              <label style={{fontSize:"25px",color:"orange",margin:"5px 11px"}}>{this.state.sad}</label>
              <label style={{fontSize:"18px",color:"gray",margin:"5px 11px",marginLeft:"150px"}}>Total Vote: </label>
              <label style={{fontSize:"20px",color:"orange",margin:"5px 11px"}}>1000</label>  
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
      let person={timeDate:timeDate,timeLocal:localTime,defaultPerson:this.state.defaultPerson,commentText:this.state.commentText,voteLove:0,voteThumb:0,voteLove:0,voteSmile:0,voteAngry:0,voteSad:0}
      this.setState({
      commentList:[(new Date().toLocaleDateString())+"  "+(new Date().toLocaleTimeString())+"    &"+ this.state.defaultPerson+" said：&" +this.state.commentText,...this.state.commentList],
      commentText:''
    })
    }
  }

  delComment(index){
    let x=[...this.state.commentList];
    x.splice(index,1)
    this.setState({
      commentList:x
    })
  }
  addThumb(){
    this.setState({
      thumb:this.state.thumb+1,
    })
  }

  addLove(){
    this.setState({
      love:this.state.love+1,
    })
  }

  addSad(){
    this.setState({
      sad:this.state.sad+1,
    })
  }
  addAngry(){
    this.setState({
      angry:this.state.angry+1,
    })
  }
  addSmile(){
    this.setState({
      smile:this.state.smile+1,
    })
  }
}