import styles from './Header.module.css';

import Nav from '../Nav';
import Guard from '../../../assets/icons/guard.png';

function Header() {
  return (
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <div className={styles.image}><img src={Guard} alt="logo" /></div>
        <h1 className={styles.logo_text}>
          Server <span>Smart</span> Security
        </h1>
      </div>
      <Nav/>
    </div>
  )
}

export default Header
