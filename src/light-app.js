import React, { useState } from "react";
import './App.css';
function LightApp(props) {
    var Name = props.Name;
    console.log(Name);
    console.log(props);
  const [lightstate,setLightsate] = useState("off");
  const [bulbcolor,setBulbcolor] = useState("yellow");
console.log(lightstate);
console.log("bulbcolor is "+bulbcolor);
function switch1 (){
  console.log("click is working");
  if(lightstate === "off") {
    setBulbcolor("black");
    var element1 = document.getElementById(Name);
    element1.style.backgroundColor = bulbcolor; 
    setLightsate("on");
  };
  if(lightstate === "on") {
        setBulbcolor("yellow");
        var element2 = document.getElementById(Name);
        element2.style.backgroundColor = bulbcolor;
        setLightsate("off");
      };
      
  };
  return (
      
    <>
    <div className="App">
      <header className="App-header">
        <h4>the light is {lightstate}</h4>
        <div className="bulb" id={Name}>
        </div>
        <br></br>
        <button onClick={switch1}>
          {lightstate}
          </button>
      </header>
    </div>
    </>
    
  );
  
  
};

export default LightApp;
