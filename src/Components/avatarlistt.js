import React, { useState } from "react";
import "../Avatar.css";
import "tachyons";
import Avatar from "./Avatar";
import data from "./data";

const Avatarlist = (props) => {
  const [name, setName] = useState("React Website");


  function handleClick () {
      setName ("MindBlowing App")
      console.log ( "clicked" )
  }

  const avatardata = data.map(item => {
    return (
      <Avatar className="card--style"
        id={item.id}
        item={item}
      />
    );
  });

  return (
    <div className="mainpage tc ">
      <h1>{name}</h1>
      <div className="avatarData">
      {avatardata}
      </div>
      <button  className= "button-style" onClick={handleClick}/>
    </div>
  );
};

export default Avatarlist;
