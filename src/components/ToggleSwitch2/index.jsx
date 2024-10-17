import React from 'react';

import styles from './ToggleSwitch.module.css'

function ToggleSwitch2({ isActive, handleToggle }) {
  return (
    <div className={`${styles.toggle_switch} ${isActive ? styles.on : styles.off}`} onClick={handleToggle}>
      <div className={styles.toggle_circle}></div>
    </div>
  )
}

export default ToggleSwitch2
