import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {getList} from "../../store/selectors";
import '../../styles/list.scss';
import Segment from './segment'
import Cell from './cell';
import { useHistory } from "react-router-dom";

function ListContainer() {

   let history = useHistory();
   const listData = useSelector(getList);
   const [data, setData] = useState(listData);

   const onChangeSegment = (value) => {
      console.log('onChangeSegment', value);
      if (value === 0) {
        setData(listData);
      }else{
        let dataFilter = listData.filter(e => e.group_mask === 1);
        setData(dataFilter);
      }
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
         {data.map( e => renderItem(e))}
       </ul>

     </div>
   )
}

export default ListContainer;
