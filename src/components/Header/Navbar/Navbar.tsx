import React from 'react'
import cls from './Navbar.module.scss'
import AppLink from '../../Link/AppLink';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation()
    return (
        <div className={cls.navbar}>
            <AppLink to={'/main_page'} ClassName={cls.link}>{t("Main page")}</AppLink>
            <AppLink to={'#'} ClassName={cls.link}>{t("About")}</AppLink>
        </div>
    )
};

export default Navbar
