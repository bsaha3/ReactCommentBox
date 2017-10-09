import React from 'react';
import Like from './Like.jsx';

class Comment extends React.Component{
    render(){
        // console.log('comment rendering');
        return(
            <div className="comment well well-sm">
                <p>{this.props.children}</p>
                <Like/>
            </div>
        );
    }
}

export default Comment;