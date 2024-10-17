import React, { useEffect, useState } from 'react';

import styles from './DropDown.module.css';

import ToggleSwitch from '../../ToggleSwitch'
import useLocalStorage from 'use-local-storage';
import ToggleSwitch2 from '../../ToggleSwitch2';


function DropDown({ isOpen, toggleSwitch }) {
  const [filters, setFilters] = useLocalStorage("filters");
  const activeFilters = filters ? JSON.parse(filters) : ''

  useEffect(() => { 
      if(!filters){
        setFilters(JSON.stringify({
          filter1: true,
          filter2: true,
          filter3: true,
          filter4: true,
          filter5: true,
          filter6: true,
        }))
      }
  }, [])

  const handleFilter = (filterName) => {
    const currentFilters = JSON.parse(filters)
    setFilters(JSON.stringify({
      ...currentFilters,
      [filterName]: !currentFilters[filterName]
    }))
  }

  if(!filters){
    return null
  }

  return (
    <div className={isOpen ? styles.drop_open : styles.drop_close}>

      <ul className={styles.list}>
        <li>
          <span>Elektr quvvati</span>
          <ToggleSwitch2 isActive={activeFilters['filter1']} handleToggle={() => handleFilter('filter1')} />
        </li>
        <li>
          <span>Havo namlilik</span>
          <ToggleSwitch2 isActive={activeFilters['filter2']} handleToggle={() => handleFilter('filter2')} />

        </li>
        <li>
          <span>Xona holati</span>
          <ToggleSwitch2 isActive={activeFilters['filter3']} handleToggle={() => handleFilter('filter3')} />

        </li>
        <li>
          <span>Suyuqlik</span>
          <ToggleSwitch2 isActive={activeFilters['filter4']} handleToggle={() => handleFilter('filter4')} />

        </li>
        <li>
          <span>Harorat</span>
          <ToggleSwitch2 isActive={activeFilters['filter5']} handleToggle={() => handleFilter('filter5')} />

        </li>
        <li>
          <span>Xonaga kirganlar</span>
          <ToggleSwitch2 isActive={activeFilters['filter6']} handleToggle={() => handleFilter('filter6')} />
        </li>
      </ul>
    </div>
  )
}

export default DropDown
