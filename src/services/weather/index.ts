import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Weather } from "./types";
import { SelectedCity } from "../../helpers/types/selectedCity";

export const WEATHER_API_REDUCER_KEY = "weatherApi";

export const weatherApi = createApi({
    reducerPath: WEATHER_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.openweathermap.org/data/2.5",
    }),
    endpoints: (builder) => ({
        getWeather: builder.query<Weather, SelectedCity>({
            query: (selectedCity) => {
                return {
                    url: `/weather`,
                    method: "GET",
                    params: {
                        appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
                        lat: selectedCity.lat,
                        lon: selectedCity.lon,
                        units: "metric",
                    },
                };
            },
        }),
    }),
});
