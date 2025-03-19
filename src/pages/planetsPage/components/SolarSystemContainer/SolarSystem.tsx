import React, { useEffect, useState } from "react";
import cls from "./SolarSystem.module.scss";
import sun from "../../../../../public/assets/img/solarSystemImg/sun.png";
import mercury from "../../../../../public/assets/img/solarSystemImg/mercury.png";
import venus from "../../../../../public/assets/img/solarSystemImg/venus.png";
import earth from "../../../../../public/assets/img/solarSystemImg/earth.png";
import mars from "../../../../../public/assets/img/solarSystemImg/mars.png";
import jupiter from "../../../../../public/assets/img/solarSystemImg/jupiter.png";
import saturn from "../../../../../public/assets/img/solarSystemImg/saturn.png";
import uranus from "../../../../../public/assets/img/solarSystemImg/uranus.png";
import neptune from "../../../../../public/assets/img/solarSystemImg/neptune.png";
import PlanetContainer from "./PlanetContainer";
import { IPlanetNames } from "../../../../types/planets";

interface SolarSystemProps {
  selectPlanet: (el: IPlanetNames) => void;
}

const SolarSystem = ({ selectPlanet }: SolarSystemProps) => {
  const [selectedPlanet, setSelectPlanet] = useState<IPlanetNames>("Earth");

  useEffect(() => {
    selectPlanet(selectedPlanet);
  }, [selectedPlanet]);

  return (
    <div className={cls.componentContainer}>
      <PlanetContainer
        orbitClassName={cls.neptuneOrbit}
        planetClassName={cls.neptuneContainer}
        setSelectPlanet={setSelectPlanet}
        planetName="Neptune"
        img={neptune}
      >
        <PlanetContainer
          orbitClassName={cls.uranusOrbit}
          planetClassName={cls.uranusContainer}
          setSelectPlanet={setSelectPlanet}
          planetName="Uranus"
          img={uranus}
        >
          <PlanetContainer
            orbitClassName={cls.saturnOrbit}
            planetClassName={cls.saturnContainer}
            setSelectPlanet={setSelectPlanet}
            planetName="Saturn"
            img={saturn}
          >
            <PlanetContainer
              orbitClassName={cls.jupiterOrbit}
              planetClassName={cls.jupiterContainer}
              setSelectPlanet={setSelectPlanet}
              planetName="Jupiter"
              img={jupiter}
            >
              <PlanetContainer
                orbitClassName={cls.marsOrbit}
                planetClassName={cls.marsContainer}
                setSelectPlanet={setSelectPlanet}
                planetName="Mars"
                img={mars}
              >
                <PlanetContainer
                  orbitClassName={cls.earthOrbit}
                  planetClassName={cls.earthContainer}
                  setSelectPlanet={setSelectPlanet}
                  planetName="Earth"
                  img={earth}
                >
                  <PlanetContainer
                    orbitClassName={cls.venusOrbit}
                    planetClassName={cls.venusContainer}
                    setSelectPlanet={setSelectPlanet}
                    planetName="Venus"
                    img={venus}
                  >
                    <PlanetContainer
                      orbitClassName={cls.mercuryOrbit}
                      planetClassName={cls.mercuryContainer}
                      setSelectPlanet={setSelectPlanet}
                      planetName="Mercury"
                      img={mercury}
                    >
                      <div className={cls.sunContainer}>
                        <img src={sun} alt="sun" />
                      </div>
                    </PlanetContainer>
                  </PlanetContainer>
                </PlanetContainer>
              </PlanetContainer>
            </PlanetContainer>
          </PlanetContainer>
        </PlanetContainer>
      </PlanetContainer>
    </div>
  );
};

export default SolarSystem;
