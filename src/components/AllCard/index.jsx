import styles from './AllCarts.module.css';

import ElectricChart from '../charts/ElectricChart';
import AirHumidity from '../charts/AirHumidity';
import Temperature from '../charts/Temperature';
import NoLiquid from '../charts/NoLiquid/';
import Table from '../Table';
import Collection from '../room/Collection';
import useLocalStorage from 'use-local-storage';

function AllCharts() {
  const [filters] = useLocalStorage("filters");

  const currentFilters = filters ? JSON.parse(filters) : {}
  return (
    <div className={styles.wrapper}>
      {currentFilters?.filter1 && <ElectricChart />}
      {currentFilters?.filter2 && <AirHumidity />}
      {currentFilters?.filter6 && <Collection />}
      {currentFilters?.filter3 && <Temperature />}
      {currentFilters?.filter4 && <NoLiquid />}
      {currentFilters?.filter5 && <Table />}
      
    </div>
  )
}

export default AllCharts
