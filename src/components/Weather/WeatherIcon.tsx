import { FC, useMemo } from "react";

const WeatherIcon: FC<{ icon: string }> = ({ icon }) => {
    const iconsUrl = useMemo(() => `https://openweathermap.org/img/wn/${icon}@2x.png`, [icon]);

    return <img alt={"weather icon"} src={iconsUrl} />;
};

export default WeatherIcon;
