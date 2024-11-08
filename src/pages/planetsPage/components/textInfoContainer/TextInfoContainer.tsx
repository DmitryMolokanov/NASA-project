import React from 'react'
import cls from './TextInfoContainer.module.scss'
import { planetInfo } from '../../../../types/planets';

interface TextInfoContainerProps {
    info: planetInfo[] | undefined
}

const TextInfoContainer = ({ info }: TextInfoContainerProps) => {
    return (
        <div className={cls.textInfoContainer}>{
            info && Object.keys(info[0]).map((item) =>
                <div key={item} className={cls.textInfoWrapper}>
                    <div className={cls.textInfoName}>
                        {item}
                    </div>
                    <div className={cls.textInfoValue}>
                        {info[0][item as keyof planetInfo]}
                    </div>
                </div>
            )}
        </div>
    )
};

export default TextInfoContainer
