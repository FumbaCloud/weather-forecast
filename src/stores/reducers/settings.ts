import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialSettings = {
    searchCity: string;
    recentCity: string;
    history: string[];
};

const initialSettings: InitialSettings = {
    searchCity: "London",
    recentCity: "London",
    history: ["London", "Paris", "Berlin", "Barcelona", "Tokyo"],
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState: initialSettings,
    reducers: {
        setCurrentCity(state, action: PayloadAction<string>) {
            state.searchCity = action.payload;
        },
        setRecentCity(state, action: PayloadAction<string>) {
            state.recentCity = action.payload;
        },
        addToHistory(state, action: PayloadAction<string>) {
            state.history = [action.payload, ...state.history.filter((record) => record !== action.payload)];
        },
        removeFromHistory(state, action: PayloadAction<string>) {
            state.history = state.history.filter((record) => record !== action.payload);
        },
    },
});

export default settingsSlice.reducer;
