import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {anotherName} from "./actions/myaction"  //change in first part

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>I am App component and myname is : {props.myname}</h1>
      <button onClick={()=>{props.changeName("Hiat")}}>change it</button> 
    </div>
  );
}

//mapStateToProps -- this is to access data
const mapStateToProps = (state) =>{
  return{
    myname: state.cname   //state comming from the reducer, and then we are showing on with {props.myname}
  }
}

//mapDispatchToProps -- this is to dispatch data
const mapDispatchToProps = (dispatch)=>{
  return{
   
    // changeName:(cname)=>{ //this is method, dispatch({type:"CHANGE_NAME", payload:cname})//change in first part
    //   dispatch(anotherName(cname))
    // }
    changeName:()=>{dispatch(anotherName())} //for thung
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);

//note name can be any thing : mapStateToProps/mapDispatchToProps
//onload I am App component and myname is : Devesh
////After click o the button-  I am App component and myname is : Leanne Graham

