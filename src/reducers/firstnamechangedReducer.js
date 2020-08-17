const fristnamechangedreducer = function firstNameChanged(state = null, action){
    console.log("action->",action)
    switch (action.type) {
        case "FIRST_NAME_CHANGED":
            return action.payload
    }

   return state

}

export default fristnamechangedreducer