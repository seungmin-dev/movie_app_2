import React from "react";
//import logo from './logo.svg';
//import './App.css';
//import Potato from "./Potato.js"; //"./"은 같은 폴더 안에 들어있다는 말
import PropTypes from "prop-types";

function ILike({name, color}) {
  return <h3>I like {name} and it's {color}</h3>
}

const Food = [
  {id: 1, name : "kimbap", color : "black"},
  {id: 2, name : "kimchi", color : "red"},
  {id: 3, name : "tteocbokki", color : "red"},
  {id: 4, name : "bibimbap", color : "colorful"}
];

ILike.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

// function renderFood(food) {
//     return <ILike name={food.name} color={food.color} />;
// }

function App() {
  return <div>{ Food.map(dish => (
    <ILike key={dish.id} name={dish.name} color={dish.color} />
  )) 
  }</div>
}

export default App;
