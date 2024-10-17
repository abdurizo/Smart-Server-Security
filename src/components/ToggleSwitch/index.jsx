import React, { useState } from 'react';

import styles from './ToggleSwitch.module.css'

function ToggleSwitch({ toggleSwitch }) {
  const [isOn, setIsOn] = useState(true);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`${styles.toggle_switch} ${isOn ? styles.on : styles.off}`} onClick={handleToggle}>
      <div className={styles.toggle_circle}></div>
    </div>
  )
}

export default ToggleSwitch
