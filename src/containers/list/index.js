import React from 'react';
import {useSelector} from "react-redux";
import {getList} from "../../store/selectors";
import '../../styles/list.scss';
import Segment from './segment'
import Cell from './cell';
import { useHistory } from "react-router-dom";

function ListContainer() {

   let history = useHistory();
   const listData = useSelector(getList);

   const onChangeSegment = (value) => {
      console.log('onChangeSegment', value);
   };

   const onCellClick = (id) => {
      history.push(`/detail/${id}`)
   };

   const renderItem = (item) => {
     return(
       <li key={item.id} className="list__grid_item">
         <Cell onClick={onCellClick} image={item.img} name={item.name} id={item.id}/>
       </li>
     )
   };

   return (
     <div className="list">
       <Segment onChangeValue={onChangeSegment}/>
       <ul className="list__grid">
         {listData.map( e => renderItem(e))}
       </ul>

     </div>
   )
}

export default ListContainer;
