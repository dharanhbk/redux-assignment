import { combineReducers } from 'redux';

import fristnamechangedreducer from './firstnamechangedReducer';
import lastnamechangedreducer from './lastnamechangedreducer';
import scorechangedreducer from './scorechangedreducer';

const allReducers= combineReducers({
    firstname: fristnamechangedreducer,
    lastname: lastnamechangedreducer,
    score: scorechangedreducer
    
})

export default allReducers