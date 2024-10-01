import React, { useEffect, useState } from 'react'
import cls from './Logo.module.scss'
import AppLink from '../../Link/AppLink';
import logo from '../../../../public/assets/img/logo.png'
import logoColor from '../../../../public/assets/img/logo-color.png'

const Logo = () => {
    const [colorLogo, setColorLogo] = useState(false)

    return (
        <div className={cls.logo}
            onMouseOver={() => setColorLogo(true)}
            onMouseLeave={() => { setColorLogo(false) }}>

            <AppLink to={'/main_page'} ClassName={cls.linkContainer}>
                <img className={cls.logoImg} src={colorLogo ? logoColor : logo} alt="logo" />
            </AppLink>

        </div>
    )
};

export default Logo
