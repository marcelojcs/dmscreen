import React from 'react';

class Overlay extends React.Component{

    constructor(props){
        super(props);
        this.state={
            type:this.props.type,
            data:this.props.data
        }
    }

    render(){
        return(
            <div>

            </div>
        );   
    }
}

export default Overlay;