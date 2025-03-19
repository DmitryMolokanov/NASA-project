import React, { FC, ReactNode } from "react";
import { IPlanetNames } from "../../../../types/planets";

interface PlanetContainerProps {
  orbitClassName: string;
  planetClassName: string;
  img: string;
  setSelectPlanet: (el: IPlanetNames) => void;
  planetName: IPlanetNames;
  children: ReactNode;
}

const PlanetContainer: FC<PlanetContainerProps> = (props) => {
  const {
    orbitClassName,
    planetClassName,
    img,
    setSelectPlanet,
    planetName,
    children,
  } = props;

  return (
    <div className={orbitClassName}>
      <div
        role="button"
        className={planetClassName}
        onClick={() => setSelectPlanet(planetName)}
      >
        <img src={img} alt="mercury" />
      </div>
      {children}
    </div>
  );
};

export default PlanetContainer;
