import React, { useEffect, useState } from 'react'
import cls from './LanguageSwitcher.module.scss'
import usaFlag from '../../../../public/assets/img/flags/us.png'
import rusFlag from '../../../../public/assets/img/flags/ru.png'
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {

    const [selectLanguage, setSelectLanguage] = useState<'ru' | 'en'>('en')
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        setSelectLanguage(selectLanguage === 'en' ? 'ru' : 'en')
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    useEffect(() => {
        const lang = localStorage.getItem("i18nextLng")
        if (lang === 'ru' || lang === 'en') {
            setSelectLanguage(lang)
        }
    }, [])

    return (
        <div className={cls.container}>
            <div className={cls.languageSelect}>
                <div className={cls.flagContainer}>
                    <img src={usaFlag} alt="us" />
                </div>
                <div className={cls.flagContainer}>
                    <img src={rusFlag} alt="ru" />
                </div>
                <div onClick={toggleLanguage} className={selectLanguage === 'en' ? cls.sliderRight : cls.sliderLeft}></div>
            </div>

        </div>
    )
};

export default LanguageSwitcher
