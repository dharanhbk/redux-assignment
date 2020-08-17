const scorechangedreducer = function scoreChanged(state = null, action){
    console.log("action->",action)
    switch (action.type) {
        case "SCORE_CHANGED":
            return action.payload
    }

   return state

}

export default scorechangedreducer