// export const anotherName = (cname =>{
//     return{
//         type:"CHANGE_NAME", 
//         payload:cname
//     }
// })

export const anotherName = () =>{
    // return  (dispatch)=>{
    //    fetch("https://jsonplaceholder.typicode.com/users")
    //    .then(res=>res.json())
    //    .then(res2=>{
    //        dispatch({type:"CHANGE_NAME", payload:res2[0].name})
    //    })
    // }

    //with asnc and await : this is like promise
    return async  (dispatch)=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const res2 = await data.json()
            dispatch({type:"CHANGE_NAME", payload:res2[0].name})
     }
}