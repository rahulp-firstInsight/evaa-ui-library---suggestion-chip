import React from "react";
import "./style.scss";

interface Props {
  className: any;
  localTaxi: string;
}

export const LocalTaxi = ({
  className,
  localTaxi = "https://c.animaapp.com/bSDqsV5Y/img/local-taxi.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`local-taxi ${className}`}
      alt="Local taxi"
      src={localTaxi}
    />
  );
};
