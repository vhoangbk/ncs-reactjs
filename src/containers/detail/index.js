import React from 'react';
import '../../styles/detail.scss';
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import {getData} from "../../store/selectors";

function DetailContainer() {


  let { id } = useParams();
  let data = useSelector(state => getData(state, id));
  console.log(data);

  return (
    <div className="detail">
      <h1 className="detail__title">Detail</h1>
      <p>{id}</p>
    </div>
  )
}
export default DetailContainer;
