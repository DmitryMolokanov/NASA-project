import React, { useState } from "react";
import cls from "./Apod.module.scss";
import { IApod } from "../../../../types/apod";
import zoom from "../../../../../public/assets/img/zoom.png";
import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import arrow from "../../../../../public/assets/img/side_arrow.png";
import ShiftArrow from "./ShiftArrow";

interface ApodMainInfoProps {
  apodData: IApod;
  shiftApod: (shift: "prev" | "next") => void;
}

const ApodMainInfo = ({ apodData, shiftApod }: ApodMainInfoProps) => {
  const [zoomImg, setZoomImg] = useState(false);

  const handleZoom = () => {
    setZoomImg(true);
  };

  return (
    <div className={cls.apodContainer}>
      <div className={cls.imgContainer}>
        <ShiftArrow
          className={"leftArrow"}
          shiftApod={shiftApod}
          shift="prev"
        />

        <div className={cls.urlContainer}>
          {apodData?.media_type !== "video" ? (
            <Button className={cls.zoomImg} onClick={handleZoom}>
              <img src={zoom} alt="zoom" />
            </Button>
          ) : null}

          {apodData?.media_type === "video" ? (
            <iframe className={cls.iframe} src={apodData?.url} />
          ) : (
            <div className={cls.imgContainer}>
              <img src={apodData?.url} alt="Astronomy Picture of the Day" />
            </div>
          )}
        </div>

        <ShiftArrow
          className={"rightArrow"}
          shiftApod={shiftApod}
          shift="next"
        />
      </div>

      <div className={cls.explanation}>
        <p>{apodData?.explanation}</p>
      </div>
      <Modal isShown={zoomImg} setIsShow={setZoomImg}>
        <img src={apodData?.url} alt="Astronomy Picture of the Day" />
      </Modal>
    </div>
  );
};

export default ApodMainInfo;
