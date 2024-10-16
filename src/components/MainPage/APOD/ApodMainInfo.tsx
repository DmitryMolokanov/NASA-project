import React, { useState } from 'react'
import cls from './Apod.module.scss'
import { IApod } from '../../../types/apod';
import zoom from '../../../../public/assets/img/zoom.png'
import Button from '../../Button/Button';


interface ApodMainInfoProps {
    apodData: IApod
}


const ApodMainInfo = ({ apodData }: ApodMainInfoProps) => {

    const [zoomImg, setZoomImg] = useState(false)

    const handleZoom = () => {
        setZoomImg(prev => !prev)
    }

    return (
        <div className={cls.apodContainer}>
            <div className={cls.explanation}>
                <span>{apodData?.explanation}</span>
            </div>
            <div className={cls.urlContainer}>

                {apodData?.media_type !== 'video'
                    ? <Button className={cls.zoomImg} onClick={handleZoom}>
                        <img src={zoom} alt="telescope" />
                    </Button>
                    : null}

                {apodData?.media_type === 'video'
                    ? <iframe className={cls.iframe} src={apodData?.url} />
                    : <div className={cls.imgContainer}>
                        <img src={apodData?.url} alt='Astronomy Picture of the Day' />
                    </div>}
            </div>
        </div>
    )
};

export default ApodMainInfo
