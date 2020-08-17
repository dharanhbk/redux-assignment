const lastnamechangedreducer = function lastNameChanged(state = null, action){
    console.log("action->",action)
    switch (action.type) {
        case "LAST_NAME_CHANGED":
            return action.payload
    }

   return state

}

export default lastnamechangedreducer