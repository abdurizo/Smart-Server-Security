
import ReactPaginate from 'react-paginate';


import Previous from '../../assets/icons/ArrowLeft.jsx';
import Next from '../../assets/icons/ArrowRight.jsx';

import styles from "./Pagination.module.css";


const options = [
    {
        value: '5',
        label: '5'
    },
    {
        value: '10',
        label: '10'
    },
    {
        value: '20',
        label: '20'
    },
]

// const DropdownIndicator = (props) => {
//     return (
//         <components.DropdownIndicator {...props}>
//             <ArrowDown />
//         </components.DropdownIndicator>
//     );
// }

function Pagination({handlePaginationChange, pageCount, currentPage}) {
    return (
        <div className={styles.wrap}>
                <ReactPaginate
                    containerClassName={styles.paginate_item}
                    pageClassName={styles.page}
                    previousClassName={styles.transition}
                    nextClassName={styles.transition}
                    activeClassName={styles.page_active}
                    breakLabel="..."
                    nextLabel={<Next/>}
                    previousLabel={<Previous/>}
                    onPageChange={handlePaginationChange}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}    
                    initialPage={
                        currentPage - 1
                    }

                />
            </div>
    );
}

export default Pagination;