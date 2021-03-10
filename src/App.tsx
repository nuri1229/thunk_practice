import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./reducer";
import { counterAction } from "./action";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: AppState) => state.counter);

  const increase = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("increase");
    dispatch(counterAction(counter + 1));
  };

  const decrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(counterAction(counter - 1));
    console.log("decrease");
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default App;
