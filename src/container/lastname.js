import React from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import lastNameChanged from '../actions/lastnamechanged';

class LastName extends React.Component {
   
    render() { 
        return ( 
        <div>
            <label>LastName: </label>
            <input type="text" onChange={(e)=>this.props.lastNameChanged(e.target.value)}></input>
        </div> 
        );
    }
}

function createPropsfromstore(store){
    return {
       last : store.lastname
    }
}

function matchDispatchtoProps(dispatch){
    return bindActionCreators({
        lastNameChanged:lastNameChanged
    },dispatch)  
}


export default connect(createPropsfromstore,matchDispatchtoProps) (LastName);