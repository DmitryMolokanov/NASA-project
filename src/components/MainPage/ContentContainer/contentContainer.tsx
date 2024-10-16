import React, { useEffect, useState } from 'react'
import cls from './contentContainer.module.scss'
import Apod from '../APOD/Apod';
import Datepicker from '../../Datepicker/Datepicker';
import { convertedDate } from '../../utils/strings/convertedDate';
import { IApod } from '../../../types/apod';


const contentContainer = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [apodData, setApodData] = useState<IApod | null>(null)
    const [loading, setLoading] = useState(false)

    const apodFetch = async (date: Date) => {
        setLoading(true)
        const dateApi = convertedDate(date)
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${dateApi}&api_key=${process.env.REACT_APP_API_KEY}`)
        const result = await response.json()
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
