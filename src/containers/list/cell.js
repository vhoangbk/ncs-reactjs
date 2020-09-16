import React from 'react';
import '../../styles/cell.scss';

function Cell({onClick, image, name, id}){

  return(
    <div onClick={() => onClick(id)} className="list__cell">
      <img className="list__cell__image" src={image}/>
      <h5 className="list__cell__name">{name}</h5>
    </div>
  )
}

export default Cell;
