// export const anotherName = (cname =>{
//     return{
//         type:"CHANGE_NAME", 
//         payload:cname
//     }
// })

// export const anotherName = () =>{
//     // return  (dispatch)=>{
//     //    fetch("https://jsonplaceholder.typicode.com/users")
//     //    .then(res=>res.json())
//     //    .then(res2=>{
//     //        dispatch({type:"CHANGE_NAME", payload:res2[0].name})
//     //    })
//     // }
// }
export const anotherName = () =>{
    //with asnc and await : this is like promise
    return async  (dispatch)=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const res2 = await data.json()
            dispatch({type:"CHANGE_NAME", payload:res2[0].name})
     }
}

export const addWish = () =>{
    //with asnc and await : this is like promise
    console.log("myaction.js-addwish()")
    return {
        type:"ADD_WISH", 
        payload: "code"  //HARD CODING AND ADDING VALUE, ELSE YOU CAN SEND VALUE FROM () AND PAYLOAD
    }
}

export const delWish = () =>{
    //with asnc and await : this is like promise
    console.log("myaction.js-delWish()")
    return {
        type:"DEL_WISH", 
        payload: "delete"  //HARD CODING AND ADDING VALUE, ELSE YOU CAN SEND VALUE FROM () AND PAYLOAD
    }
}