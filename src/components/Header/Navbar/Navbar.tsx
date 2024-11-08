import React from 'react'
import cls from './Navbar.module.scss'
import AppLink from '../../Link/AppLink';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation()
    return (
        <div className={cls.navbar}>
            <AppLink to={'/main_page'} ClassName={cls.link}>{t("Main page")}</AppLink>
            <AppLink to={'/mars_page'} ClassName={cls.link}>{t("Mars")}</AppLink>
            <AppLink to={'/planet_page'} ClassName={cls.link}>{t("Planets")}</AppLink>
        </div>
    )
};

export default Navbar
