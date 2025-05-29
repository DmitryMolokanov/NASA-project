import React, { FC, useState } from "react";
import cls from "./SettingsMars.module.scss";
import Button from "../../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import helpIcon from "../../../../../public/assets/img/help.png";

interface SettingsMarsProps {
  totalSolCount: number;
  setSol: (el: number) => void;
  setRoverName: (el: string) => void;
}

const SettingsMars: FC<SettingsMarsProps> = ({
  totalSolCount,
  setSol,
  setRoverName,
}) => {
  const [solValue, setSolValue] = useState<number | "">("");
  const [error, setError] = useState<string>("");

  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-9]+$/gm;
    if (!regex.test(value) && value !== "") {
      setError("the value can only contain numbers");
    } else setError("");
    if (+value > totalSolCount) {
      e.target.value = String(totalSolCount);
      setSolValue(totalSolCount);
    } else setSolValue(+value);
  };

  const saveSol = () => {
    if (solValue && !error) {
      setSol(solValue);
      setSolValue("");
    }
  };

  return (
    <div className={cls.settingsContainer}>
      <div className={cls.setSolContainer}>
        <label className={cls.solInputLabel}>
          {t("Please set sol")}
          <div className={cls.labelHelpContainer}>
            <img src={helpIcon} alt="help" width={18} height={18} />
          </div>
        </label>

        <div className={cls.solInputContainer}>
          <input
            type="text"
            className={cls.solInput}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button className={cls.solInputBtn} onClick={saveSol}>
            Set
          </Button>
        </div>
        <div className={cls.errContainer}>
          {error && <span className={cls.errValue}>{error}</span>}
        </div>
      </div>
      <div>
        <div className={cls.setSolContainer}>
          <label className={cls.solInputLabel}>{t("Select rover")}</label>
          <select
            className={cls.roverSelect}
            onChange={(e) => setRoverName(e.target.value)}
          >
            <option value="curiosity">Curiosity</option>
            <option value="perseverance">Perseverance</option>
          </select>
        </div>
        <div className={cls.errContainer}></div>
      </div>
    </div>
  );
};

export default SettingsMars;
