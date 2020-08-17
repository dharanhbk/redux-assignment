import React from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import firstNameChanged from '../actions/firstnamechanged';

class FirstName extends React.Component {
   
    render() { 
        return ( 
        <div>
            <label>FirstName: </label>
            <input type="text" onChange={(e)=>this.props.firstNameChanged(e.target.value)}></input>
        </div> 
        );
    }
}

function createPropsfromstore(store){
    return {
       first : store.firstname
    }
}

function matchDispatchtoProps(dispatch){
    return bindActionCreators({
        firstNameChanged:firstNameChanged
    },dispatch)  
}


export default connect(createPropsfromstore,matchDispatchtoProps) (FirstName);