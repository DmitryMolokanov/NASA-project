import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import cls from './PlanetPage.module.scss'
import { IPlanetNames, planetInfo, } from '../../types/planets';
import TextInfoContainer from './components/textInfoContainer/TextInfoContainer';
import { planetNames } from './defaultValues/planetDefaultValues';
import Button from '../../components/Button/Button';
import videoMercury from '../../../public/assets/video/planets/Mercury.mp4'
import videoVenus from '../../../public/assets/video/planets/Venus.mp4'
import videoEarth from '../../../public/assets/video/planets/Earth.mp4'



const PlanetsPage = () => {

    const [info, setInfo] = useState<planetInfo[] | undefined>(undefined)
    const [selectedPlanet, setSelectedPlanet] = useState<IPlanetNames>('Earth')
    const [video, setVideo] = useState()


    const selectPlanet = (planet: IPlanetNames) => {
        setSelectedPlanet(planet)
    }

    const getPlanets = async (selectedPlanet: IPlanetNames) => {
        const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${selectedPlanet}`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'bnb/fUIldSm8RMWomggGeQ==dCl5VjoCZ3hxGwKi' }
        })
        const result = await response.json()
        setInfo(result)
    }

    useEffect(() => {
        getPlanets(selectedPlanet)
    }, [selectedPlanet])

    return (
        <div>
            <Header />
            <div className={cls.settingContainer}>
                {planetNames.map((planet: IPlanetNames) =>
                    <Button key={planet} onClick={() => selectPlanet(planet)}>{planet}</Button>
                )}
            </div>
            <div className={cls.planetMainContainer}>
                <div className={cls.planetInfoContainer}>
                    <TextInfoContainer info={info} />
                </div>
                <div className={cls.textVideoContainer}>
                    <video autoPlay loop src={video}>
                    </video>
                </div>
            </div>
        </div>
    )
};

export default PlanetsPage
