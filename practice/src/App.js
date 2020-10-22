import React from "react";
import "./App.css"
// import ReactDOM from "react-dom";
import FlipMove from "react-flip-move";






// ----------CHAPTER 15----------
// class TodoItems extends React.Component {
//   constructor(props) {
//     super(props)
//     this.createTasks = this.createTasks.bind(this)
//   }
//   delete(key) {
//     this.props.delete(key);
//   }

//   createTasks(item) {
//     return <li onClick={()=> this.delete(item.key)}key={item.key}>{item.text}</li>
//   }
//   render() {

//     let todoEntries = this.props.entries;
//     let listItems = todoEntries.map(this.createTasks);

//     return (
//       <ul className="theList"><FlipMove duration={250} easing="ease-out">{listItems}</FlipMove></ul>
//     )
//   }
// }
// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [] };
//     this.addItem = this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//   }
//   addItem(e) {

//     let itemArray = this.state.items;
//     if (this._inputElement.value !== "") {
//       itemArray.unshift({
//         text: this._inputElement.value,
//         key: Date.now()
//       })

//       this.setState({ items: itemArray });
//       this._inputElement.value = "";
//     }
//     console.log(itemArray);
//     e.preventDefault();
//   }
//   deleteItem(key) {
//     var filteredItems = this.state.items.filter(function (item) {
//       return (item.key !== key);

//     })
// this.setState({items:filteredItems})
//   }
//   render() {
//     return (
//       <div className="todoListMain">
//         <div className="header">
//           <form onSubmit={this.addItem}>
//             <input ref={(a) => this._inputElement = a} placeholder="enter task"></input>
//             <button type="submit">add</button>
//           </form>
//         </div>
//         <TodoItems delete={this.deleteItem}entries={this.state.items}></TodoItems>
//       </div>
//     )
//   }
// }
// export default TodoList;

// --------CHAPTER 14----------
// var xhr;
// class IPAddress extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.ip}</h1>
//                 <p>( This is your IP address...probably :P )</p>
//             </div>
//         );
//     }
// };
// class IPAddressContainer extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             ip_address: "..."
//         };
//         this.processRequest = this.processRequest.bind(this);
//     }
//     componentDidMount() {
//         xhr = new XMLHttpRequest();
//         xhr.open('GET', "https://ipinfo.io/json", true);
//         xhr.send();

//         xhr.addEventListener("readystatechange", this.processRequest, false);
//     }
//     processRequest() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);

//             this.setState({
//                 ip_address: response.ip
//             });
//         }
//     }
//     render() {
//         return (
//             <IPAddress ip={this.state.ip_address}/>
//         );
//     }
// };
// export default IPAddressContainer;



// ----------CHAPTER 11----------
// class Colorizer extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: "",
//             bgColor: "White"
//         };
//         this.colorValue = this.colorValue.bind(this);
//         this.setNewColor = this.setNewColor.bind(this);
//     }
//     colorValue(e) {
//         this.setState({ color: e.target.value });
//     }
//     setNewColor(e) {
//         this.setState({ bgColor: this.state.color });
//         // this._input.focus();
//         this._input.value = "";
//         e.preventDefault();
//     }
//     render() {
//         var squareStyle = { backgroundColor: this.state.bgColor,width:242,height:242,marginBottom:15};
//         return(
//             <div>
//                 <div style={squareStyle}>
//                     <form onSubmit={this.setNewColor}>
//                         <input onChange={this.colorValue} ref={(el) => this._input = el} placeholder="Enter a color value"></input>
//                         <button type="submit">go</button>
//                     </form>
//                     <ColorLabel color={this.state.bgColor}/>
//                 </div>
// </div>
//         )
// }
// }
// var heading = document.querySelector("#colorHeading");
// class ColorLabel extends React.Component {
//     render() {
//     return ReactDOM.createPortal(
//         <div style={{ color: this.props.color}}>Colorizer</div>,
//       heading
//     );
//   }
// }
// export default Colorizer;


// ----------CHAPTER 10-----------
// class Counter extends React.Component{
//   render() {
//     var textStyle = {
//       fontSize: 72,
//       fontFamily: "Sans-serif",
//       color: "#333",
//       fontWeight: "bold"
//     };
//     return (
//       <div style={textStyle}>
//         {this.props.display}
//       </div>
// )
//   }
// }
// class PlusButton extends React.Component{
//   render() {
//     return (<button onClick={this.props.clickHandle}> + </button>)
// }
// }
// class CounterParent extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.increase = this.increase.bind(this);
//   }
//   increase(e) {
//     let currentCount = this.state.count
//     // this.setState({ count: this.state.count + 1 });
//     if (e.shiftKey) {
//       currentCount += 10;
//     }
//     else {
//       currentCount += 1;
//     }
//     this.setState({ count: currentCount });
//   }
// render(){
//   var backgroundStyle = {
//     padding: 50,
//     backgroundColor: "#FFC53A",
//     width: 250,
//     height: 250,
//     borderRadius: 10,
//     textAlign: "center"
//   };
//   var buttonStyle = {
//     fontSize: "1em",
//     width: 30,
//     height: 30,
//     fontFamily: "sans-serif",
//     color: "#333",
//     fontWeight: "bold",
//     lineHeight: "3px"
//   };
// return(
//   <div style={backgroundStyle}>
//     <Counter display={this.state.count} />
//     {/* <button onClick={this.increase} style={buttonStyle}>+</button> */}
//     <PlusButton clickHandle ={this.increase}/>
// </div>
// )
// }
// }
// export default CounterParent;

















// ----------CHAPTER 9----------
// class App extends React.Component{
//   render() {
//     var circleStyle = {
//       padding: 10,
//       margin: 20,
//       display: "inline-block",
//       backgroundColor: this.props.bgColor,
//       borderRadius: "50%",
//       width: 100,
//       height: 100,
//     };
//     return (
//       <div style={circleStyle}></div>
//     )
// }
// };
// export default App;





