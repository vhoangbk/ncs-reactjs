import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchDataSagaAction, fetchListSagaAction} from "../../store/actions";
import '../../styles/intro.scss';
import { useHistory } from "react-router-dom";

function IntroContainer() {

  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(()=>{
    dispatch(fetchListSagaAction());
    dispatch(fetchDataSagaAction());
  }, []);

  const onPressPlus = () => {
    history.push("/list")
  };

  return (
    <div className="intro">
      <img className="intro__logo" src='/images/niteco-logo.png'/>
      <h1 className="intro__title">Transforming Digital into Business Solutions</h1>
      <div className="intro__line"></div>
      <p className="intro__subtitle">
        We merge technical depth and business strategy to tailor-make digital products that turn
        innovation into your growth and profit.
      </p>
      <div className="intro__brand">
        <img className="intro__plus" src='/images/logo-epi-w.png'/>
        <img className="intro__plus" src='/images/logo-ms-w.png'/>
        <img className="intro__plus" src='/images/logo-sitecore-w.png'/>
      </div>
      <p className="intro__ourwork">TAP TO SEE OUR WORK</p>
      <img onClick={onPressPlus} className="intro__plus" src='/images/fa-plus.png'/>
    </div>
  );
}

export default IntroContainer;
