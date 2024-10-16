import React from 'react'


interface ModalProps {
    children: React.ReactNode
    isShown: boolean
}

const Modal = ({ children, isShown }: ModalProps) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default Modal
