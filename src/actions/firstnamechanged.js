const firstNameChanged = function(value){
    console.log(value);
    console.log("Action called");
    return (
        {
            type:"FIRST_NAME_CHANGED",
            payload: value
        }
    )
}

export default firstNameChanged