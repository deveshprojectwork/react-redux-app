const nameReducer = (state='', action) =>{
    // console.log(action)
    // return state;
     if(action.type==="CHANGE_NAME"){
        return action.payload
     }
     return state;
}

export default nameReducer;