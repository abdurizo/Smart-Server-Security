
import styles from './RoomCondition.module.css';

import Check from '../../../assets/icons/Check';
import ExclamationMark from '../../../assets/icons/ExclamationMark';
import SemicircleGreen from '../../../assets/icons/SemicircleGreen';
import SemicircleRed from '../../../assets/icons/SemicircleRed';
import Home from '../../../assets/icons/Home';
import Fire from '../../../assets/icons/Fire';
import Smoke from '../../../assets/icons/Smoke';

function RoomCondition() {

  return (
    <>
      <div className='card'>
        <div className='chart_header'>
          <div className='chart_content'>
            <h2 className='title'>Xonada eshik <span>yopiq</span> </h2>
            <h3 className='subtitle'>15.06.2024  / 14:00</h3>
          </div>
          <div>
            <Check />
            {/* <ExclamationMark/> */}
          </div>
        </div>
        <div className={styles.wrap_condition}>
          <SemicircleGreen />
          {/* <SemicircleRed/> */}
          <Home className={styles.home}/>
          {/* <Fire className={stylesR.home}/> */}
          {/* <Smoke className={stylesR.smoke} /> */}
          <h4>Xonada hech qanday holat kuzatilmadi</h4>
        </div>
      </div>
    </>
  )
}

export default RoomCondition
