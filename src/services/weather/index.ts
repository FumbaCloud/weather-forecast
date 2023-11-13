import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Weather } from "./types";

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.openweathermap.org/data/2.5",
    }),
    endpoints: (builder) => ({
        getWeather: builder.query<Weather, string>({
            query: (city) => {
                return {
                    url: `/weather`,
                    method: "GET",
                    params: {
                        appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
                        q: city,
                        units: "metric",
                    },
                };
            },
        }),
    }),
});
