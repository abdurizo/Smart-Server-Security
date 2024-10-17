
import { useTable } from 'react-table';
import classN from 'classnames';
import styles from './TableConstruction.module.css';


const TableConstrucrion = ({ columns, data, loading }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        
            <table {...getTableProps()} className={classN(styles.table)}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr
                                {...headerGroup.getHeaderGroupProps()}
                                className={classN(styles.columns, styles.colums_title)}
                            >
                                {
                                    headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps()}
                                            style={{ ...column.style }}
                                        >
                                            {column.render('Header')}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody
                    {...getTableBodyProps()}

                >
                    {
                        loading ?
                            <tr>
                                <td colSpan={columns.length}>
                                    <div>
                                        Yuklanmoqda...
                                </div>
                                </td>
                            </tr> :
                            <>
                                {
                                    data && data.length ?
                                        <>
                                            {
                                                rows.map(
                                                    (row) => {
                                                        prepareRow(row);
                                                        return (
                                                            <tr {...row.getRowProps()}
                                                                className={classN(styles.columns, styles.colums_sub_title)}>
                                                                {row.cells.map(cell => {
                                                                    return (
                                                                        <td
                                                                            {...cell.getCellProps([])}
                                                                            style={{ ...cell.column.style }}
                                                                            onClick={cell.column.onClick}
                                                                        >
                                                                            {cell.render('Cell')}
                                                                        </td>
                                                                    )
                                                                })}
                                                            </tr>
                                                        );
                                                    }
                                                )
                                            }
                                        </> :
                                        <tr>
                                            <td colSpan={columns.length}>
                                                <div className=''>
                                                    Maʼlumot yo‘q
                                            </div>
                                            </td>
                                        </tr>
                                }
                            </>
                    }
                </tbody>
            </table>
       
    )
}

export default TableConstrucrion
