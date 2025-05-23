import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import cls from "./PlanetPage.module.scss";
import { IPlanetNames } from "../../types/planets";
import SolarSystem from "./components/SolarSystemContainer/SolarSystem";
import videoMercury from "./video/planets/Mercury.mp4";
import videoVenus from "./video/planets/Venus.mp4";
import videoEarth from "./video/planets/Earth.mp4";
import videoMars from "./video/planets/Mars.mp4";
import videoJupiter from "./video/planets/Jupiter.mp4";
import videoSaturn from "./video/planets/Saturn.mp4";
import videoUranus from "./video/planets/Uranus.mp4";
import videoNeptune from "./video/planets/Neptune.mp4";
import { PlanetInfo } from "../../types/planetInfo";
import InfoContainer from "./components/InfoCintainer/InfoContainer";

const videoPath: any = {
  Mercury: videoMercury,
  Venus: videoVenus,
  Earth: videoEarth,
  Mars: videoMars,
  Jupiter: videoJupiter,
  Saturn: videoSaturn,
  Uranus: videoUranus,
  Neptune: videoNeptune,
};

const PlanetsPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<IPlanetNames>("Earth");
  const [video, setVideo] = useState(videoEarth);
  const [info, setInfo] = useState<PlanetInfo[]>();
  const [infoLoader, setInfoLoader] = useState(false);

  const selectPlanet = (planet: IPlanetNames) => {
    const newVideo = videoPath[planet];
    setVideo(newVideo);
    setSelectedPlanet(planet);
  };

  const getPlanets = async (selectedPlanet: IPlanetNames) => {
    setInfoLoader(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/planets?name=${selectedPlanet}`,
        {
          method: "GET",
          headers: { "X-Api-Key": "bnb/fUIldSm8RMWomggGeQ==dCl5VjoCZ3hxGwKi" },
        }
      );
      const result = await response.json();
      setInfo(result);
    } catch (err) {
      console.log(err);
    } finally {
      setInfoLoader(false);
    }
  };

  useEffect(() => {
    getPlanets(selectedPlanet);
  }, [selectedPlanet]);

  return (
    <div>
      <div className={cls.planetMainContainer}>
        <div className={cls.planetInfoContainer}>
          <SolarSystem selectPlanet={selectPlanet} />
          <div className={cls.contentContainer}>
            <div className={cls.textVideoContainer}>
              <video autoPlay loop src={video}></video>
            </div>
            <div className={cls.infoContainer}>
              <InfoContainer info={info} loader={infoLoader} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetsPage;
