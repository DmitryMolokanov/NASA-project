import React, { FC, useState } from 'react'
import cls from './SettingsMars.module.scss'
import Button from '../../../../components/Button/Button';

interface SettingsMarsProps {
    totalSolCount: number
    setSol: (el: number) => void
    setRoverName: (el: string) => void
}


const SettingsMars: FC<SettingsMarsProps> = ({ totalSolCount, setSol, setRoverName }) => {

    const [solValue, setSolValue] = useState<number | ''>('')
    const [error, setError] = useState<string>('')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9]+$/gm
        const value = e.target.value
        if (!regex.test((value))) {
            setError('the value can only contain numbers')
        } else setError('')
        if (+value > totalSolCount) {
            e.target.value = String(totalSolCount)
            setSolValue(totalSolCount)
        } else setSolValue(+value)
    }

    const saveSol = () => {
        if (solValue && !error) {
            setSol(solValue)
            setSolValue('')
        }
    }


    return (
        <div className={cls.settingsContainer}>
            <div className={cls.setSolContainer}>
                <label className={cls.solInputLabel}>{`Please set date from 0 to ${totalSolCount}`}</label>
                <div className={cls.solInputContainer}>
                    <input type="text" className={cls.solInput} onChange={(e) => { handleChange(e) }} />
                    <Button className={cls.solInputBtn} onClick={saveSol}>Set</Button>
                </div>
                <div className={cls.errContainer}>
                    {error && <span className={cls.errValue}>{error}</span>}
                </div>
            </div>
            <div>
                <div className={cls.setSolContainer}>
                    <label className={cls.solInputLabel}>Select rover</label>
                    <select className={cls.roverSelect} onChange={(e) => setRoverName(e.target.value)}>
                        <option value="curiosity">Curiosity</option>
                        <option value="perseverance">Perseverance</option>
                    </select>
                </div>
                <div className={cls.errContainer}>
                    {error && <span className={cls.errValue}>{error}</span>}
                </div>
            </div>

        </div>
    )
};

export default SettingsMars
