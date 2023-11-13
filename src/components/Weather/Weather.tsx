import { useEffect } from "react";
import classNames from "classnames";

import WeatherIcon from "./WeatherIcon";
import WeatherSection from "./WeatherSection";
import useSettings from "../../hooks/useSettings";
import toDateTimeFormat from "../../helpers/toDateTimeFormat";
import toWindSpeedFormat from "../../helpers/toWindSpeedFormat";
import toVisibilityFormat from "../../helpers/toVisibilityFormat";
import toTemperatureFormat from "../../helpers/toTemperatureFormat";

import { weatherApi } from "../../services/weather";
import WeatherSkeleton from "./WeatherSkeleton";

const Weather = () => {
    const { searchCity, changeSearchCity, recentCity, changeRecentCity } = useSettings();
    const { data, isLoading, isError } = weatherApi.useGetWeatherQuery(searchCity || recentCity);

    useEffect(() => {
        if (isError) {
            changeSearchCity(recentCity);
        } else {
            changeRecentCity(searchCity);
        }
    }, [data, isError]);

    return (
        <div className={"weather"}>
            <div className={"container"}>
                <div className={classNames("weather__wrapper", {"weather__wrapper--loading": isLoading})}>
                    {data ? (
                        <>
                            <WeatherSection main>
                                <h3>{data.name}{`, ${data.sys.country}`}</h3>
                                <small>{toDateTimeFormat(data.dt)}</small>
                                <WeatherIcon icon={data.weather[0].icon} />
                                <big>{toTemperatureFormat(data.main.temp)}</big>
                                <small>({data.weather[0].description})</small>
                            </WeatherSection>
                            <WeatherSection title={"Feels like"}>
                                <span>{toTemperatureFormat(data.main.feels_like)}</span>
                            </WeatherSection>
                            <WeatherSection title={"Wind"}>
                                <span>{toWindSpeedFormat(data.wind.speed)}</span>
                            </WeatherSection>
                            <WeatherSection title={"Temperatures for the day"}>
                                <span>Min: {toTemperatureFormat(data.main.temp_min)}</span>
                                <span>Max: {toTemperatureFormat(data.main.temp_max)}</span>
                            </WeatherSection>
                            <WeatherSection title={"Visibility"}>
                                <span>{toVisibilityFormat(data.visibility)}</span>
                            </WeatherSection>
                        </>
                    ) : (
                        <>
                            {isLoading ? (
                                <WeatherSkeleton/>
                            ) : (
                                <div className={"weather__error"}>The requested weather could not be found. Please check your input and try again.</div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weather;
