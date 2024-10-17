import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';

import styles from '../../../styles/stylesCard.module.css';
import stylesDorr from './Door.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import ArrowRight from '../../../assets/icons/ArrowRight';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import Check from '../../../assets/icons/Check';
import DoorIcon from '../../../assets/icons/Door';
import DoorSmall from '../../../assets/icons/DoorSmall';
import Window from '../../../assets/icons/Window';
import WindowSmall from '../../../assets/icons/WindowSmall';

function Door() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={stylesDorr.wrap}>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={30}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}      
        className="mySwiper2"
      >
        <SwiperSlide>
          {/* <div className={styles.card}> */}
            <div className={styles.chart_header}>
              <div className={styles.chart_content}>
                <h2 className={styles.title}>Xonada eshik <span>yopiq</span> </h2>
                <h3 className={styles.subtitle}>15.06.2024  / 14:00</h3>
              </div>
              <div><Check/></div>
            </div>
            <div className={stylesDorr.door_wrap}><DoorIcon /></div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className={styles.card}> */}
            <div className={styles.chart_header}>
              <div className={styles.chart_content}>
                <h2 className={styles.title}>Xonada oyna <span>yopiq</span> </h2>
                <h3 className={styles.subtitle}>15.06.2024  / 14:00</h3>
              </div>
              <div><Check /></div>
            </div>
            <div className={stylesDorr.door_wrap}><Window /></div>
          {/* </div> */}
        </SwiperSlide>

        <div className='next arrow'><ArrowRight /></div>
        <div className='prev arrow'><ArrowLeft /></div>
      </Swiper>
     <Swiper
        onSwiper={setThumbsSwiper}
        // spaceBetween={0}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
     >
        <SwiperSlide>
          <div className={stylesDorr.door_wrap}><DoorSmall /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stylesDorr.door_wrap}><WindowSmall /></div>
        </SwiperSlide>
     </Swiper>
    </div>
  )
}

export default Door
