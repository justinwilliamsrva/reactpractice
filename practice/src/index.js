import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import CounterParent from "./App";
// import Colorizer from "./App";
// import IPAddressContainer from "./App";
import TodoList from "./App"

import "./index.css"
// import "bootstrap/dist/css/bootstrap.min.css";





// ---------- CHAPTER 15 ----------

// let destination = document.getElementById("root");

// ReactDOM.render(

//        <TodoList/>
//    ,
//     destination
// );











// ---------- CHAPTER 14 ----------

// let destination = document.getElementById("root");

// ReactDOM.render(
//     <div>
//         <IPAddressContainer />
//     </div>,
//     destination
// );



// ---------- CHAPTER 11 ----------

// let destination = document.getElementById("root");

// ReactDOM.render(
//     <div>
//         <Colorizer />
//     </div>,
//     destination
// );

// ---------- CHAPTER 10 ----------

// let destination = document.getElementById("root")

// ReactDOM.render(<div><CounterParent/></div>,destination );

// ----------CHAPTER 9-----------
// ---One Variable
// let theCircle = <App bgColor = "#F9C240" />;
// let destination = document.getElementById("root")

// var colors = ["red", "blue", "green","purple","orange","brown"];

// // ---Function
// function showCircle() {

//     var ran = Math.floor(Math.random() * colors.length);

//     return <App bgColor ={colors[ran]} />
// }

// //--- Array

// let renderData = [];

// for (var i = 0; i < colors.length;i++){

// renderData.push(<App bgColor = {colors[i]}/>)

// }

// //---Renders

// // ReactDOM.render(<div>{theCircle}</div>,destination );
// // ReactDOM.render(<div>{showCircle()}{showCircle()}{showCircle()}</div>, destination);
// ReactDOM.render(<div>{renderData}</div>,destination );














// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
