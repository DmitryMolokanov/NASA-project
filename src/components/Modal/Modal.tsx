import React from 'react'
import cls from "./Modal.module.scss"
import close from "../../../public/assets/img/close.png"


interface ModalProps {
    children: React.ReactNode
    isShown: boolean
    setIsShow: (el: boolean) => void
}

const Modal = ({ children, isShown, setIsShow }: ModalProps) => {



    if (!isShown) return null
    return (
        <div className={cls.modalContainer}>

            <div className={cls.buttonContainer}>
                <button className={cls.closeButton} onClick={() => setIsShow(false)}>
                    <img src={close} alt="close" />
                </button>
            </div>

            <div className={cls.childrenContainer}>
                {children}
            </div>
        </div>
    )
};

export default Modal
