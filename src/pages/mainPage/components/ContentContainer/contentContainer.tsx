import React, { useEffect, useState } from "react";
import cls from "./contentContainer.module.scss";
import Apod from "../APOD/Apod";
import Datepicker from "../../../../components/Datepicker/Datepicker";
import { IApod } from "../../../../types/apod";
import { dalyPhoto } from "../../../../api/dalyPhoto";

const contentContainer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [apodData, setApodData] = useState<IApod | null>(null);
  const [loading, setLoading] = useState(false);

  const apodFetch = async (date: Date) => {
    console.log(date);
    setLoading(true);
    try {
      const result = await dalyPhoto(date);
      setApodData(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const shiftApod = (shift: "prev" | "next") => {
    let date;
    const currentDate = new Date(apodData.date);
    if (shift === "prev") {
      const prevDate = currentDate.setDate(currentDate.getDate() - 1);
      date = new Date(prevDate);
    }
    if (shift === "next") {
      const prevDate = currentDate.setDate(currentDate.getDate() + 1);
      if (new Date(prevDate) > new Date()) return;
      date = new Date(prevDate);
    }
    setStartDate(date);
  };

  useEffect(() => {
    apodFetch(startDate);
  }, [startDate]);

  return (
    <div className={cls.contentContainer}>
      <Apod apodData={apodData} loading={loading} shiftApod={shiftApod} />
      <Datepicker startDate={startDate} setStartDate={setStartDate} />
    </div>
  );
};

export default contentContainer;
