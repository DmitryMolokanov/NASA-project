import React, { FC } from 'react'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    ClassName?: string
    to: string
}

const AppLink: FC<AppLinkProps> = (props) => {
    const { ClassName, to, children, ...otherProps } = props
    return (
        <Link to={to} className={`${cls.appLink} ${ClassName}`}
            {...otherProps}
        >
            {children}
        </Link >
    )
};

export default AppLink
