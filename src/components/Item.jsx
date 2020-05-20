import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Item(props) {

    function handleClick() {
        props.onDelete(props.id);
      }

  return (
    <div className="item">
        <h4 className="nameitem">{props.name}<button onClick={handleClick}><DeleteIcon /></button></h4>
        <img className="imgitem" src={props.img} alt="avatar_img" />
        <p className="infoitem">Preço: {props.price}</p>
    </div>
  );
}

export default Item;