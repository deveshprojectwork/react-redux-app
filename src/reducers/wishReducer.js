
const wishReducer = (state=[], action) =>{
     console.log(action)
     //return state;
     
     if(action.type==="ADD_WISH"){
        return [...state,action.payload] // ...state, used to preserve the value
     }
     else if(action.type==="DEL_WISH"){
        return [...state,action.payload] // ...state, used to preserve the value
     }

      return state;
}

export default wishReducer;