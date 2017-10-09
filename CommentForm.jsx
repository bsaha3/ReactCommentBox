import React from 'react';

class CommentForm extends React.Component{


    render(){
        // console.log('CommentForm rendering');
        return(
            <form className="commentForm form-horizontal">
                <textarea className="form-control" rows="3" onChange={this.props.handleComment} placeholder="Comment"></textarea>
                <button type="button" className="btn btn-primary" onClick={this.props.handle}>Comment</button>
            </form>
        );
    }
}

export default CommentForm;