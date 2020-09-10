
const iState={
    cname:"devesh",
    wishes: ["eat","code"]
}

const reducer = (state=iState, action) =>{
    // console.log(action)
    // return state;
     if(action.type==="CHANGE_NAME"){
         return{
             ...state, ////used to preserve the value
             cname:action.payload
         }
     }
     return state;
}

export default reducer;