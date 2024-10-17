import styles from '../../styles/stylesCard.module.css';
import React, { useMemo } from 'react';
import mData from "../../Data.json";

import TableConstruction from './TableConstruction';
import User from '../../assets/icons/User'


function Table({ search }) {
    const data = useMemo(() => mData, [])
    // const navigate = useNavigate()
    const columns = [
        {
            Header: '#',
            accessor: (data) => data.id,
        },
       
        {
            Header: 'Ism',
            accessor: (data) => data.first_name,
            // onClick: () => navigate('/objects/:id')
        },
        
        {
            Header: 'Obyekt turi',
            accessor: (data) => data.object_type,
            // onClick: () => navigate('/objects/:id')
        },
        
        {
            Header: 'Kuni',
            accessor: (data) => "18.10.2023",
            // onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Kirish vaqti',
            accessor: (data) => "2023-2024 yy.",
            // onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Chiqish vaqti',
            accessor: (data) => "2023-2024 yy.",
            // onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Oraliq vaqti',
            accessor: (data) => "2023-2024 yy.",
            // onClick: () => navigate('/objects/:id')
        },
        
       
    ]

    return (
        <>
            <div className={styles.card}>
                <div className={styles.chart_header}>
                    <div className={styles.chart_content}>
                        <h2 className={styles.title}>Xonaga kirganlar </h2>
                        <h3 className={styles.subtitle}>15.06.2024  / 14:00</h3>
                    </div>
                    <div><User /></div>
                </div>
                <TableConstruction columns={columns} data={data} />
            </div>
            
        </>
    )
}
export default Table;