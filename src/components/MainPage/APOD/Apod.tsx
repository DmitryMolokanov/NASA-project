import React from 'react';
import cls from './Apod.module.scss'
import { IApod } from '../../../types/apod';
import loader from '../../../../public/assets/img/loader.gif'
import ApodMainInfo from './ApodMainInfo';


interface ApodProps {
    apodData: IApod
    loading: boolean
}

const Apod = ({ apodData, loading }: ApodProps) => {

    return (
        <div className={cls.apodContainer}>
            <div className={cls.title}>
                <h1>Astronomy Picture of the Day</h1>
            </div>

            {loading
                ? <img src={loader} alt='loading...' />
                : <ApodMainInfo apodData={apodData} />}


        </div>
    )
};

export default Apod
