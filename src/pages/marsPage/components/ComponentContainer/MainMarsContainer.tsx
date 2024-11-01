import React, { useEffect, useState } from 'react'
import cls from './MainMarsContainer.module.scss'
import { IMarsPhoto } from "../../../../types/mars"


interface MainMarsContainerProps {
    marsPhoto: IMarsPhoto[]
}

const MainMarsContainer = ({ marsPhoto }: MainMarsContainerProps) => {

    return (
        <div>
            <div className={cls.photoContainer}>

                {marsPhoto.map((item) => {
                    return <div className={cls.photo} key={item.id}>
                        <img src={item.img_src} alt="mars_img" />
                    </div>
                })}

            </div>
        </div >
    )
};

export default MainMarsContainer
