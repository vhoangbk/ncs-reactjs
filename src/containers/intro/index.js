import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchDataSagaAction, fetchListSagaAction} from "../../store/actions";

function IntroContainer() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchListSagaAction());
    dispatch(fetchDataSagaAction());
  }, []);

  return (
    <div>
      <h1>Intro</h1>
    </div>
  );
}

export default IntroContainer;
