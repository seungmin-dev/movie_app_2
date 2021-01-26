import React from "react";
//import logo from './logo.svg';
//import './App.css';
//import Potato from "./Potato.js"; //"./"은 같은 폴더 안에 들어있다는 말

function FoodILike({name, color}) {
  return <h3>I like {name} and it's {color}</h3>
}

const food = [
  {name : "kimbap", color : "black"},
  {name : "kimchi", color : "red"},
  {name : "tteocbokki", color : "red"},
  {name : "bibimbap", color : "colorful"}
];

function renderFood(food) {
    return <FoodILike name={food.name} color={food.color} />;
}

function App() {
  return { FoodILike.map(renderFood) };
}

export default App;
