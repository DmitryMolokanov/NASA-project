import React, { useState } from 'react'
import Logo from './Logo/Logo';
import cls from './Header.module.scss'
import Navbar from './Navbar/Navbar';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';


const Header = () => {

    return (
        <div className={cls.header}>
            <Logo />
            <div className={cls.menuContainer}>
                <Navbar />
                <LanguageSwitcher />
            </div>

        </div>
    )
};

export default Header
