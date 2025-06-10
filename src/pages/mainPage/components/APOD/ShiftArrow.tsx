import React, { FC } from "react";
import cls from "./Apod.module.scss";
import arrow from "../../../../../public/assets/img/side_arrow.png";

interface ShiftArrowProps {
  className: string;
  shiftApod: (shift: "prev" | "next") => void;
  shift: "prev" | "next";
}

const ShiftArrow: FC<ShiftArrowProps> = ({ className, shiftApod, shift }) => {
  return (
    <div className={cls[className]}>
      <div className={cls.arrowImgContainer} onClick={() => shiftApod(shift)}>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default ShiftArrow;
