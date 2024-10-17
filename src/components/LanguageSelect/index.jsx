import Select, { components } from 'react-select';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

import ArrowDown from '../../assets/icons/ArrowDown';

// import Select from 'react-select';
// import './LanguageSelect.sass'




const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            {<ArrowDown/>}
        </components.DropdownIndicator>
    );
}

function Language({ changeLanguage }) {
    const { t, i18n } = useTranslation();
    const options = [
        {
            value: 'uz',
            label: t('O‘zbek')
        },
        {
            value: 'en',
            label: t('English')
        },
        {
            value: 'ru',
            label: t('Русский')
        }
    ]
    
    const [currentLanguge, setLanguage] = useState(i18n.language || "uz");

    const getValue = () => {
        return currentLanguge ? options.find(c => c.value === currentLanguge) : ''
    }

    const langSelect = (newValue) => {
        setLanguage(newValue.value);
        // Меняем язык через i18n
        i18n.changeLanguage(newValue.value);
        if (changeLanguage) {
            changeLanguage(newValue.value);
        }
    };

    return (
        <Select
            classNamePrefix="custom-select"
            options={options}
            value={getValue()}
            onChange={langSelect}
            isSearchable={false}
            components={{
                DropdownIndicator
            }}
            // placeholder="ffff"
            styles={{
                control: (base) => ({
                    ...base,
                    border: "none",
                    boxShadow: "none",
                    fontSize: '2rem',
                    fontFamily: "NunitoSans_10pt_SemiCondensed-Bold",
                    color: '#929DB2',
                    cursor: 'pointer',
                    background: "none",
                    margin:" 0 1rem 0 2rem"
                }),
                valueContainer: (base) => ({
                    ...base,
                    padding: 0,
                }),
                singleValue: (base) => ({
                    ...base,
                    color: '#fff',
                }),
                indicatorSeparator: (base) => ({
                    ...base,
                    display: 'none',
                }),
                dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                }),
                menu: (base) => ({
                    ...base,
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: '#181818',
                    marginTop: 0,
                    fontFamily: "NunitoSans_10pt_SemiCondensed-Bold",
                    padding: '0 5px',
                    // background: "none",
                }),
                option: (base, state) => ({
                    ...base,
                    padding: '0',
                    fontSize: '1.4rem',
                    fontFamily: "NunitoSans_10pt_SemiCondensed-Bold",
                })
            }}
        />
    );
}

export default Language;
