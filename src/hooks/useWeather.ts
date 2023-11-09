import { weatherApi } from "../services/weather";
import { CoordType } from "../services/weather/types";

const useWeather = (coords: CoordType) => {
    const { data, error, isLoading } = weatherApi.useGetWeatherQuery(coords, { skip: !coords });

    return { data, error, isLoading };
};

export default useWeather;
