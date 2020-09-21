import React, {useEffect} from 'react';
import '../../styles/detail.scss';
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import {getData} from "../../store/selectors";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';

function DetailContainer() {

  let { id } = useParams();
  let data = useSelector(state => getData(state, id));

  let technicals = data.data[2].description.split(',');

  SwiperCore.use([Autoplay]);

  return (
    <div className="detail">
      <img className="detail__clientlogo" src={data.clientLogo}/>
      <img className="detail__nitecologo" src={data.nitecoLogo}/>
      <Swiper
        className="detail__swiper"
        spaceBetween={0}
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        direction="vertical"
      >
        <SwiperSlide>
          <img className="detail__brief-image" src={data.data[0].image} />
          <p className="detail__brief-name">THE BRIEF</p>
          <p className="detail__brief-description " dangerouslySetInnerHTML={{__html: data.data[0].description}} />
        </SwiperSlide>

        <SwiperSlide>
          <p className="detail__solution-name">THE SOLUTION</p>
          <p className="detail__solution-description" dangerouslySetInnerHTML={{__html: data.data[1].description}} />
          <img className="detail__solution-image" src={data.data[1].image} />
        </SwiperSlide>

        <SwiperSlide className="detail__technical">
          <div className="detail__technical__image-container">
            <img className="detail__technical-image" src={data.data[2].image}/>
          </div>
          <div className="detail__technical__content">
            <p className="detail__solution-name">TECHNICAL DETAIL</p>
            <ul>
              {technicals.map(e => <li className="detail__technical-item" dangerouslySetInnerHTML={{__html: e}} />)}
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}
export default DetailContainer;
