import React from "react";
import cls from "./MainMarsContainer.module.scss";
import { IMarsPhoto } from "../../../../types/mars";

interface MainMarsContainerProps {
  marsPhoto: IMarsPhoto[];
  setSelectPhoto: (el: IMarsPhoto) => void;
  setIsShown: (el: boolean) => void;
}

const MainMarsContainer = ({
  marsPhoto,
  setSelectPhoto,
  setIsShown,
}: MainMarsContainerProps) => {
  const selectPhoto = (photo: IMarsPhoto) => {
    setSelectPhoto(photo);
    setIsShown(true);
  };

  return (
    <div>
      <div className={cls.photoContainer}>
        {marsPhoto.map((item) => {
          return (
            <div
              className={cls.photo}
              key={item.id}
              onClick={() => selectPhoto(item)}
            >
              <img src={item.img_src} alt="mars_img" loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainMarsContainer;
