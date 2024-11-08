import React, { FC } from 'react'
import "react-datepicker/dist/react-datepicker.module.css"
import cls from './Datepicker.module.scss'
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';

interface DatepickerProps {
    startDate: Date
    setStartDate: (el: Date) => void
}

const Datepicker: FC<DatepickerProps> = ({ startDate, setStartDate }) => {

    const { t } = useTranslation()

    const convertDate = (date: Date) => {
        setStartDate(date)
    }

    return (
        <div className={cls.mainContainer}>
            <div className={cls.title}>{t('You can choose other dates and get new images.')}</div>
            <DatePicker
                selected={startDate}
                onChange={(date: any) => convertDate(date)}
                className={cls.input}
                dateFormat={'dd/MM/yyyy'}
                calendarClassName={cls.weeks}
                dayClassName={(date) => { if (date < new Date()) { return cls.days } }}
                maxDate={new Date()}
            />
        </div>
    )
};

export default Datepicker
