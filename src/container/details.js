import React from 'react';
import {connect} from "react-redux"

class Details extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.first}  {this.props.last} @ {this.props.score}</p>
            </div>
        )
    }
}
function convertStoretoProps(store){
    console.log(store.firstname)
    return{
        first:store.firstname,
        last:store.lastname,
        score:store.score
    }
}


export default connect(convertStoretoProps)(Details);