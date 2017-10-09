import React from 'react';
import Comment from './Comment.jsx';

class CommentList extends React.Component {

   render() {
    // console.log('CommentList rendering');
        var totalComments=this.props.data.map(function(data,index){
            return(
                <Comment key={index}>{data}</Comment>
            );
            
        }.bind(this));
      return (
         <div className="commentList">
            {totalComments}
         </div>
      );
   }
}

export default CommentList;