import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { City } from "./types";

export const FIND_CITY_API_REDUCER_KEY = "findCityApi";

export const findCityApi = createApi({
    reducerPath: FIND_CITY_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.openweathermap.org/geo/1.0",
    }),
    endpoints: (builder) => ({
        getWeather: builder.query<City[], string>({
            query: (city) => {
                return {
                    url: `/direct`,
                    method: "GET",
                    params: {
                        appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
                        limit: 10,
                        q: city,
                    },
                };
            },
        }),
    }),
});
