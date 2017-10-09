import React from 'react';

class Like extends React.Component{
    constructor(props){
        super(props);

        this.state={
            liked:false
        }

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.liked)
            this.setState({liked:false});
        else
            this.setState({liked:true});
    }

    render(){
        if(this.state.liked){
            return(
                <div>
                    <h6 id="liked" onClick={this.handleClick}>Like</h6>
                    1
                </div>
            );
        }
        else{
            return(
                <h6 id="like" onClick={this.handleClick}>Like</h6>
            );
        }
        
    }
}

export default Like;