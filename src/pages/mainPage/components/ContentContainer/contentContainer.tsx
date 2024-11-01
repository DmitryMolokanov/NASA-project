import React, { useEffect, useState } from 'react'
import cls from './contentContainer.module.scss'
import Apod from '../APOD/Apod';
import Datepicker from '../../../../components/Datepicker/Datepicker';
import { IApod } from '../../../../types/apod';
import { dalyPhoto } from '../../../../api/dalyPhoto';


const contentContainer = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [apodData, setApodData] = useState<IApod | null>(null)
    const [loading, setLoading] = useState(false)

    const apodFetch = async (date: Date) => {
        setLoading(true)
        const result = await dalyPhoto(date)
        setLoading(false)
        setApodData(result)
    }

    useEffect(() => {
        apodFetch(startDate)
    }, [startDate])



    return (
        <div className={cls.contentContainer}>
            <Apod apodData={apodData} loading={loading} />
            <Datepicker startDate={startDate} setStartDate={setStartDate} />
        </div>
    )
};

export default contentContainer
