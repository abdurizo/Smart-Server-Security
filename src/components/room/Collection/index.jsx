import styles from './Collection.module.css';

import RoomCondition from '../RoomCondition';
import Door from '../Door';

function Collection() {
  return (
    <div className={styles.wrap}>
      <RoomCondition/>
      <Door/>
    </div>
  )
}

export default Collection
