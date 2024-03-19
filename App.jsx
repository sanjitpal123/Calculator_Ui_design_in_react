import { useState } from "react";
import "./App.css";
import Inputfield from "./input";
import ButtonGroup from "./buttongroup";    
import Container from "./contianer";       
 
function App() {
  let buttons = [
    "/",
    "*",
    '%',
    "c",
    "1",
    "2",
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
  ];
  return (
    <>
    <Container>
    <div className="h-[500px] w-[400px] bg-pink-800 m-[auto] mt-[30px]">
        <Inputfield></Inputfield>
        <div className="grid grid-rows-4 grid-cols-4 w-[350px] justify-center mt-[30px] m-[auto] h-[350px] ">
          {buttons.map((button) => (
            <ButtonGroup key={button} button={button}></ButtonGroup>
          ))}
        </div>
      </div>
    </Container>
    <Container>
      <p class="text-center">This calculator ui is created for practicing css modules and passing children</p>
    </Container>
      
    </>
  );
}

export default App;

