import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {anotherName, addWish, delWish} from "./actions/myaction"  //change in first part


function App(props) {
  const mywish = props.mywish.map(item=>{
    return <h2 key={Math.random()}>{item}</h2>  //key to fix error
  })

  console.log(props)
  return (
    <div className="App">
      <h1>I am App component and myname is : {props.myname}</h1>
      <button onClick={()=>{props.changeName("Hiat")}}>change it</button> 
      {mywish}
      <button onClick={()=>{props.addWish()}}>add wish</button> 
      <button onClick={()=>{props.delWish()}}>delete wish</button> 
    </div>
  );
}

//mapStateToProps -- this is to access data
const mapStateToProps = (state) =>{
  return{
    myname: state.cname,   //state comming from the reducer, and then we are showing on with {props.myname}
    mywish:state.wish
  }
}

//mapDispatchToProps -- this is to dispatch data
const mapDispatchToProps = (dispatch)=>{
  return{
    // changeName:(cname)=>{ //this is method, dispatch({type:"CHANGE_NAME", payload:cname})//change in first part
    //   dispatch(anotherName(cname))
    // }
    changeName:()=>{ dispatch(anotherName()) }, //for thung
    addWish:()=>{ dispatch(addWish()) },
    delWish:()=>{ dispatch(delWish()) },
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);

//note name can be any thing : mapStateToProps/mapDispatchToProps
//onload I am App component and myname is : Devesh
////After click o the button-  I am App component and myname is : Leanne Graham

