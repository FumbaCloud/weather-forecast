import { findCityApi } from "../services/city";

const useFindCity = (searchValue: string) => {
    const { data, error, isLoading } = findCityApi.useGetWeatherQuery(searchValue, { skip: !searchValue });

    return { data, error, isLoading };
};

export default useFindCity;
