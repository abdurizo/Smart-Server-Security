import styles from './Language.module.css';

import { useTranslation } from "react-i18next";

import FlagUz from '../../../assets/icons/FlagUz';
import FlagRu from '../../../assets/icons/FlagRu';
import Eng from '../../../assets/icons/Eng';
import Select from '../../LanguageSelect'

function Language() {
    const { i18n } = useTranslation();
    return (
        <div className={styles.wrap}>
            {
                i18n?.language === 'uz' ? <FlagUz /> :
                i18n?.language === 'en' ? <Eng /> : 
                i18n?.language === 'ru' ? <FlagRu /> : ''
            }
            <Select />
        </div>
    )
}

export default Language
