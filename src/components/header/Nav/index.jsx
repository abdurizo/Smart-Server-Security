import styles from './Nav.module.css';

import { useTranslation } from 'react-i18next';


import ArrowDown from '../../../assets/icons/ArrowDown';
import Bell from '../../../assets/icons/Bell';
import AdminIcon from '../../../assets/icons/Admin';

import Language from '../Language/Language';
import Calendar from '../Calendar';


function Nav() {
    const { t, i18n } = useTranslation();
    

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className={styles.wrap}>
            <Calendar/>
            <Bell/>
            <Language changeLanguage={changeLanguage} />
            <div className={styles.nav_content}>
                <AdminIcon />
                <span>Abduazim</span>
                <ArrowDown />
            </div>
        </div>
    )
}

export default Nav
