import React from 'react';
import {useSelector} from "react-redux";
import {getList} from "../../store/selectors";

function ListContainer() {

   const list = useSelector(getList);

   return (
     <div>
        <p>{JSON.stringify(list)}</p>
     </div>
   )
}

export default ListContainer;
