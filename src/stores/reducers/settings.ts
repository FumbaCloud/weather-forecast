import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Weather } from "../../services/weather/types";
import { SelectedCity } from "../../helpers/types/selectedCity";

type SettingsState = {
    history: Weather[];
    currentCity: SelectedCity;
};

const initialSettings: SettingsState = {
    history: [],
    currentCity: {
        lat: 50.45,
        lon: 30.52,
    },
};

export const settingsSlice = createSlice({
    name: "appOptions",
    initialState: initialSettings,
    reducers: {
        addToHistory(state, action: PayloadAction<Weather[]>) {
            state.history = action.payload;
        },
        setCurrentCity(state, action: PayloadAction<SelectedCity>) {
            state.currentCity = action.payload;
        },
    },
});

export default settingsSlice.reducer;
