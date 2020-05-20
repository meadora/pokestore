import React from "react";
import AddIcon from "@material-ui/icons/Add";

function Card(props) {

  return (
    <div className="card">
      <div className="top">
        <h4 className="name">{props.name}<button><AddIcon/></button></h4>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">Preço: {props.price}</p>
      </div>
    </div>
  );
}

export default Card;