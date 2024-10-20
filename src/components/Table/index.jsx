import styles from '../../styles/stylesCard.module.css';

import {useSearchParams } from 'react-router-dom';
import React, { useState, useEffect, } from 'react';
import axios from "axios";

// import mData from "../../Data.json";


import TableConstruction from './TableConstruction';
import Pagination from '../Pagination'

import User from '../../assets/icons/User';


function Table({ search }) {

    const [searchParams, setSearchParams] = useSearchParams()
    const [amountOfElements, setAmountOfElements] = useState(5);
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1) // текущая страница
    const [news, setNews] = useState({
        numPages: 0,
        results: [],
        count: 0
    }) // получаемая страница

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://aloqamuzeyi.uz/uz/api/exhibits/`, {
            params: {
                p: page,
                page_size: amountOfElements,
            }
        })
            .then(res => {
                // console.log(res)
                setNews({
                    numPages: res.data.num_pages,
                    results: res.data.results,
                    count: res.data.count
                })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amountOfElements, page])


    const handlePaginationChange = ({selected}) => {
        const newPage = selected + 1; // Приведение к 1-индексации
        setSearchParams({ page: newPage, count: amountOfElements });
        setPage(newPage);
    };

    const columns = [
        {
            Header: '#',
            accessor: (row, rowIndex) => rowIndex + 1,
        },
       
        {
            Header: 'Ism',
            accessor: (data) =>  data ?.['slug'],
            // onClick: () => navigate('/objects/:id')
        },
        
        {
            Header: 'Kuni',
            accessor: (data) => '12.02.2024',
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
                <TableConstruction columns={columns}  data={news.results}/>
                <Pagination   handlePaginationChange={handlePaginationChange} pageCount={news.numPages || 1} currentPage={page}  />    
            </div>
        </>
    )
}
export default Table;