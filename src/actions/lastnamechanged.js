const lastNameChanged = function(value){
    console.log(value);
    console.log("Action called");
    return (
        {
            type:"LAST_NAME_CHANGED",
            payload: value
        }
    )
}

export default lastNameChanged