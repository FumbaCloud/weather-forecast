import { useEffect } from "react";

import WeatherIcon from "./WeatherIcon";
import WeatherItem from "./WeatherItem";
import useHistory from "../../hooks/useHistory";
import useWeather from "../../hooks/useWeather";
import useCurrentCity from "../../hooks/useCurrentCity";
import toDateTimeFormat from "../../helpers/toDateTimeFormat";
import toWindSpeedFormat from "../../helpers/toWindSpeedFormat";
import toVisibilityFormat from "../../helpers/toVisibilityFormat";
import toTemperatureFormat from "../../helpers/toTemperatureFormat";

const Weather = () => {
    const { currentCity } = useCurrentCity();

    const { data } = useWeather(currentCity);
    const { historyAdd } = useHistory();

    useEffect(() => {
        if (data) {
            historyAdd(data);
        }
    }, [data]);

    return (
        <>
            {data && (
                <div className={"weather"}>
                    <div className={"container"}>
                        <div className={"weather__wrapper"}>
                            <WeatherItem main>
                                <h3>{data.name}</h3>
                                <small>{toDateTimeFormat(data.dt)}</small>
                                <WeatherIcon icon={data.weather[0].icon} />
                                <big>{toTemperatureFormat(data.main.temp)}</big>
                                <span>{data.weather[0].main}</span>
                                <small>({data.weather[0].description})</small>
                            </WeatherItem>

                            <WeatherItem title={"Feels like"}>
                                <span>{toTemperatureFormat(data.main.feels_like)}</span>
                            </WeatherItem>

                            <WeatherItem title={"Wind"}>
                                <span>{toWindSpeedFormat(data.wind.speed)}</span>
                            </WeatherItem>

                            <WeatherItem title={"Temperatures for the day"}>
                                <span>Min: {toTemperatureFormat(data.main.temp_min)}</span>
                                <span>Max: {toTemperatureFormat(data.main.temp_max)}</span>
                            </WeatherItem>

                            <WeatherItem title={"Visibility"}>
                                <span>{toVisibilityFormat(data.visibility)}</span>
                            </WeatherItem>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Weather;
