import React from "react";
import cls from "./Apod.module.scss";
import { IApod } from "../../../../types/apod";
import loader from "../../../../../public/assets/img/loader.gif";
import ApodMainInfo from "./ApodMainInfo";
import Loader from "../../../../components/Loader/Loader";

interface ApodProps {
  apodData: IApod;
  loading: boolean;
  shiftApod: (shift: "prev" | "next") => void;
}

const Apod = ({ apodData, loading, shiftApod }: ApodProps) => {
  return (
    <div className={cls.apodContainer}>
      <div className={cls.title}>
        <h1>Astronomy Picture of the Day</h1>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <ApodMainInfo apodData={apodData} shiftApod={shiftApod} />
      )}
    </div>
  );
};

export default Apod;
