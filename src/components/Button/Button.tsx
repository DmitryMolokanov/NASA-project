import React, { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, ...otherProps } = props
    return (
        <button className={`${cls.button} ${className}`}
            {...otherProps}
        >
            {children}
        </button >
    )
};

export default Button
