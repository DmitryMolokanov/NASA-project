import React, { FC } from "react";
import { PlanetInfo } from "../../../../types/planetInfo";
import cls from "../../PlanetPage.module.scss";
import TextTableLoader from "../../../../components/Loader/TextTableLoader";

interface InfoContainerProps {
  info: PlanetInfo[];
  loader: boolean;
}

const InfoContainer: FC<InfoContainerProps> = ({ info, loader }) => {
  return (
    <div className={cls.info}>
      <table>
        <thead></thead>
        <tbody>
          {info &&
            Object.entries(info[0]).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{loader ? <TextTableLoader /> : item[1]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default InfoContainer;
