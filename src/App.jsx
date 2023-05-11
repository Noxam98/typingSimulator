import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Keyboard from "./components/keyboard/keyboard.jsx";
import {keyPressed, keyUpped} from "./components/keyboard/slice.js";

function App() {

  return (
    <>

      <Keyboard/>
    </>
  )
}

export default App
