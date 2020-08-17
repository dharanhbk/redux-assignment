const scoreChanged = function(value){
    console.log(value);
    console.log("Action called");
    return (
        {
            type:"SCORE_CHANGED",
            payload: value
        }
    )
}

export default scoreChanged