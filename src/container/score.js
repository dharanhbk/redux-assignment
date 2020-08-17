import React from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import scoreChanged from '../actions/scorechanged';

class Score extends React.Component {
   
    render() { 
        return ( 
        <div>
            <label>Score: </label>
            <input type="text" onChange={(e)=>this.props.scoreChanged(e.target.value)}></input>
        </div> 
        );
    }
}

function createPropsfromstore(store){
    return {
       score : store.score
    }
}

function matchDispatchtoProps(dispatch){
    return bindActionCreators({
        scoreChanged:scoreChanged
    },dispatch)  
}


export default connect(createPropsfromstore,matchDispatchtoProps) (Score);