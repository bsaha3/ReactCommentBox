import React from 'react';
import CommentList from './CommentList.jsx'
import CommentForm from './CommentForm.jsx'

class CommentBox extends React.Component {

  constructor(props){
      super(props);

      this.state={
          comment:'',
          data:[]
      }

      this.handleClick=this.handleClick.bind(this);
      this.handleChangeComment=this.handleChangeComment.bind(this);
  } 

  handleChangeComment(e){
    this.setState({comment:e.target.value});
  }

  handleClick(e){
      var array=this.state.data;
      array.push(this.state.comment);
      this.setState({data:array});
  }

   render() {
      return (
        <div className="commentBox">
            <h1>My comment box</h1>
            <CommentList data={this.state.data}/>
            <CommentForm handle={this.handleClick} 
             handleComment={this.handleChangeComment}/>
        </div>
      );
   }
}

export default CommentBox;