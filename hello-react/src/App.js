import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter"
import Say from "./Say";

class App extends Component {
  render(){
    const name = "리액트";
    return (
    <fragment>
      <div className="react">{name}</div>
      <MyComponent favoriteNumber={1}>칠드런 리엑트</MyComponent>
      <Counter></Counter>
      <Say></Say>
    </fragment>);
  }

  
}

export default App;
