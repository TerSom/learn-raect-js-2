import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>My Footer {this.props.paragraf()}</h1>
            </div>
        )
    }
}

export default Footer