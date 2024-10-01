import React, { useEffect, useState } from 'react';
import cls from './Apod.module.scss'

interface IApod {
    date: string
    explanation: string
    media_type: string
    service_version: string
    title: string
    url: string
}

const Apod = () => {

    const [apodData, setApodData] = useState<IApod | null>(null)

    useEffect(() => {
        const apodFetch = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?date=2024-09-05&api_key=${process.env.REACT_APP_API_KEY}`)
            const result = await response.json()
            setApodData(result)
        }
        apodFetch()
    }, [])

    return (
        <div className={cls.apodContainer}>
            <div className={cls.title}>
                <h1>Astronomy Picture of the Day</h1>
            </div>
            <div className={cls.explanation}>
                <span>{apodData?.explanation}</span>
            </div>
            {apodData?.media_type === 'video'
                ? <iframe className={cls.iframe} src={apodData?.url} />
                : <img src={apodData?.url} alt='Astronomy Picture of the Day' />}
        </div>
    )
};

export default Apod
