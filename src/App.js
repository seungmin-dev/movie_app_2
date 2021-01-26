import React from "react";
//import logo from './logo.svg';
//import './App.css';
//import Potato from "./Potato.js"; //"./"은 같은 폴더 안에 들어있다는 말

function Food({fav}) {
  return <h3>I like {fav}</h3>
}

function App() {
  return <Food fav="puppies" />
}

export default App;
