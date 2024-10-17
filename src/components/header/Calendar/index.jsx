import { useState, useEffect, useRef } from 'react'

import styles from './Calendar.module.css';

import CalendarIcon from '../../../assets/icons/Calendar';
import ArrowDown from '../../../assets/icons/ArrowDown';

import DropDown from '../DropDown';

function Calendar() {
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      setIsOpen(true); // Открываем Dropdown только если он закрыт
    }
  };


  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      // Если клик вне Calendar компонента - закрываем Dropdown
      setIsOpen(false);
    }
  };

 

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    // Очищаем event listener при размонтировании
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);


  return (
    <div className={styles.nav_content} ref={calendarRef} onClick={toggleDropdown}>
      <CalendarIcon />
      <span>2024 Fevral</span>
      <ArrowDown />
      
      <DropDown isOpen={isOpen} />
      {/* {showAirHumidity && <AirHumidity />} Отображаем AirHumidity в зависимости от состояния */}
    </div>
  )
}

export default Calendar
