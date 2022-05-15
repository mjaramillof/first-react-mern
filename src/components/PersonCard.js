// Made with traditional function using Component property

import React, { Component } from "react";

class PersonCard extends Component{
    render(){
        
    
        
        return(
        <>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <h2>Age: {this.props.age}</h2>
            <h2>Hair Color: {this.props.hairColor}</h2>
            <button onClick={() => alert('clicked')}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </>
        );
    }
}

export default PersonCard;