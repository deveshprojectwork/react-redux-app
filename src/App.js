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
    //this is method
    changeName:(cname)=>{
      // dispatch({type:"CHANGE_NAME", payload:cname})//change in first part
      dispatch(anotherName(cname))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);

//note name can be any thing : mapStateToProps/mapDispatchToProps


