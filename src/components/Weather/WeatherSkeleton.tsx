import React from "react";

import WeatherSection from "./WeatherSection";

const WeatherSkeleton = () => {
    return (
        <>
            <WeatherSection main>
                <h3>Loading...</h3>
            </WeatherSection>
            <WeatherSection title={"Feels like"}>
                <span>-</span>
            </WeatherSection>
            <WeatherSection title={"Wind"}>
                <span>-</span>
            </WeatherSection>
            <WeatherSection title={"Temperatures for the day"}>
                <span>Min: -</span>
                <span>Max: -</span>
            </WeatherSection>
            <WeatherSection title={"Visibility"}>
                <span>-</span>
            </WeatherSection>
        </>
    );
};

export default WeatherSkeleton;