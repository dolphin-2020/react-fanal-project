import React,{Component} from 'react'
import styles from '../src/styles.jsx'

class HeaderInput extends Component{
  render(){
    return(
      <div style={{width:"70%",margin:"auto"}}>
      <input 
        type="text" 
        style={{width:"62%",height:"30px"}} 
        placeholder="Please enter your name" 
        onChange={this.props.valChange} 
        value={this.props.register}
      />
      
      <button 
        onClick={this.props.addToList} 
        type="submit" 
        style={styles.addTodoListBtn}
        >Register
        </button>
      <select 
        onChange={this.props.selectVal} 
        style={{width:"22%",height:"36px"}}>
        { 
          this.props.nameList.map((item,index)=>{
            return <option 
              key={index} 
              value={item}>{item}
            </option>
          })
        }
      </select>
      <br/>
      <textarea 
        placeholder={this.props.defaultPerson+"will give comment"}
        style={{marginTop:"10px",width:"100%"}}
        value={this.props.commentText}  
        cols = "140" rows="9" 
        onChange = {this.props.commentChange}>
        {this.props.commentText}
      </textarea>
      <br/>
      <button 
        onClick = {this.props.addComment}
        style={styles.addComment} 
        type="button" placeholder="Please input comment">
        Submit
        </button>

        <select onChange={this.props.sortBy} 
        style={styles.sortSelect}>
        { 
          this.props.sortingBy.map((item,index)=>{
            return <option 
              key={index} 
              value={item}>{item}
            </option>
          })
        }
        </select>
  
        <button 
          onClick={this.props.showHidingComment} 
          style={styles.showHidingCommentBtn}>
          Show All Comment
        </button>
      </div>
    )
  }
  
}
export default HeaderInput;